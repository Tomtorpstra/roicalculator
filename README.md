# OEE ROI Calculator

A professional ROI calculator for manufacturing OEE (Overall Equipment Effectiveness) optimization. Calculate potential savings from implementing T4A/P4A manufacturing solutions.

## Live Demo

**[Try the Web Calculator](https://rnjsxodyd90.github.io/roicalculator/)**

## Features

- **13 Industry Sectors**: Pharmaceutical, Food, Bottlers, Textile, Wood, Paper, Chemical, Plastics, Metal, Machine Building, Auto & Transport, Electronics, Oil & Refinery
- **Shift Configurations**: 1-5 shift regimes (2,000 - 8,760 hours/year)
- **Multi-line Support**: Calculate ROI for 1-100 production lines
- **3-Year Projections**: Year-by-year savings breakdown
- **Dual Comparison**: T4A/P4A vs Blue-T4A pathways
- **Interactive Charts**: Bar charts and cumulative line charts

## Screenshots

### Desktop Application
![Desktop App](docs/screenshots/desktop-app.png)

### Web Calculator
![Web Calculator](docs/screenshots/web-calculator.png)

## Installation

### Option 1: Windows Executable (Easiest)

1. Download `OEE ROI Calculator.exe` from [Releases](https://github.com/rnjsxodyd90/roicalculator/releases)
2. Place the Excel file `Besparing ROI berekening D4A.xlsx` in the same folder
3. Double-click to run

### Option 2: Run from Source

```bash
# Clone the repository
git clone https://github.com/rnjsxodyd90/roicalculator.git
cd roicalculator

# Install dependencies
pip install -r requirements.txt

# Run the application
python oee_calculator_app.py
```

### Option 3: Web Version

Simply open `oee-roi-calculator.html` in any modern browser, or visit the [GitHub Pages site](https://rnjsxodyd90.github.io/roicalculator/).

## Updating Data

The calculator reads data from `Besparing ROI berekening D4A.xlsx`. To update values:

1. Edit the Excel file (sector data, savings values, etc.)
2. For the **desktop app**: Just place the updated Excel next to the `.exe` - no rebuild needed
3. For the **web version**: Run `python generate-calculator.py` to regenerate the HTML

## Building the Executable

### Windows
```bash
pip install pyinstaller
python -m PyInstaller --onefile --windowed --name "OEE ROI Calculator" \
    --add-data "Besparing ROI berekening D4A.xlsx;." \
    --collect-submodules matplotlib oee_calculator_app.py
```

### macOS
```bash
pip install pyinstaller
python -m PyInstaller --onefile --windowed --name "OEE ROI Calculator" \
    --add-data "Besparing ROI berekening D4A.xlsx:." \
    --collect-submodules matplotlib oee_calculator_app.py
```

## Project Structure

```
roicalculator/
├── oee_calculator_app.py      # Desktop GUI application
├── oee-roi-calculator.html    # Web calculator (standalone)
├── generate-calculator.py     # Script to generate HTML from Excel
├── Besparing ROI berekening D4A.xlsx  # Data source
├── requirements.txt           # Python dependencies
├── docs/
│   └── index.html            # GitHub Pages site
└── dist/
    └── OEE ROI Calculator.exe # Windows executable
```

## Requirements

- Python 3.10+
- customtkinter
- pandas
- openpyxl
- matplotlib
- numpy

## Data Sources

- OEE improvement percentages based on TPM literature (Nakajima)
- Value-per-hour data from Eurostat SBS (Structural Business Statistics)
- Industry classifications follow NACE standards

## License

MIT License - See [LICENSE](LICENSE) for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
