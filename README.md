# OEE ROI Calculator

A web-based ROI calculator for manufacturing OEE (Overall Equipment Effectiveness) optimization. Helps manufacturers estimate potential savings from implementing T4A/P4A solutions.

**[Live Calculator](https://rnjsxodyd90.github.io/roicalculator/)**

## Features

- **13 Industry Sectors**: Pharmaceutical, Food, Bottlers, Textile, Wood, Paper, Chemical, Plastics, Metal, Machine Building, Auto & Transport, Electronics, Oil & Refinery
- **Multi-plant & Multi-line**: Configure up to 10 plants with multiple production lines each
- **Shift Regimes**: 1-5 shift configurations (2,000 - 8,760 hours/year)
- **Per-line Customization**: Set individual output/hour, margin, and demand/cost model per line
- **3 Scenarios**: Conservative, expected, and optimistic projections
- **3-Year Break-even Analysis**: Visual break-even chart with cumulative benefit vs cost
- **Bilingual**: Dutch (NL) and English (EN) language support
- **PDF Export**: Export results for client presentations
- **Live Data Sync**: Sector benchmarks auto-update from Google Sheets every 6 hours

## How It Works

The calculator estimates annual savings using:

```
Annual Savings = Value/hour x Current OEE x OEE Improvement x Working Hours x Model Factor
```

Where:
- **Value/hour** = Output per hour x Margin per unit (from sector benchmarks or custom input)
- **OEE Improvement** = Sector-specific improvement percentage (conservative/expected/optimistic)
- **Working Hours** = Determined by shift regime (2,000 to 8,760 hours/year)
- **Model Factor** = 1 for demand model (extra output = extra revenue), or 20-40% for cost model (same volume, lower costs)

Savings ramp up over 3 years: 1/3 in year 1, 2/3 in year 2, full in year 3.

## Project Structure

```
roicalculator/
├── index.html              # Calculator HTML (development)
├── script.js               # Calculator logic & i18n
├── style.css               # Styles
├── logo.png                # D4A logo
├── sector-data.json        # Sector benchmark data
├── docs/                   # GitHub Pages deployment
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   ├── logo.png
│   └── sector-data.json
├── .github/workflows/
│   └── sync-sheet.yml      # Auto-sync sector data from Google Sheets
├── LICENSE
└── .gitignore
```

## Development

Open `index.html` in a browser to run locally. No build tools or dependencies required.

To deploy changes, copy the updated root files (`index.html`, `script.js`, `style.css`) into `docs/` and push to `master`. GitHub Pages serves from the `docs/` folder.

## Data Sources

- OEE improvement percentages based on TPM literature (Nakajima)
- Output and margin data from Eurostat SBS (Structural Business Statistics, 2022-2023)
- Industry classifications follow NACE Rev.2 standards
- Sector data auto-syncs from a Google Sheet via GitHub Actions

## License

MIT License - See [LICENSE](LICENSE) for details.
