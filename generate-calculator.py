"""
OEE ROI Calculator Generator
Reads data from Excel and generates the HTML calculator with embedded values.

Run this script whenever you update the Excel file:
    python generate-calculator.py

The HTML file will be updated with the latest data from Excel.
"""

import pandas as pd
import json
from pathlib import Path

# File paths (relative to script location)
SCRIPT_DIR = Path(__file__).parent
EXCEL_PATH = SCRIPT_DIR / "Besparing ROI berekening D4A.xlsx"
HTML_PATH = SCRIPT_DIR / "oee-roi-calculator.html"


def read_excel_data():
    """Read and parse data from the Excel file."""

    # Read the OEE overzicht sheet
    df = pd.read_excel(EXCEL_PATH, sheet_name='OEE overzicht', header=None)

    # Find the header row (row with "Sectoren")
    header_row = None
    for i, row in df.iterrows():
        if row[1] == 'Sectoren':
            header_row = i
            break

    if header_row is None:
        raise ValueError("Could not find 'Sectoren' header row")

    # Parse work hours from Rekentabel section
    work_hours = {1: 2000, 2: 4000, 3: 6000, 4: 8000, 5: 8760}
    for i in range(header_row + 1, len(df)):
        if df.iloc[i, 1] == 'Ploegen':
            for j in range(i + 1, min(i + 6, len(df))):
                try:
                    ploeg = int(df.iloc[j, 1])
                    hours = float(df.iloc[j, 2])
                    work_hours[ploeg] = hours
                except (ValueError, TypeError):
                    pass
            break

    # Parse sector data
    sector_data = {}
    for i in range(header_row + 1, len(df)):
        sector_name = df.iloc[i, 1]

        # Stop if we hit Rekentabel or empty
        if pd.isna(sector_name) or sector_name == 'Rekentabel':
            break

        sector_key = ''.join(c for c in sector_name.lower().replace(' ', '') if c.isalpha())

        # Parse values
        value_per_hour = float(df.iloc[i, 2]) if pd.notna(df.iloc[i, 2]) else 0
        oee_start = float(df.iloc[i, 3]) if pd.notna(df.iloc[i, 3]) else 0

        # OEE verhoging van niets naar T4A (columns 5, 6, 7, 8)
        no_oee = {
            'availability': float(df.iloc[i, 5]) if pd.notna(df.iloc[i, 5]) else 0,
            'performance': float(df.iloc[i, 6]) if pd.notna(df.iloc[i, 6]) else 0,
            'quality': float(df.iloc[i, 7]) if pd.notna(df.iloc[i, 7]) else 0,
            'total': float(df.iloc[i, 8]) if pd.notna(df.iloc[i, 8]) else 0
        }

        # OEE verhoging upgrade naar T4A (columns 14, 15, 16, 17)
        upgrade = {
            'availability': float(df.iloc[i, 14]) if pd.notna(df.iloc[i, 14]) else 0,
            'performance': float(df.iloc[i, 15]) if pd.notna(df.iloc[i, 15]) else 0,
            'quality': float(df.iloc[i, 16]) if pd.notna(df.iloc[i, 16]) else 0,
            'total': float(df.iloc[i, 17]) if pd.notna(df.iloc[i, 17]) else 0
        }

        # Savings per shift (columns 23-32)
        savings = {}
        savings_start_col = 23
        for shift in range(1, 6):
            t4a_col = savings_start_col + (shift - 1) * 2
            blue_col = t4a_col + 1
            savings[shift] = {
                't4a': float(df.iloc[i, t4a_col]) if pd.notna(df.iloc[i, t4a_col]) else 0,
                'blue': float(df.iloc[i, blue_col]) if pd.notna(df.iloc[i, blue_col]) else 0
            }

        sector_data[sector_key] = {
            'name': sector_name,
            'valuePerHour': value_per_hour,
            'oeeStart': oee_start,
            'noOEE': no_oee,
            'upgrade': upgrade,
            'savings': savings
        }

    return sector_data, work_hours


