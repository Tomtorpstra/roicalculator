"""
OEE ROI Calculator - Desktop Application
A modern Python GUI application for calculating OEE ROI savings.
"""

import customtkinter as ctk
from tkinter import messagebox
import pandas as pd
from pathlib import Path
import sys
import os

# Matplotlib imports for charts
import matplotlib
matplotlib.use('TkAgg')
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from matplotlib.figure import Figure
import numpy as np


def get_resource_path(relative_path):
    """Get absolute path to resource, works for dev and for PyInstaller.

    Priority:
    1. Look next to the executable (for easy updates without rebuilding)
    2. Fall back to bundled resource (inside the exe)
    """
    # First, check if file exists next to the executable
    if hasattr(sys, '_MEIPASS'):
        # Running as compiled exe - check next to exe first
        exe_dir = Path(sys.executable).parent
        external_path = exe_dir / relative_path
        if external_path.exists():
            return external_path
        # Fall back to bundled resource
        return Path(sys._MEIPASS) / relative_path
    else:
        # Running as script - use script directory
        return Path(__file__).parent / relative_path


class OEECalculatorApp(ctk.CTk):
    def __init__(self):
        super().__init__()

        # Window configuration
        self.title("OEE ROI Calculator - D4A Besparing Berekening")
        self.geometry("1200x1000")
        self.minsize(1000, 800)

        # Set appearance
        ctk.set_appearance_mode("dark")
        ctk.set_default_color_theme("blue")

        # Color scheme
        self.colors = {
            "bg_dark": "#1a1a2e",
            "bg_medium": "#16213e",
            "bg_light": "#0f3460",
            "accent_cyan": "#00d4ff",
            "accent_purple": "#7c3aed",
            "accent_green": "#10b981",
            "text_primary": "#ffffff",
            "text_secondary": "#94a3b8",
            "text_muted": "#64748b",
            "card_bg": "#1e293b",
        }

        # Chart colors
        self.chart_colors = {
            "t4a": "#7c3aed",
            "blue": "#00d4ff",
            "bg": "#1a1a2e",
            "grid": "#2d3748",
            "text": "#e2e8f0"
        }

        self.configure(fg_color=self.colors["bg_dark"])

        # Data
        self.sector_data = {}
        self.work_hours = {1: 2000, 2: 4000, 3: 6000, 4: 8000, 5: 8760}

        # Chart canvas references
        self.chart_canvases = []

        # Load data from Excel
        self.load_excel_data()

        # Create UI
        self.create_widgets()

    def load_excel_data(self):
        """Load sector data from Excel file."""
        excel_path = get_resource_path("Besparing ROI berekening D4A.xlsx")

        if not excel_path.exists():
            messagebox.showerror("Error", f"Excel file not found:\n{excel_path}")
            return

        try:
            df = pd.read_excel(excel_path, sheet_name='OEE overzicht', header=None)

            header_row = None
            for i, row in df.iterrows():
                if row[1] == 'Sectoren':
                    header_row = i
                    break

            if header_row is None:
                messagebox.showerror("Error", "Could not find 'Sectoren' header row")
                return

            for i in range(header_row + 1, len(df)):
                if df.iloc[i, 1] == 'Ploegen':
                    for j in range(i + 1, min(i + 6, len(df))):
                        try:
                            ploeg = int(df.iloc[j, 1])
                            hours = float(df.iloc[j, 2])
                            self.work_hours[ploeg] = hours
                        except (ValueError, TypeError):
                            pass
                    break

            for i in range(header_row + 1, len(df)):
                sector_name = df.iloc[i, 1]

                if pd.isna(sector_name) or sector_name == 'Rekentabel':
                    break

                sector_key = ''.join(c for c in sector_name.lower().replace(' ', '') if c.isalpha())

                value_per_hour = float(df.iloc[i, 2]) if pd.notna(df.iloc[i, 2]) else 0
                oee_start = float(df.iloc[i, 3]) if pd.notna(df.iloc[i, 3]) else 0

                no_oee = {
                    'availability': float(df.iloc[i, 5]) if pd.notna(df.iloc[i, 5]) else 0,
                    'performance': float(df.iloc[i, 6]) if pd.notna(df.iloc[i, 6]) else 0,
                    'quality': float(df.iloc[i, 7]) if pd.notna(df.iloc[i, 7]) else 0,
                    'total': float(df.iloc[i, 8]) if pd.notna(df.iloc[i, 8]) else 0
                }

                upgrade = {
                    'availability': float(df.iloc[i, 14]) if pd.notna(df.iloc[i, 14]) else 0,
                    'performance': float(df.iloc[i, 15]) if pd.notna(df.iloc[i, 15]) else 0,
                    'quality': float(df.iloc[i, 16]) if pd.notna(df.iloc[i, 16]) else 0,
                    'total': float(df.iloc[i, 17]) if pd.notna(df.iloc[i, 17]) else 0
                }

                savings = {}
                savings_start_col = 23
                for shift in range(1, 6):
                    t4a_col = savings_start_col + (shift - 1) * 2
                    blue_col = t4a_col + 1
                    savings[shift] = {
                        't4a': float(df.iloc[i, t4a_col]) if pd.notna(df.iloc[i, t4a_col]) else 0,
                        'blue': float(df.iloc[i, blue_col]) if pd.notna(df.iloc[i, blue_col]) else 0
                    }

                self.sector_data[sector_key] = {
                    'name': sector_name,
                    'valuePerHour': value_per_hour,
                    'oeeStart': oee_start,
                    'noOEE': no_oee,
                    'upgrade': upgrade,
                    'savings': savings
                }

        except Exception as e:
            messagebox.showerror("Error", f"Failed to load Excel data:\n{e}")

    def create_widgets(self):
        """Create all UI widgets."""
        self.main_frame = ctk.CTkScrollableFrame(
            self,
            fg_color="transparent",
            scrollbar_button_color=self.colors["accent_cyan"],
            scrollbar_button_hover_color=self.colors["accent_purple"]
        )
        self.main_frame.pack(fill="both", expand=True, padx=20, pady=20)

        self.create_title()
        self.create_input_card()

        self.results_frame = None
        self.savings_frame = None
        self.charts_frame = None

    def create_title(self):
        """Create title section."""
        title_frame = ctk.CTkFrame(self.main_frame, fg_color="transparent")
        title_frame.pack(fill="x", pady=(0, 20))

        title = ctk.CTkLabel(
            title_frame,
            text="OEE ROI Calculator",
            font=ctk.CTkFont(size=32, weight="bold"),
            text_color=self.colors["accent_cyan"]
        )
        title.pack()

        subtitle = ctk.CTkLabel(
            title_frame,
            text="Bereken uw potentiele besparing met T4A/P4A OEE-optimalisatie",
            font=ctk.CTkFont(size=14),
            text_color=self.colors["text_secondary"]
        )
        subtitle.pack(pady=(5, 0))

    def create_input_card(self):
        """Create input section card."""
        card = ctk.CTkFrame(
            self.main_frame,
            fg_color=self.colors["card_bg"],
            corner_radius=16,
            border_width=1,
            border_color=self.colors["bg_light"]
        )
        card.pack(fill="x", pady=(0, 20))

        header_frame = ctk.CTkFrame(card, fg_color="transparent")
        header_frame.pack(fill="x", padx=30, pady=(25, 15))

        accent_bar = ctk.CTkFrame(
            header_frame, width=4, height=24,
            fg_color=self.colors["accent_cyan"], corner_radius=2
        )
        accent_bar.pack(side="left", padx=(0, 10))

        header_label = ctk.CTkLabel(
            header_frame, text="Uw Huidige Situatie",
            font=ctk.CTkFont(size=18, weight="bold"),
            text_color=self.colors["accent_cyan"]
        )
        header_label.pack(side="left")

        inputs_frame = ctk.CTkFrame(card, fg_color="transparent")
        inputs_frame.pack(fill="x", padx=30, pady=(0, 25))

        row1_frame = ctk.CTkFrame(inputs_frame, fg_color="transparent")
        row1_frame.pack(fill="x", pady=(0, 15))
        row1_frame.grid_columnconfigure((0, 1, 2), weight=1, uniform="col")

        # Sector dropdown
        sector_frame = ctk.CTkFrame(row1_frame, fg_color="transparent")
        sector_frame.grid(row=0, column=0, sticky="ew", padx=(0, 10))

        ctk.CTkLabel(
            sector_frame, text="Sector / Industrie",
            font=ctk.CTkFont(size=13, weight="bold"),
            text_color=self.colors["text_primary"]
        ).pack(anchor="w", pady=(0, 8))

        sector_values = ["-- Selecteer uw sector --"] + [data["name"] for data in self.sector_data.values()]
        self.sector_var = ctk.StringVar(value=sector_values[0])
        self.sector_dropdown = ctk.CTkComboBox(
            sector_frame, values=sector_values, variable=self.sector_var,
            command=self.on_input_change, width=250, height=45,
            font=ctk.CTkFont(size=13), dropdown_font=ctk.CTkFont(size=12),
            fg_color=self.colors["bg_medium"], border_color=self.colors["bg_light"],
            button_color=self.colors["accent_cyan"], button_hover_color=self.colors["accent_purple"],
            dropdown_fg_color=self.colors["bg_dark"], dropdown_hover_color=self.colors["bg_light"]
        )
        self.sector_dropdown.pack(fill="x")

        # Shifts dropdown
        shifts_frame = ctk.CTkFrame(row1_frame, fg_color="transparent")
        shifts_frame.grid(row=0, column=1, sticky="ew", padx=10)

        ctk.CTkLabel(
            shifts_frame, text="Ploegen Regime",
            font=ctk.CTkFont(size=13, weight="bold"),
            text_color=self.colors["text_primary"]
        ).pack(anchor="w", pady=(0, 8))

        shift_values = ["-- Selecteer ploegen --", "1 ploeg", "2 ploegen", "3 ploegen", "4 ploegen", "5 ploegen"]
        self.shifts_var = ctk.StringVar(value=shift_values[0])
        self.shifts_dropdown = ctk.CTkComboBox(
            shifts_frame, values=shift_values, variable=self.shifts_var,
            command=self.on_input_change, width=200, height=45,
            font=ctk.CTkFont(size=13), dropdown_font=ctk.CTkFont(size=12),
            fg_color=self.colors["bg_medium"], border_color=self.colors["bg_light"],
            button_color=self.colors["accent_cyan"], button_hover_color=self.colors["accent_purple"],
            dropdown_fg_color=self.colors["bg_dark"], dropdown_hover_color=self.colors["bg_light"]
        )
        self.shifts_dropdown.pack(fill="x")

        # Lines input
        lines_frame = ctk.CTkFrame(row1_frame, fg_color="transparent")
        lines_frame.grid(row=0, column=2, sticky="ew", padx=(10, 0))

        ctk.CTkLabel(
            lines_frame, text="Aantal Lijnen",
            font=ctk.CTkFont(size=13, weight="bold"),
            text_color=self.colors["text_primary"]
        ).pack(anchor="w", pady=(0, 8))

        self.lines_var = ctk.StringVar(value="1")
        self.lines_entry = ctk.CTkEntry(
            lines_frame, textvariable=self.lines_var, width=150, height=45,
            font=ctk.CTkFont(size=13), fg_color=self.colors["bg_medium"],
            border_color=self.colors["bg_light"], placeholder_text="1-100"
        )
        self.lines_entry.pack(fill="x")
        self.lines_entry.bind("<KeyRelease>", lambda e: self.on_input_change())

        # Current OEE Situation
        row2_frame = ctk.CTkFrame(inputs_frame, fg_color="transparent")
        row2_frame.pack(fill="x")

        ctk.CTkLabel(
            row2_frame, text="Huidige OEE Situatie",
            font=ctk.CTkFont(size=13, weight="bold"),
            text_color=self.colors["text_primary"]
        ).pack(anchor="w", pady=(0, 8))

        situation_values = [
            "-- Selecteer uw huidige situatie --",
            "Geen OEE meting (naar T4A/P4A)",
            "Lokale/basis OEE (upgrade naar T4A/P4A)"
        ]
        self.situation_var = ctk.StringVar(value=situation_values[0])
        self.situation_dropdown = ctk.CTkComboBox(
            row2_frame, values=situation_values, variable=self.situation_var,
            command=self.on_input_change, width=400, height=45,
            font=ctk.CTkFont(size=13), dropdown_font=ctk.CTkFont(size=12),
            fg_color=self.colors["bg_medium"], border_color=self.colors["bg_light"],
            button_color=self.colors["accent_cyan"], button_hover_color=self.colors["accent_purple"],
            dropdown_fg_color=self.colors["bg_dark"], dropdown_hover_color=self.colors["bg_light"]
        )
        self.situation_dropdown.pack(anchor="w")

    def on_input_change(self, *args):
        """Handle input changes and recalculate."""
        self.calculate()

    def get_sector_key(self, sector_name):
        """Get sector key from display name."""
        for key, data in self.sector_data.items():
            if data["name"] == sector_name:
                return key
        return None

    def get_shift_number(self, shift_text):
        """Extract shift number from display text."""
        if not shift_text or shift_text.startswith("--"):
            return None
        try:
            return int(shift_text.split()[0])
        except (ValueError, IndexError):
            return None

    def format_currency(self, value):
        """Format value as EUR currency."""
        return f"\u20ac {value:,.0f}".replace(",", ".")

    def format_percentage(self, value):
        """Format value as percentage."""
        return f"{value * 100:.1f}%"

    def calculate(self):
        """Perform calculations and update display."""
        sector_name = self.sector_var.get()
        sector_key = self.get_sector_key(sector_name)
        shift_num = self.get_shift_number(self.shifts_var.get())
        situation = self.situation_var.get()

        try:
            lines = int(self.lines_var.get())
            lines = max(1, min(100, lines))
        except ValueError:
            lines = 1

        if not sector_key or not shift_num or situation.startswith("--"):
            self.hide_results()
            return

        data = self.sector_data.get(sector_key)
        if not data:
            self.hide_results()
            return

        if "Geen OEE" in situation:
            oee_data = data["noOEE"]
        else:
            oee_data = data["upgrade"]

        savings_per_line = data["savings"].get(shift_num)
        if not savings_per_line:
            self.hide_results()
            return

        # Total 3-year benefit (Excel values are already 3-year totals per line)
        total_t4a = savings_per_line["t4a"] * lines
        total_blue = savings_per_line["blue"] * lines

        self.show_results(data, shift_num, lines, total_t4a, total_blue)

    def hide_results(self):
        """Hide results frames."""
        for canvas in self.chart_canvases:
            canvas.get_tk_widget().destroy()
        self.chart_canvases = []

        if self.results_frame:
            self.results_frame.destroy()
            self.results_frame = None
        if self.savings_frame:
            self.savings_frame.destroy()
            self.savings_frame = None
        if self.charts_frame:
            self.charts_frame.destroy()
            self.charts_frame = None

    def show_results(self, data, shift_num, lines, total_t4a, total_blue):
        """Display calculation results."""
        self.hide_results()

        # Results Card
        self.results_frame = ctk.CTkFrame(
            self.main_frame, fg_color=self.colors["card_bg"],
            corner_radius=16, border_width=1, border_color=self.colors["bg_light"]
        )
        self.results_frame.pack(fill="x", pady=(0, 20))

        self.create_card_header(self.results_frame, "Sector Gegevens")

        results_grid = ctk.CTkFrame(self.results_frame, fg_color="transparent")
        results_grid.pack(fill="x", padx=30, pady=(0, 20))
        results_grid.grid_columnconfigure((0, 1, 2), weight=1, uniform="res")

        self.create_result_item(results_grid, 0, "Toegevoegde Waarde / Uur",
                               f"\u20ac{data['valuePerHour']:.0f}", "EUR per uur")
        self.create_result_item(results_grid, 1, "Werkbare Uren / Jaar",
                               f"{self.work_hours[shift_num]:,.0f}".replace(",", "."), "uren")
        self.create_result_item(results_grid, 2, "Aantal Lijnen",
                               str(lines), "productie lijnen")

        # Charts Card
        self.charts_frame = ctk.CTkFrame(
            self.main_frame, fg_color=self.colors["card_bg"],
            corner_radius=16, border_width=1, border_color=self.colors["bg_light"]
        )
        self.charts_frame.pack(fill="x", pady=(0, 20))

        self.create_card_header(self.charts_frame, "Totale Waarde over 3 Jaar")

        self.create_comparison_chart(self.charts_frame, total_t4a, total_blue)

        # Summary Cards
        self.savings_frame = ctk.CTkFrame(
            self.main_frame, fg_color=self.colors["card_bg"],
            corner_radius=16, border_width=1, border_color=self.colors["bg_light"]
        )
        self.savings_frame.pack(fill="x", pady=(0, 20))

        self.create_card_header(self.savings_frame, "Totale Besparing (3 Jaar)")

        self.create_summary_cards(self.savings_frame, total_t4a, total_blue, lines)

    def create_comparison_chart(self, parent, total_t4a, total_blue):
        """Create comparison bar chart for total 3-year benefit."""
        chart_frame = ctk.CTkFrame(parent, fg_color="transparent")
        chart_frame.pack(fill="x", padx=30, pady=(0, 25))

        fig = Figure(figsize=(10, 4), dpi=100, facecolor=self.chart_colors["bg"])
        ax = fig.add_subplot(111)
        ax.set_facecolor(self.chart_colors["bg"])

        categories = ['T4A/P4A', 'Blue-T4A']
        values = [total_t4a / 1000, total_blue / 1000]
        colors = [self.chart_colors["t4a"], self.chart_colors["blue"]]

        bars = ax.bar(categories, values, color=colors, width=0.5, edgecolor='white', linewidth=1)

        ax.set_ylabel('Totale Waarde (K EUR)', color=self.chart_colors["text"], fontsize=12)
        ax.set_title('Vergelijking: Totale Besparing over 3 Jaar', color=self.chart_colors["text"],
                    fontsize=14, fontweight='bold', pad=15)
        ax.tick_params(axis='both', colors=self.chart_colors["text"], labelsize=11)

        # Add value labels on bars
        for bar, val in zip(bars, [total_t4a, total_blue]):
            height = bar.get_height()
            ax.annotate(f'\u20ac {val:,.0f}'.replace(',', '.'),
                       xy=(bar.get_x() + bar.get_width() / 2, height),
                       xytext=(0, 8), textcoords="offset points",
                       ha='center', va='bottom', color=self.chart_colors["text"],
                       fontsize=14, fontweight='bold')

        ax.spines['bottom'].set_color(self.chart_colors["grid"])
        ax.spines['top'].set_visible(False)
        ax.spines['right'].set_visible(False)
        ax.spines['left'].set_color(self.chart_colors["grid"])
        ax.grid(axis='y', color=self.chart_colors["grid"], linestyle='--', alpha=0.3)

        # Set y-axis to start at 0
        ax.set_ylim(bottom=0)

        fig.tight_layout()

        canvas = FigureCanvasTkAgg(fig, master=chart_frame)
        canvas.draw()
        canvas.get_tk_widget().pack(fill="both", expand=True, padx=10, pady=10)
        self.chart_canvases.append(canvas)

    def create_card_header(self, parent, title):
        """Create a card header with accent bar."""
        header_frame = ctk.CTkFrame(parent, fg_color="transparent")
        header_frame.pack(fill="x", padx=30, pady=(25, 15))

        accent_bar = ctk.CTkFrame(
            header_frame, width=4, height=24,
            fg_color=self.colors["accent_cyan"], corner_radius=2
        )
        accent_bar.pack(side="left", padx=(0, 10))

        header_label = ctk.CTkLabel(
            header_frame, text=title,
            font=ctk.CTkFont(size=18, weight="bold"),
            text_color=self.colors["accent_cyan"]
        )
        header_label.pack(side="left")

    def create_result_item(self, parent, col, label, value, unit, highlight=False):
        """Create a result display item."""
        item_frame = ctk.CTkFrame(parent, fg_color=self.colors["bg_medium"], corner_radius=12)
        item_frame.grid(row=0, column=col, sticky="nsew", padx=5, pady=5)

        ctk.CTkLabel(
            item_frame, text=label.upper(),
            font=ctk.CTkFont(size=10), text_color=self.colors["text_secondary"]
        ).pack(pady=(15, 5))

        value_color = self.colors["accent_green"] if highlight else self.colors["accent_cyan"]
        ctk.CTkLabel(
            item_frame, text=value,
            font=ctk.CTkFont(size=20, weight="bold"), text_color=value_color
        ).pack()

        ctk.CTkLabel(
            item_frame, text=unit,
            font=ctk.CTkFont(size=10), text_color=self.colors["text_muted"]
        ).pack(pady=(5, 15))

    def create_summary_cards(self, parent, total_t4a, total_blue, lines):
        """Create summary cards for totals."""
        cards_frame = ctk.CTkFrame(parent, fg_color="transparent")
        cards_frame.pack(fill="x", padx=30, pady=(0, 20))
        cards_frame.grid_columnconfigure((0, 1), weight=1, uniform="sum")

        # T4A Card
        t4a_card = ctk.CTkFrame(
            cards_frame, fg_color=self.colors["bg_medium"],
            corner_radius=12, border_width=1, border_color=self.colors["accent_purple"]
        )
        t4a_card.grid(row=0, column=0, sticky="ew", padx=(0, 10))

        ctk.CTkLabel(
            t4a_card, text="T4A/P4A Totale Waarde",
            font=ctk.CTkFont(size=14, weight="bold"),
            text_color=self.colors["text_primary"]
        ).pack(pady=(20, 10))

        ctk.CTkLabel(
            t4a_card, text=self.format_currency(total_t4a),
            font=ctk.CTkFont(size=28, weight="bold"),
            text_color=self.colors["accent_purple"]
        ).pack()

        ctk.CTkLabel(
            t4a_card, text=f"over 3 jaar | {lines} lijnen",
            font=ctk.CTkFont(size=11), text_color=self.colors["text_muted"]
        ).pack(pady=(5, 20))

        # Blue-T4A Card
        blue_card = ctk.CTkFrame(
            cards_frame, fg_color=self.colors["bg_medium"],
            corner_radius=12, border_width=1, border_color=self.colors["accent_cyan"]
        )
        blue_card.grid(row=0, column=1, sticky="ew", padx=(10, 0))

        ctk.CTkLabel(
            blue_card, text="Blue-T4A Totale Waarde",
            font=ctk.CTkFont(size=14, weight="bold"),
            text_color=self.colors["text_primary"]
        ).pack(pady=(20, 10))

        ctk.CTkLabel(
            blue_card, text=self.format_currency(total_blue),
            font=ctk.CTkFont(size=28, weight="bold"),
            text_color=self.colors["accent_cyan"]
        ).pack()

        ctk.CTkLabel(
            blue_card, text=f"over 3 jaar | {lines} lijnen",
            font=ctk.CTkFont(size=11), text_color=self.colors["text_muted"]
        ).pack(pady=(5, 20))

    def create_info_box(self, parent):
        """Create info box with distribution explanation."""
        info_frame = ctk.CTkFrame(parent, fg_color=self.colors["bg_medium"], corner_radius=8)
        info_frame.pack(fill="x", padx=30, pady=(0, 25))

        accent = ctk.CTkFrame(info_frame, width=4, fg_color=self.colors["accent_cyan"])
        accent.pack(side="left", fill="y")

        content = ctk.CTkFrame(info_frame, fg_color="transparent")
        content.pack(fill="x", padx=20, pady=15)

        ctk.CTkLabel(
            content, text="Verdeelsleutel toegevoegde waarde:",
            font=ctk.CTkFont(size=13, weight="bold"),
            text_color=self.colors["text_secondary"]
        ).pack(anchor="w", pady=(0, 10))

        explanations = [
            "Jaar 1 (25%): Implementatie & meetfase - eerste verbeteringen zichtbaar",
            "Jaar 2 (40%): Optimalisatiefase - grootste winst door data-gedreven verbeteringen",
            "Jaar 3 (35%): Volwassenheidsfase - volledige potentieel gerealiseerd"
        ]

        for exp in explanations:
            ctk.CTkLabel(
                content, text=f"  \u2022 {exp}",
                font=ctk.CTkFont(size=12),
                text_color=self.colors["text_secondary"], justify="left"
            ).pack(anchor="w", pady=2)

        ctk.CTkLabel(
            content,
            text="\nBron: TPM-literatuur (Nakajima) geeft aan dat ~1/3 van het potentieel\nwordt gerealiseerd in de \"measurement-only phase\".",
            font=ctk.CTkFont(size=11),
            text_color=self.colors["text_muted"], justify="left"
        ).pack(anchor="w", pady=(10, 0))


def main():
    app = OEECalculatorApp()
    app.mainloop()


if __name__ == "__main__":
    main()