def generate_html(sector_data, work_hours):
    """Generate the HTML calculator with embedded data."""

    # Convert Python dict to JavaScript object string
    sector_data_js = json.dumps(sector_data, indent=12)
    work_hours_js = json.dumps(work_hours, indent=12)

    # Generate sector options HTML
    sector_options = '\n'.join([
        f'                        <option value="{key}">{data["name"]}</option>'
        for key, data in sector_data.items()
    ])

    html = f'''<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OEE ROI Calculator - D4A Besparing Berekening</title>
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}

        body {{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            min-height: 100vh;
            padding: 40px 20px;
            color: #fff;
        }}

        .container {{
            max-width: 1100px;
            margin: 0 auto;
        }}

        h1 {{
            text-align: center;
            margin-bottom: 10px;
            font-size: 2.2rem;
            background: linear-gradient(90deg, #00d4ff, #7c3aed);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }}

        .subtitle {{
            text-align: center;
            color: #94a3b8;
            margin-bottom: 40px;
            font-size: 1rem;
        }}

        .card {{
            background: rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 25px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }}

        .card h2 {{
            color: #00d4ff;
            margin-bottom: 20px;
            font-size: 1.3rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }}

        .card h2::before {{
            content: '';
            width: 4px;
            height: 24px;
            background: linear-gradient(180deg, #00d4ff, #7c3aed);
            border-radius: 2px;
        }}

        .form-row {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
        }}

        .form-group {{
            margin-bottom: 20px;
        }}

        label {{
            display: block;
            margin-bottom: 8px;
            color: #e2e8f0;
            font-weight: 500;
        }}

        select, input[type="number"] {{
            width: 100%;
            padding: 14px 16px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.08);
            color: #fff;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }}

        select {{
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 12px center;
            background-size: 20px;
        }}

        input[type="number"] {{
            cursor: text;
        }}

        select:hover, input[type="number"]:hover {{
            border-color: #00d4ff;
        }}

        select:focus, input[type="number"]:focus {{
            outline: none;
            border-color: #7c3aed;
            box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
        }}

        select option {{
            background: #1a1a2e;
            color: #fff;
            padding: 10px;
        }}

        .results-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }}

        .result-item {{
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: transform 0.3s ease;
        }}

        .result-item:hover {{
            transform: translateY(-3px);
        }}

        .result-label {{
            color: #94a3b8;
            font-size: 0.85rem;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }}

        .result-value {{
            font-size: 1.6rem;
            font-weight: 700;
            background: linear-gradient(90deg, #00d4ff, #7c3aed);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }}

        .result-value.highlight {{
            background: linear-gradient(90deg, #10b981, #34d399);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }}

        .result-unit {{
            color: #64748b;
            font-size: 0.8rem;
            margin-top: 4px;
        }}

        .yearly-table {{
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }}

        .yearly-table th,
        .yearly-table td {{
            padding: 16px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }}

        .yearly-table th {{
            color: #00d4ff;
            font-weight: 600;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }}

        .yearly-table td {{
            color: #e2e8f0;
        }}

        .yearly-table tr:hover {{
            background: rgba(255, 255, 255, 0.03);
        }}

        .yearly-table .year-header {{
            background: rgba(124, 58, 237, 0.15);
            color: #a78bfa;
            font-weight: 600;
        }}

        .yearly-table .total-row {{
            background: rgba(0, 212, 255, 0.1);
            font-weight: 700;
        }}

        .yearly-table .total-row td {{
            color: #00d4ff;
            font-size: 1.1rem;
        }}

        .info-box {{
            background: rgba(0, 212, 255, 0.1);
            border-left: 4px solid #00d4ff;
            padding: 15px 20px;
            border-radius: 0 8px 8px 0;
            margin-top: 20px;
        }}

        .info-box p {{
            color: #94a3b8;
            font-size: 0.9rem;
            line-height: 1.6;
        }}

        .info-box ul {{
            color: #94a3b8;
            font-size: 0.9rem;
            line-height: 1.8;
            margin-top: 10px;
            padding-left: 20px;
        }}

        .oee-breakdown {{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin-top: 20px;
        }}

        .oee-item {{
            background: rgba(255, 255, 255, 0.03);
            border-radius: 10px;
            padding: 15px;
            text-align: center;
        }}

        .oee-item-label {{
            color: #94a3b8;
            font-size: 0.8rem;
            margin-bottom: 5px;
        }}

        .oee-item-value {{
            color: #fff;
            font-size: 1.2rem;
            font-weight: 600;
        }}

        .summary-cards {{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 25px;
        }}

        .summary-card {{
            background: linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, rgba(0, 212, 255, 0.1) 100%);
            border-radius: 12px;
            padding: 25px;
            text-align: center;
            border: 1px solid rgba(124, 58, 237, 0.3);
        }}

        .summary-card.blue {{
            background: linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%);
            border: 1px solid rgba(0, 212, 255, 0.3);
        }}

        .summary-card-label {{
            color: #e2e8f0;
            font-size: 1rem;
            margin-bottom: 10px;
            font-weight: 500;
        }}

        .summary-card-value {{
            font-size: 2rem;
            font-weight: 700;
            color: #a78bfa;
        }}

        .summary-card.blue .summary-card-value {{
            color: #00d4ff;
        }}

        .summary-card-sub {{
            color: #64748b;
            font-size: 0.85rem;
            margin-top: 5px;
        }}

        footer {{
            text-align: center;
            margin-top: 40px;
            color: #64748b;
            font-size: 0.85rem;
        }}

        @media (max-width: 768px) {{
            .summary-cards {{
                grid-template-columns: 1fr;
            }}
            .form-row {{
                grid-template-columns: 1fr;
            }}
        }}
    </style>
</head>
<body>
    <div class="container">
        <h1>OEE ROI Calculator</h1>
        <p class="subtitle">Bereken uw potentiele besparing met T4A/P4A OEE-optimalisatie</p>

        <div class="card">
            <h2>Uw Huidige Situatie</h2>

            <div class="form-row">
                <div class="form-group">
                    <label for="sector">Sector / Industrie</label>
                    <select id="sector" onchange="calculate()">
                        <option value="">-- Selecteer uw sector --</option>
{sector_options}
                    </select>
                </div>

                <div class="form-group">
                    <label for="shifts">Ploegen Regime</label>
                    <select id="shifts" onchange="calculate()">
                        <option value="">-- Selecteer ploegen --</option>
                        <option value="1">1 ploeg</option>
                        <option value="2">2 ploegen</option>
                        <option value="3">3 ploegen</option>
                        <option value="4">4 ploegen</option>
                        <option value="5">5 ploegen</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="lines">Aantal Lijnen</label>
                    <input type="number" id="lines" min="1" max="100" value="1" onchange="calculate()" oninput="calculate()">
                </div>
            </div>

            <div class="form-group">
                <label for="currentSituation">Huidige OEE Situatie</label>
                <select id="currentSituation" onchange="calculate()">
                    <option value="">-- Selecteer uw huidige situatie --</option>
                    <option value="noOEE">Geen OEE meting (naar T4A/P4A)</option>
                    <option value="localOEE">Lokale/basis OEE (upgrade naar T4A/P4A)</option>
                </select>
            </div>
        </div>

        <div class="card" id="resultsCard" style="display: none;">
            <h2>Sector Gegevens</h2>

            <div class="results-grid">
                <div class="result-item">
                    <div class="result-label">Toegevoegde Waarde / Uur</div>
                    <div class="result-value" id="valuePerHour">-</div>
                    <div class="result-unit">EUR per uur</div>
                </div>
                <div class="result-item">
                    <div class="result-label">Typische OEE Start</div>
                    <div class="result-value" id="oeeStart">-</div>
                    <div class="result-unit">percentage</div>
                </div>
                <div class="result-item">
                    <div class="result-label">OEE Verhoging</div>
                    <div class="result-value highlight" id="oeeIncrease">-</div>
                    <div class="result-unit">percentage punten</div>
                </div>
                <div class="result-item">
                    <div class="result-label">Werkbare Uren / Jaar</div>
                    <div class="result-value" id="workHours">-</div>
                    <div class="result-unit">uren</div>
                </div>
                <div class="result-item">
                    <div class="result-label">Aantal Lijnen</div>
                    <div class="result-value" id="linesDisplay">-</div>
                    <div class="result-unit">productie lijnen</div>
                </div>
            </div>

            <div class="info-box">
                <p><strong>OEE Verhoging Breakdown:</strong></p>
                <div class="oee-breakdown">
                    <div class="oee-item">
                        <div class="oee-item-label">Beschikbaarheid</div>
                        <div class="oee-item-value" id="availability">-</div>
                    </div>
                    <div class="oee-item">
                        <div class="oee-item-label">Performance</div>
                        <div class="oee-item-value" id="performance">-</div>
                    </div>
                    <div class="oee-item">
                        <div class="oee-item-label">Kwaliteit</div>
                        <div class="oee-item-value" id="quality">-</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card" id="savingsCard" style="display: none;">
            <h2>Toegevoegde Waarde Verhoging over 3 Jaar</h2>

            <table class="yearly-table">
                <thead>
                    <tr>
                        <th>Periode</th>
                        <th>T4A/P4A</th>
                        <th>Blue-T4A</th>
                        <th>Realisatie %</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="year-header">
                        <td>Jaar 1</td>
                        <td id="year1T4A">-</td>
                        <td id="year1Blue">-</td>
                        <td>25%</td>
                    </tr>
                    <tr class="year-header">
                        <td>Jaar 2</td>
                        <td id="year2T4A">-</td>
                        <td id="year2Blue">-</td>
                        <td>40%</td>
                    </tr>
                    <tr class="year-header">
                        <td>Jaar 3</td>
                        <td id="year3T4A">-</td>
                        <td id="year3Blue">-</td>
                        <td>35%</td>
                    </tr>
                    <tr class="total-row">
                        <td><strong>TOTAAL (3 jaar)</strong></td>
                        <td id="totalT4A">-</td>
                        <td id="totalBlue">-</td>
                        <td>100%</td>
                    </tr>
                </tbody>
            </table>

            <div class="summary-cards">
                <div class="summary-card">
                    <div class="summary-card-label">T4A/P4A Totale Waarde</div>
                    <div class="summary-card-value" id="summaryT4A">-</div>
                    <div class="summary-card-sub">over 3 jaar | <span id="linesT4A">-</span> lijnen</div>
                </div>
                <div class="summary-card blue">
                    <div class="summary-card-label">Blue-T4A Totale Waarde</div>
                    <div class="summary-card-value" id="summaryBlue">-</div>
                    <div class="summary-card-sub">over 3 jaar | <span id="linesBlue">-</span> lijnen</div>
                </div>
            </div>

            <div class="info-box" style="margin-top: 30px;">
                <p><strong>Verdeelsleutel toegevoegde waarde:</strong></p>
                <ul>
                    <li><strong>Jaar 1 (25%):</strong> Implementatie & meetfase - eerste verbeteringen zichtbaar</li>
                    <li><strong>Jaar 2 (40%):</strong> Optimalisatiefase - grootste winst door data-gedreven verbeteringen</li>
                    <li><strong>Jaar 3 (35%):</strong> Volwassenheidsfase - volledige potentieel gerealiseerd</li>
                </ul>
                <p style="margin-top: 15px;"><strong>Bron:</strong> TPM-literatuur (Nakajima) geeft aan dat ~1/3 van het potentieel wordt gerealiseerd in de "measurement-only phase".</p>
            </div>
        </div>

        <footer>
            <p>D4A Besparing ROI Berekening | Data gebaseerd op Eurostat SBS & NACE Rev.2 (2022-2023)</p>
        </footer>
    </div>

    <script>
        // Data loaded from Excel file
        const sectorData = {sector_data_js};

        const workHours = {work_hours_js};

        // Year distribution percentages based on TPM literature
        const yearDistribution = {{
            year1: 0.25,
            year2: 0.40,
            year3: 0.35
        }};

        function formatCurrency(value) {{
            return new Intl.NumberFormat('nl-NL', {{
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }}).format(value);
        }}

        function formatPercentage(value) {{
            return (value * 100).toFixed(1) + '%';
        }}

        function calculate() {{
            const sector = document.getElementById('sector').value;
            const situation = document.getElementById('currentSituation').value;
            const shifts = document.getElementById('shifts').value;
            const lines = parseInt(document.getElementById('lines').value) || 1;

            const resultsCard = document.getElementById('resultsCard');
            const savingsCard = document.getElementById('savingsCard');

            if (!sector || !situation || !shifts || !sectorData[sector]) {{
                resultsCard.style.display = 'none';
                savingsCard.style.display = 'none';
                return;
            }}

            const data = sectorData[sector];
            const oeeData = situation === 'noOEE' ? data.noOEE : data.upgrade;
            const savingsPerLine = data.savings[shifts];

            if (!savingsPerLine) {{
                resultsCard.style.display = 'none';
                savingsCard.style.display = 'none';
                return;
            }}

            // Calculate total savings based on number of lines
            const totalT4APerYear = savingsPerLine.t4a * lines;
            const totalBluePerYear = savingsPerLine.blue * lines;

            // Calculate 3-year totals
            const total3YearT4A = totalT4APerYear * 3;
            const total3YearBlue = totalBluePerYear * 3;

            // Calculate yearly distribution
            const year1T4A = total3YearT4A * yearDistribution.year1;
            const year2T4A = total3YearT4A * yearDistribution.year2;
            const year3T4A = total3YearT4A * yearDistribution.year3;

            const year1Blue = total3YearBlue * yearDistribution.year1;
            const year2Blue = total3YearBlue * yearDistribution.year2;
            const year3Blue = total3YearBlue * yearDistribution.year3;

            // Update sector info
            document.getElementById('valuePerHour').textContent = '€' + data.valuePerHour;
            document.getElementById('oeeStart').textContent = formatPercentage(data.oeeStart);
            document.getElementById('oeeIncrease').textContent = '+' + formatPercentage(oeeData.total);
            document.getElementById('workHours').textContent = (workHours[shifts] || 0).toLocaleString('nl-NL');
            document.getElementById('linesDisplay').textContent = lines;

            // Update OEE breakdown
            document.getElementById('availability').textContent = '+' + formatPercentage(oeeData.availability);
            document.getElementById('performance').textContent = '+' + formatPercentage(oeeData.performance);
            document.getElementById('quality').textContent = '+' + formatPercentage(oeeData.quality);

            // Update yearly table
            document.getElementById('year1T4A').textContent = formatCurrency(year1T4A);
            document.getElementById('year1Blue').textContent = formatCurrency(year1Blue);
            document.getElementById('year2T4A').textContent = formatCurrency(year2T4A);
            document.getElementById('year2Blue').textContent = formatCurrency(year2Blue);
            document.getElementById('year3T4A').textContent = formatCurrency(year3T4A);
            document.getElementById('year3Blue').textContent = formatCurrency(year3Blue);
            document.getElementById('totalT4A').textContent = formatCurrency(total3YearT4A);
            document.getElementById('totalBlue').textContent = formatCurrency(total3YearBlue);

            // Update summary cards
            document.getElementById('summaryT4A').textContent = formatCurrency(total3YearT4A);
            document.getElementById('summaryBlue').textContent = formatCurrency(total3YearBlue);
            document.getElementById('linesT4A').textContent = lines;
            document.getElementById('linesBlue').textContent = lines;

            // Show results
            resultsCard.style.display = 'block';
            savingsCard.style.display = 'block';
        }}
    </script>
</body>
</html>'''

    return html


def main():
    print(f"Reading data from: {EXCEL_PATH}")

    if not EXCEL_PATH.exists():
        print(f"Error: Excel file not found at {EXCEL_PATH}")
        return

    try:
        sector_data, work_hours = read_excel_data()
        print(f"Found {len(sector_data)} sectors")

        html = generate_html(sector_data, work_hours)

        HTML_PATH.write_text(html, encoding='utf-8')
        print(f"Calculator generated: {HTML_PATH}")
        print("\nSectors loaded:")
        for key, data in sector_data.items():
            print(f"  - {data['name']}")

    except Exception as e:
        print(f"Error: {e}")
        raise


if __name__ == '__main__':
    main()
