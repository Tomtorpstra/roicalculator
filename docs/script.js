// ==========================================
// TRANSLATIONS
// ==========================================
const translations = {
    nl: {
        pageTitle: 'OEE ROI Calculator - D4A Besparing Berekening',
        subtitle: 'Bereken uw potentiele besparing met T4A/P4A OEE-optimalisatie',
        exportPdf: 'Export PDF',
        cardCurrentTitle: 'Uw Huidige Situatie',
        cardCurrentSubtitle: 'Selecteer uw sector en huidige OEE status',
        companyNameLabel: 'Bedrijfsnaam',
        companyNamePlaceholder: 'Vul uw bedrijfsnaam in',
        sectorLabel: 'Sector / Industrie',
        sectorDefault: '-- Selecteer uw sector --',
        sectorSearchPlaceholder: 'Zoek sector...',
        sectorOil: 'Olie & Raffinaderij',
        currentSituationLabel: 'Huidige OEE Situatie',
        situationDefault: '-- Selecteer uw huidige situatie --',
        situationNoOEE: 'Nieuwe klant - Geen OEE registratie (naar T4A/P4A)',
        situationBlue: 'OEE Blue upgrade (naar T4A/P4A)',
        numPlantsLabel: 'Aantal Plants',
        outputLabel: 'Maximal output per uur',
        benchmarkNote: '(sector benchmark)',
        optionLow: 'Laag',
        optionAvg: 'Gemiddeld',
        optionHigh: 'Hoog',
        unitsPerHour: 'eenheden/uur',
        marginLabel: 'Marge per eenheid',
        perUnit: 'per eenheid',
        addedValueLabel: 'Toegevoegde waarde per uur:',
        perHourSuffix: '/uur',
        benchmarkInfoText: 'Waarden zijn industrie-typische benchmarkbereiken, gebaseerd op productielijn capaciteiten en gemiddelde contributiemarges in vergelijkbare productieomgevingen.',
        cardPlantsTitle: 'Plants & Lijnen Configuratie',
        cardPlantsSubtitle: 'Configureer lijnen per plant met individuele ploegen',
        thLine: 'Lijn',
        thShiftRegime: 'Ploegen Regime',
        thOutput: 'Output',
        thMargin: 'Marge',
        marginTooltipTitle: 'Margin/Unit is: contributiemarge per extra geproduceerd product',
        marginTooltipBody: '= verkoopprijs (netto) \u2212 variabele kosten per product. Deze waardes zijn bedoeld als startpunt, D4A kan deze waardes aanpassen op basis van uw behoefte. D4A berekent de marge per eenheid als netto verkoopprijs minus variabele kosten per product. Dat is de bijdrage van \u00e9\u00e9n extra geproduceerd stuk. De ranges in onze tabel zijn benchmark-ordegroottes; voor de definitieve businesscase vervangen we die door jullie werkelijke prijs- en kostdata.',
        thAction: 'Actie',
        shift: 'ploeg',
        shifts: 'ploegen',
        removeBtn: 'Verwijderen',
        addLineBtn: '+ Lijn Toevoegen',
        cardCostsTitle: 'Project kosten uit offerte',
        cardCostsSubtitle: 'Eenmalige en jaarlijkse kosten voor ROI berekening',
        fixedFeeLabel: 'Vaste Kosten (Eenmalig)',
        fixedFeePlaceholder: 'Bijv. 15.000',
        variableCostLabel: 'Onderhoudskosten (per jaar)',
        variableCostPlaceholder: 'Bijv. 3.000',
        costsInfoText: 'Standaard waarden zijn geschatte gemiddelden. Pas aan naar uw situatie.',
        placeholderTitle: 'Vul uw gegevens in',
        placeholderText: 'Selecteer uw sector, productie parameters en OEE situatie om uw besparingspotentieel te zien',
        cardSavingsTitle: 'Besparingspotentieel',
        linesAcross: 'lijnen over',
        conservative: 'Conservatief',
        expected: 'Verwacht',
        optimistic: 'Optimistisch',
        perYear: 'per jaar',
        overThreeYears: 'over 3 jaar',
        oeeImprovement: 'OEE verbetering',
        cardSectorTitle: 'Sector & Productie Gegevens',
        valuePerHour: 'Waarde / Uur',
        startOee: 'Start OEE',
        expectedImprovement: 'Verwachte Verbetering',
        oeePotentialComparison: 'OEE Potentieel Vergelijking',
        current: 'Huidige',
        withT4A: 'Met T4A/P4A',
        cardBreakEvenTitle: 'Break-even Analyse',
        cumulativeBenefit: 'Cumulatief Voordeel',
        cumulativeCosts: 'Cumulatieve Kosten',
        breakEvenNotePrefix: 'Gebaseerd op het',
        breakEvenNoteSuffix: 'scenario',
        months: 'maanden',
        overMonths: '> 240 maanden',
        yearLabel: 'Jaar',
        footer: 'D4A Besparing ROI Berekening | Data gebaseerd op Eurostat SBS & NACE Rev.2 (2022-2023)',
        alertFillIn: 'Vul eerst alle gegevens in voordat u exporteert.',
        companyDefault: 'Bedrijf',
        pdfTitle: 'ROI Rapport',
        pdfExpectedSavings: 'Verwachte Besparing (per jaar)',
        pdfMonthsBreakEven: 'Maanden Break-even',
        pdfRoi3Year: 'ROI (3 jaar)',
        pdfNetBenefit3Year: 'Netto Voordeel (3 jaar)',
        pdfScenarioAnalysis: 'Scenario Analyse',
        pdfPerYear: 'Per Jaar',
        pdfOver3Years: 'Over 3 Jaar',
        pdfOeeImprovement: 'OEE Verbetering',
        pdfCompanyDetails: 'Bedrijfsgegevens',
        pdfCompany: 'Bedrijf',
        pdfSector: 'Sector',
        pdfOeeSituation: 'OEE Situatie',
        pdfMaxOutput: 'Maximal output per uur',
        pdfMarginPerUnit: 'Marge per eenheid',
        pdfValuePerHour: 'Waarde per uur',
        pdfNumPlants: 'Aantal Plants',
        pdfTotalLines: 'Totaal Lijnen',
        pdfOeeImprovementSection: 'OEE Verbetering',
        pdfCurrentOee: 'Huidige OEE',
        pdfExpectedImprov: 'Verwachte verbetering',
        pdfPotentialOee: 'Potentieel OEE',
        pdfInvestment: 'Investering',
        pdfFixedCosts: 'Vaste kosten (eenmalig)',
        pdfVariableCosts: 'Onderhoudskosten (per jaar)',
        pdfTotalCosts3yr: 'Totale kosten (3 jaar)',
        pdfNetBenefitExpected: 'Netto Voordeel (3 jaar, verwacht)',
        pdfPlantsLines: 'Plants & Lijnen',
        pdfLine: 'Lijn',
        pdfFooterData: 'Data gebaseerd op Eurostat SBS & NACE Rev.2 (2022-2023)',
        situationLabelNoOEE: 'Nieuwe klant - Geen OEE',
        situationLabelBlue: 'OEE Blue upgrade',
        outputLabelLow: 'Laag',
        outputLabelAvg: 'Gemiddeld',
        outputLabelHigh: 'Hoog'
    },
    en: {
        pageTitle: 'OEE ROI Calculator - D4A Savings Calculation',
        subtitle: 'Calculate your potential savings with T4A/P4A OEE optimization',
        exportPdf: 'Export PDF',
        cardCurrentTitle: 'Your Current Situation',
        cardCurrentSubtitle: 'Select your sector and current OEE status',
        companyNameLabel: 'Company Name',
        companyNamePlaceholder: 'Enter your company name',
        sectorLabel: 'Sector / Industry',
        sectorDefault: '-- Select your sector --',
        sectorSearchPlaceholder: 'Search sector...',
        sectorOil: 'Oil & Refinery',
        currentSituationLabel: 'Current OEE Situation',
        situationDefault: '-- Select your current situation --',
        situationNoOEE: 'New client - No OEE registration (to T4A/P4A)',
        situationBlue: 'OEE Blue upgrade (to T4A/P4A)',
        numPlantsLabel: 'Number of Plants',
        outputLabel: 'Maximum output per hour',
        benchmarkNote: '(sector benchmark)',
        optionLow: 'Low',
        optionAvg: 'Average',
        optionHigh: 'High',
        unitsPerHour: 'units/hour',
        marginLabel: 'Margin per unit',
        perUnit: 'per unit',
        addedValueLabel: 'Added value per hour:',
        perHourSuffix: '/hour',
        benchmarkInfoText: 'Values are industry-typical benchmark ranges, based on production line capacities and average contribution margins in comparable production environments.',
        cardPlantsTitle: 'Plants & Lines Configuration',
        cardPlantsSubtitle: 'Configure lines per plant with individual shifts',
        thLine: 'Line',
        thShiftRegime: 'Shift Regime',
        thOutput: 'Output',
        thMargin: 'Margin',
        marginTooltipTitle: 'Margin per Unit: the contribution margin per additional unit produced',
        marginTooltipBody: '= net selling price \u2212 variable cost per product. These values are intended as a starting point. D4A can adjust them based on your specific situation and requirements. D4A calculates the margin per unit as the net selling price minus the variable cost per product. This represents the economic contribution of one additional unit produced. The ranges shown in our table are industry benchmark order-of-magnitude estimates. For the final business case, we will replace them with your actual pricing and cost data.',
        thAction: 'Action',
        shift: 'shift',
        shifts: 'shifts',
        removeBtn: 'Remove',
        addLineBtn: '+ Add Line',
        cardCostsTitle: 'Project costs from quotation',
        cardCostsSubtitle: 'One-time and annual costs for ROI calculation',
        fixedFeeLabel: 'Fixed Costs (One-time)',
        fixedFeePlaceholder: 'E.g. 15,000',
        variableCostLabel: 'Maintenance Costs (per year)',
        variableCostPlaceholder: 'E.g. 3,000',
        costsInfoText: 'Default values are estimated averages. Adjust to your situation.',
        placeholderTitle: 'Enter your details',
        placeholderText: 'Select your sector, production parameters and OEE situation to see your savings potential',
        cardSavingsTitle: 'Savings Potential',
        linesAcross: 'lines across',
        conservative: 'Conservative',
        expected: 'Expected',
        optimistic: 'Optimistic',
        perYear: 'per year',
        overThreeYears: 'over 3 years',
        oeeImprovement: 'OEE improvement',
        cardSectorTitle: 'Sector & Production Data',
        valuePerHour: 'Value / Hour',
        startOee: 'Starting OEE',
        expectedImprovement: 'Expected Improvement',
        oeePotentialComparison: 'OEE Potential Comparison',
        current: 'Current',
        withT4A: 'With T4A/P4A',
        cardBreakEvenTitle: 'Break-even Analysis',
        cumulativeBenefit: 'Cumulative Benefit',
        cumulativeCosts: 'Cumulative Costs',
        breakEvenNotePrefix: 'Based on the',
        breakEvenNoteSuffix: 'scenario',
        months: 'months',
        overMonths: '> 240 months',
        yearLabel: 'Year',
        footer: 'D4A Savings ROI Calculation | Data based on Eurostat SBS & NACE Rev.2 (2022-2023)',
        alertFillIn: 'Please fill in all details before exporting.',
        companyDefault: 'Company',
        pdfTitle: 'ROI Report',
        pdfExpectedSavings: 'Expected Savings (per year)',
        pdfMonthsBreakEven: 'Months Break-even',
        pdfRoi3Year: 'ROI (3 years)',
        pdfNetBenefit3Year: 'Net Benefit (3 years)',
        pdfScenarioAnalysis: 'Scenario Analysis',
        pdfPerYear: 'Per Year',
        pdfOver3Years: 'Over 3 Years',
        pdfOeeImprovement: 'OEE Improvement',
        pdfCompanyDetails: 'Company Details',
        pdfCompany: 'Company',
        pdfSector: 'Sector',
        pdfOeeSituation: 'OEE Situation',
        pdfMaxOutput: 'Maximum output per hour',
        pdfMarginPerUnit: 'Margin per unit',
        pdfValuePerHour: 'Value per hour',
        pdfNumPlants: 'Number of Plants',
        pdfTotalLines: 'Total Lines',
        pdfOeeImprovementSection: 'OEE Improvement',
        pdfCurrentOee: 'Current OEE',
        pdfExpectedImprov: 'Expected improvement',
        pdfPotentialOee: 'Potential OEE',
        pdfInvestment: 'Investment',
        pdfFixedCosts: 'Fixed costs (one-time)',
        pdfVariableCosts: 'Maintenance costs (per year)',
        pdfTotalCosts3yr: 'Total costs (3 years)',
        pdfNetBenefitExpected: 'Net Benefit (3 years, expected)',
        pdfPlantsLines: 'Plants & Lines',
        pdfLine: 'Line',
        pdfFooterData: 'Data based on Eurostat SBS & NACE Rev.2 (2022-2023)',
        situationLabelNoOEE: 'New client - No OEE',
        situationLabelBlue: 'OEE Blue upgrade',
        outputLabelLow: 'Low',
        outputLabelAvg: 'Average',
        outputLabelHigh: 'High'
    }
};

let currentLang = 'nl';

function t(key) {
    return translations[currentLang][key] || translations['nl'][key] || key;
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.title = t('pageTitle');
    applyTranslations();
    renderPlantContent();
    initSearchableSelect();
    // Re-calculate to update dynamic text
    const sector = document.getElementById('sector').value;
    if (sector && sectorData[sector]) {
        updateComputedValue(sectorData[sector]);
    }
    calculate();
}

function applyTranslations() {
    // Update all elements with data-i18n attribute (textContent)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key] !== undefined) {
            el.textContent = translations[currentLang][key];
        }
    });
    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key] !== undefined) {
            el.placeholder = translations[currentLang][key];
        }
    });
}

// ==========================================
// SECTOR DATA (fallback + live from Google Sheet)
// ==========================================
const SHEET_BASE_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vToExpMiKjR34JFPuCWCVLSug1mS3bZF3tFh6Ad5GfD1Ma7HVGL0FVgI3B42_PdMNOZVTpi9VnKFghR/pub';
const DATA_SHEET_URL = SHEET_BASE_URL + '?gid=404846792&single=true&output=csv';
const OEE_SHEET_URL = SHEET_BASE_URL + '?gid=1249842246&single=true&output=csv';

// Map CSV sector names → JS keys (Data sheet)
const DATA_SHEET_NAME_MAP = {
    'farmaceutische': 'farmaceutische',
    'food': 'food',
    'bottlers': 'bottlers',
    'textiel': 'textiel',
    'hout': 'hout',
    'papier': 'papier',
    'chemie': 'chemie',
    'kunststof': 'kunststof',
    'metaal': 'metaal',
    'machinebouw': 'machinebouw',
    'auto&transport': 'autoentransport',
    'electronica': 'electronica',
    'olie & raffinaderij': 'olieenrafinaderij'
};

// Map CSV sector names → JS keys (OEE overzicht, different spelling)
const OEE_SHEET_NAME_MAP = {
    'farmaseutisch': 'farmaceutische',
    'food': 'food',
    'bottlers': 'bottlers',
    'textiel': 'textiel',
    'hout': 'hout',
    'papier': 'papier',
    'chemie': 'chemie',
    'kunststof': 'kunststof',
    'metaal': 'metaal',
    'machine bouw': 'machinebouw',
    'auto en transport': 'autoentransport',
    'electronica': 'electronica',
    'olie en rafinaderij': 'olieenrafinaderij'
};

// Fallback data used when Google Sheet is unavailable
const sectorData = {
    "farmaceutische": {
        name: "Farmaceutische",
        oeeStart: 0.65,
        outputPerHour: { min: 1000, avg: 2000, max: 5000 },
        marginPerUnit: { min: 0.05, avg: 0.08, max: 0.3 },
        oeeBlueToT4A: { conservative: 0.02, expected: 0.04, optimistic: 0.07 },
        oeeNothingToT4A: { conservative: 0.04, expected: 0.09, optimistic: 0.16 }
    },
    "food": {
        name: "Food",
        oeeStart: 0.55,
        outputPerHour: { min: 5000, avg: 15000, max: 25000 },
        marginPerUnit: { min: 0.002, avg: 0.003, max: 0.02 },
        oeeBlueToT4A: { conservative: 0.03, expected: 0.06, optimistic: 0.11 },
        oeeNothingToT4A: { conservative: 0.06, expected: 0.14, optimistic: 0.25 }
    },
    "bottlers": {
        name: "Bottlers",
        oeeStart: 0.60,
        outputPerHour: { min: 10000, avg: 35000, max: 60000 },
        marginPerUnit: { min: 0.001, avg: 0.002, max: 0.008 },
        oeeBlueToT4A: { conservative: 0.02, expected: 0.05, optimistic: 0.09 },
        oeeNothingToT4A: { conservative: 0.05, expected: 0.12, optimistic: 0.22 }
    },
    "textiel": {
        name: "Textiel",
        oeeStart: 0.60,
        outputPerHour: { min: 100, avg: 400, max: 800 },
        marginPerUnit: { min: 0.04, avg: 0.09, max: 0.25 },
        oeeBlueToT4A: { conservative: 0.02, expected: 0.04, optimistic: 0.07 },
        oeeNothingToT4A: { conservative: 0.04, expected: 0.09, optimistic: 0.18 }
    },
    "hout": {
        name: "Hout",
        oeeStart: 0.60,
        outputPerHour: { min: 50, avg: 120, max: 400 },
        marginPerUnit: { min: 0.1, avg: 0.33, max: 1.2 },
        oeeBlueToT4A: { conservative: 0.02, expected: 0.05, optimistic: 0.09 },
        oeeNothingToT4A: { conservative: 0.04, expected: 0.11, optimistic: 0.20 }
    },
    "papier": {
        name: "Papier",
        oeeStart: 0.70,
        outputPerHour: { min: 2, avg: 4, max: 15 },
        marginPerUnit: { min: 5, avg: 20, max: 40 },
        oeeBlueToT4A: { conservative: 0.01, expected: 0.03, optimistic: 0.05 },
        oeeNothingToT4A: { conservative: 0.03, expected: 0.07, optimistic: 0.12 }
    },
    "chemie": {
        name: "Chemie",
        oeeStart: 0.70,
        outputPerHour: { min: 1, avg: 2, max: 10 },
        marginPerUnit: { min: 15, avg: 55, max: 120 },
        oeeBlueToT4A: { conservative: 0.01, expected: 0.02, optimistic: 0.04 },
        oeeNothingToT4A: { conservative: 0.03, expected: 0.06, optimistic: 0.11 }
    },
    "kunststof": {
        name: "Kunststof",
        oeeStart: 0.60,
        outputPerHour: { min: 3000, avg: 10000, max: 20000 },
        marginPerUnit: { min: 0.002, avg: 0.007, max: 0.015 },
        oeeBlueToT4A: { conservative: 0.03, expected: 0.06, optimistic: 0.10 },
        oeeNothingToT4A: { conservative: 0.06, expected: 0.13, optimistic: 0.24 }
    },
    "metaal": {
        name: "Metaal",
        oeeStart: 0.60,
        outputPerHour: { min: 50, avg: 150, max: 500 },
        marginPerUnit: { min: 0.2, avg: 0.5, max: 3 },
        oeeBlueToT4A: { conservative: 0.02, expected: 0.05, optimistic: 0.09 },
        oeeNothingToT4A: { conservative: 0.04, expected: 0.10, optimistic: 0.19 }
    },
    "machinebouw": {
        name: "Machinebouw",
        oeeStart: 0.55,
        outputPerHour: { min: 2, avg: 10, max: 40 },
        marginPerUnit: { min: 2, avg: 8.5, max: 50 },
        oeeBlueToT4A: { conservative: 0.01, expected: 0.03, optimistic: 0.06 },
        oeeNothingToT4A: { conservative: 0.03, expected: 0.07, optimistic: 0.14 }
    },
    "autoentransport": {
        name: "Auto & Transport",
        oeeStart: 0.70,
        outputPerHour: { min: 30, avg: 180, max: 400 },
        marginPerUnit: { min: 0.1, avg: 0.5, max: 2 },
        oeeBlueToT4A: { conservative: 0.02, expected: 0.04, optimistic: 0.08 },
        oeeNothingToT4A: { conservative: 0.04, expected: 0.09, optimistic: 0.17 }
    },
    "electronica": {
        name: "Electronica",
        oeeStart: 0.60,
        outputPerHour: { min: 500, avg: 1900, max: 8000 },
        marginPerUnit: { min: 0.02, avg: 0.05, max: 0.3 },
        oeeBlueToT4A: { conservative: 0.02, expected: 0.05, optimistic: 0.09 },
        oeeNothingToT4A: { conservative: 0.05, expected: 0.11, optimistic: 0.21 }
    },
    "olieenrafinaderij": {
        name: "Olie & Raffinaderij",
        oeeStart: 0.80,
        outputPerHour: { min: 10, avg: 50, max: 200 },
        marginPerUnit: { min: 1, avg: 5, max: 8 },
        oeeBlueToT4A: { conservative: 0.005, expected: 0.02, optimistic: 0.04 },
        oeeNothingToT4A: { conservative: 0.02, expected: 0.05, optimistic: 0.09 }
    }
};

// ==========================================
// GOOGLE SHEET SYNC
// ==========================================
function parseCSV(text) {
    const rows = [];
    let current = '';
    let inQuotes = false;
    let row = [];

    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (inQuotes) {
            if (ch === '"' && text[i + 1] === '"') {
                current += '"';
                i++;
            } else if (ch === '"') {
                inQuotes = false;
            } else {
                current += ch;
            }
        } else {
            if (ch === '"') {
                inQuotes = true;
            } else if (ch === ',') {
                row.push(current);
                current = '';
            } else if (ch === '\n' || (ch === '\r' && text[i + 1] === '\n')) {
                row.push(current);
                current = '';
                rows.push(row);
                row = [];
                if (ch === '\r') i++;
            } else {
                current += ch;
            }
        }
    }
    if (current || row.length > 0) {
        row.push(current);
        rows.push(row);
    }
    return rows;
}

function parseEuro(str) {
    if (!str) return NaN;
    const cleaned = str.replace(/[€\s]/g, '').replace(/,/g, '');
    return parseFloat(cleaned);
}

function parsePercent(str) {
    if (!str) return NaN;
    return parseFloat(str.replace('%', '')) / 100;
}

async function loadSectorData() {
    try {
        const [dataResp, oeeResp] = await Promise.all([
            fetch(DATA_SHEET_URL),
            fetch(OEE_SHEET_URL)
        ]);

        if (!dataResp.ok || !oeeResp.ok) {
            console.warn('Google Sheet fetch failed, using fallback data');
            return;
        }

        const [dataText, oeeText] = await Promise.all([
            dataResp.text(),
            oeeResp.text()
        ]);

        // Parse Data sheet (output, margin, OEE improvements)
        const dataRows = parseCSV(dataText);
        let updated = 0;
        for (const cols of dataRows) {
            if (cols.length < 21) continue;
            const rawName = (cols[2] || '').trim();
            if (!rawName) continue;
            const key = DATA_SHEET_NAME_MAP[rawName.toLowerCase()];
            if (!key || !sectorData[key]) continue;

            const outputMin = parseInt(cols[3]);
            const outputAvg = parseInt(cols[4]);
            const outputMax = parseInt(cols[5]);
            const marginMin = parseEuro(cols[6]);
            const marginAvg = parseEuro(cols[7]);
            const marginMax = parseEuro(cols[8]);
            const blueC = parsePercent(cols[15]);
            const blueE = parsePercent(cols[16]);
            const blueO = parsePercent(cols[17]);
            const nothC = parsePercent(cols[18]);
            const nothE = parsePercent(cols[19]);
            const nothO = parsePercent(cols[20]);

            if (!isNaN(outputMin)) sectorData[key].outputPerHour = { min: outputMin, avg: outputAvg, max: outputMax };
            if (!isNaN(marginMin)) sectorData[key].marginPerUnit = { min: marginMin, avg: marginAvg, max: marginMax };
            if (!isNaN(blueC)) sectorData[key].oeeBlueToT4A = { conservative: blueC, expected: blueE, optimistic: blueO };
            if (!isNaN(nothC)) sectorData[key].oeeNothingToT4A = { conservative: nothC, expected: nothE, optimistic: nothO };
            updated++;
        }

        // Parse OEE overzicht (oeeStart per sector)
        const oeeRows = parseCSV(oeeText);
        for (const cols of oeeRows) {
            if (cols.length < 4) continue;
            const rawName = (cols[1] || '').trim();
            if (!rawName) continue;
            const key = OEE_SHEET_NAME_MAP[rawName.toLowerCase()];
            if (!key || !sectorData[key]) continue;

            const oeeStart = parsePercent(cols[3]);
            if (!isNaN(oeeStart)) sectorData[key].oeeStart = oeeStart;
        }

        console.log('Loaded sector data from Google Sheet (' + updated + ' sectors updated)');
    } catch (err) {
        console.warn('Google Sheet sync failed, using fallback data:', err.message);
    }
}

const workHours = { "1": 2000, "2": 4000, "3": 6000, "4": 8000, "5": 8760 };

// ==========================================
// STATE
// ==========================================
let plantData = { 1: { lines: [{ shifts: 3, outputLevel: 'avg', marginLevel: 'avg' }] } };
let numPlants = 1;
let activePlant = 1;
let selectedScenario = 'expected';

// ==========================================
// FORMATTING
// ==========================================
function formatCurrency(value) {
    return new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

function formatPercentage(value) {
    return (value * 100).toFixed(1) + '%';
}

function formatOutputValue(value) {
    return new Intl.NumberFormat('nl-NL').format(value);
}

function formatMarginValue(value) {
    if (value >= 1) {
        return '\u20AC' + new Intl.NumberFormat('nl-NL', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(value);
    }
    if (value >= 0.01) {
        return '\u20AC' + value.toFixed(2);
    }
    return '\u20AC' + value.toFixed(3);
}

// ==========================================
// SEARCHABLE SELECT
// ==========================================
function initSearchableSelect() {
    const wrapper = document.getElementById('sectorWrapper');
    const select = document.getElementById('sector');
    const search = document.getElementById('sectorSearch');
    const dropdown = document.getElementById('sectorDropdown');

    const options = Array.from(select.options).slice(1);
    dropdown.innerHTML = options.map(opt =>
        `<div class="select-option" data-value="${opt.value}">${opt.text}</div>`
    ).join('');

    // Remove old listeners by cloning
    const newSelect = select.cloneNode(true);
    select.parentNode.replaceChild(newSelect, select);
    // Use mousedown to prevent native dropdown from opening
    newSelect.addEventListener('mousedown', (e) => {
        e.preventDefault();
        wrapper.classList.add('open', 'searching');
        search.value = '';
        search.focus();
        filterOptions('');
    });

    const newSearch = search.cloneNode(true);
    search.parentNode.replaceChild(newSearch, search);
    newSearch.addEventListener('input', (e) => {
        filterOptions(e.target.value);
    });

    newSearch.addEventListener('blur', () => {
        setTimeout(() => {
            wrapper.classList.remove('open', 'searching');
        }, 150);
    });

    // Remove old dropdown listeners by cloning
    const newDropdown = dropdown.cloneNode(true);
    dropdown.parentNode.replaceChild(newDropdown, dropdown);
    newDropdown.addEventListener('click', (e) => {
        if (e.target.classList.contains('select-option')) {
            document.getElementById('sector').value = e.target.dataset.value;
            wrapper.classList.remove('open', 'searching');
            onSectorChange();
        }
    });

    function filterOptions(query) {
        const q = query.toLowerCase();
        newDropdown.querySelectorAll('.select-option').forEach(opt => {
            const match = opt.textContent.toLowerCase().includes(q);
            opt.classList.toggle('hidden', !match);
        });
    }
}

// ==========================================
// SECTOR CHANGE
// ==========================================
function onSectorChange() {
    const sector = document.getElementById('sector').value;
    const productionSummary = document.getElementById('productionSummary');

    if (sector && sectorData[sector]) {
        productionSummary.style.display = 'block';
        updateComputedValue(sectorData[sector]);
    } else {
        productionSummary.style.display = 'none';
    }

    // Reset all lines to average when sector changes
    for (let p = 1; p <= numPlants; p++) {
        if (plantData[p]) {
            for (const line of plantData[p].lines) {
                line.outputLevel = 'avg';
                line.marginLevel = 'avg';
            }
        }
    }
    renderPlantContent();
    calculate();
}

function updateComputedValue(data) {
    if (!data) return;
    let totalAddedValue = 0;
    let lineCount = 0;
    for (let p = 1; p <= numPlants; p++) {
        if (plantData[p]) {
            for (const line of plantData[p].lines) {
                const output = data.outputPerHour[line.outputLevel || 'avg'];
                const margin = data.marginPerUnit[line.marginLevel || 'avg'];
                totalAddedValue += output * margin;
                lineCount++;
            }
        }
    }
    const avgAddedValue = lineCount > 0 ? totalAddedValue / lineCount : 0;
    document.getElementById('addedValueCalc').textContent = formatCurrency(avgAddedValue) + ' ' + t('perHourSuffix');
}

// ==========================================
// SCENARIO SELECTION
// ==========================================
function selectScenario(scenario) {
    selectedScenario = scenario;
    document.querySelectorAll('.scenario-card').forEach(card => {
        card.classList.remove('selected');
    });
    const selectedCard = document.querySelector(`.scenario-card[data-scenario="${scenario}"]`);
    if (selectedCard) selectedCard.classList.add('selected');
    calculate();
}

// ==========================================
// PLANT / LINE MANAGEMENT
// ==========================================
function syncPlantSlider(value) {
    document.getElementById('numPlants').value = value;
    updatePlantTabs();
}

function updatePlantTabs() {
    const newNumPlants = Math.min(10, Math.max(1, parseInt(document.getElementById('numPlants').value) || 1));
    numPlants = newNumPlants;
    document.getElementById('numPlantsSlider').value = newNumPlants;

    for (let p = 1; p <= numPlants; p++) {
        if (!plantData[p]) {
            plantData[p] = { lines: [{ shifts: 3, outputLevel: 'avg', marginLevel: 'avg' }] };
        }
    }

    for (let p = numPlants + 1; p <= 10; p++) {
        delete plantData[p];
    }

    if (activePlant > numPlants) {
        activePlant = numPlants;
    }

    renderPlantTabs();
    renderPlantContent();
    calculate();
}

function renderPlantTabs() {
    const tabsContainer = document.getElementById('plantTabs');
    tabsContainer.innerHTML = '';

    for (let p = 1; p <= numPlants; p++) {
        const tab = document.createElement('div');
        tab.className = 'plant-tab' + (p === activePlant ? ' active' : '');
        tab.textContent = 'Plant ' + p;
        tab.onclick = () => switchPlant(p);
        tabsContainer.appendChild(tab);
    }
}

function switchPlant(plantNum) {
    activePlant = plantNum;
    renderPlantTabs();
    renderPlantContent();
}

function getOutputOptionText(level, data) {
    const labels = { min: t('optionLow'), avg: t('optionAvg'), max: t('optionHigh') };
    if (data) {
        return labels[level] + ' (' + formatOutputValue(data.outputPerHour[level]) + ')';
    }
    return labels[level];
}

function getMarginOptionText(level, data) {
    const labels = { min: t('optionLow'), avg: t('optionAvg'), max: t('optionHigh') };
    if (data) {
        return labels[level] + ' (' + formatMarginValue(data.marginPerUnit[level]) + ')';
    }
    return labels[level];
}

function renderPlantContent() {
    const container = document.getElementById('plantContents');
    container.innerHTML = '';

    const sector = document.getElementById('sector').value;
    const data = (sector && sectorData[sector]) ? sectorData[sector] : null;

    for (let p = 1; p <= numPlants; p++) {
        const content = document.createElement('div');
        content.className = 'plant-content' + (p === activePlant ? ' active' : '');
        content.id = 'plant-' + p + '-content';

        let tableHTML = `
            <table class="lines-table">
                <thead>
                    <tr>
                        <th>${t('thLine')}</th>
                        <th>${t('thOutput')}</th>
                        <th class="th-tooltip">${t('thMargin')} <span style="font-size:0.7rem; opacity:0.6;">&#9432;</span><div class="tooltip-text"><span class="tooltip-title">${t('marginTooltipTitle')}</span>${t('marginTooltipBody')}</div></th>
                        <th>${t('thShiftRegime')}</th>
                        <th>${t('thAction')}</th>
                    </tr>
                </thead>
                <tbody>
        `;

        plantData[p].lines.forEach((line, index) => {
            const shiftWord = (s) => s === 1 ? t('shift') : t('shifts');
            const ol = line.outputLevel || 'avg';
            const ml = line.marginLevel || 'avg';
            tableHTML += `
                <tr>
                    <td class="line-number">${index + 1}</td>
                    <td>
                        <select onchange="updateLineOutput(${p}, ${index}, this.value)">
                            <option value="min" ${ol === 'min' ? 'selected' : ''}>${getOutputOptionText('min', data)}</option>
                            <option value="avg" ${ol === 'avg' ? 'selected' : ''}>${getOutputOptionText('avg', data)}</option>
                            <option value="max" ${ol === 'max' ? 'selected' : ''}>${getOutputOptionText('max', data)}</option>
                        </select>
                    </td>
                    <td>
                        <select onchange="updateLineMargin(${p}, ${index}, this.value)">
                            <option value="min" ${ml === 'min' ? 'selected' : ''}>${getMarginOptionText('min', data)}</option>
                            <option value="avg" ${ml === 'avg' ? 'selected' : ''}>${getMarginOptionText('avg', data)}</option>
                            <option value="max" ${ml === 'max' ? 'selected' : ''}>${getMarginOptionText('max', data)}</option>
                        </select>
                    </td>
                    <td>
                        <select onchange="updateLineShifts(${p}, ${index}, this.value)">
                            <option value="1" ${line.shifts === 1 ? 'selected' : ''}>1 ${shiftWord(1)}</option>
                            <option value="2" ${line.shifts === 2 ? 'selected' : ''}>2 ${shiftWord(2)}</option>
                            <option value="3" ${line.shifts === 3 ? 'selected' : ''}>3 ${shiftWord(3)}</option>
                            <option value="4" ${line.shifts === 4 ? 'selected' : ''}>4 ${shiftWord(4)}</option>
                            <option value="5" ${line.shifts === 5 ? 'selected' : ''}>5 ${shiftWord(5)}</option>
                        </select>
                    </td>
                    <td>
                        <button class="btn btn-remove" onclick="removeLine(${p}, ${index})" ${plantData[p].lines.length <= 1 ? 'disabled' : ''}>${t('removeBtn')}</button>
                    </td>
                </tr>
            `;
        });

        tableHTML += `
                </tbody>
            </table>
            <button class="btn btn-primary" onclick="addLine(${p})">${t('addLineBtn')}</button>
        `;

        content.innerHTML = tableHTML;
        container.appendChild(content);
    }
}

function addLine(plantNum) {
    plantData[plantNum].lines.push({ shifts: 3, outputLevel: 'avg', marginLevel: 'avg' });
    renderPlantContent();
    calculate();
}

function removeLine(plantNum, lineIndex) {
    if (plantData[plantNum].lines.length > 1) {
        plantData[plantNum].lines.splice(lineIndex, 1);
        renderPlantContent();
        calculate();
    }
}

function updateLineShifts(plantNum, lineIndex, shifts) {
    plantData[plantNum].lines[lineIndex].shifts = parseInt(shifts);
    calculate();
}

function updateLineOutput(plantNum, lineIndex, level) {
    plantData[plantNum].lines[lineIndex].outputLevel = level;
    const sector = document.getElementById('sector').value;
    if (sector && sectorData[sector]) updateComputedValue(sectorData[sector]);
    calculate();
}

function updateLineMargin(plantNum, lineIndex, level) {
    plantData[plantNum].lines[lineIndex].marginLevel = level;
    const sector = document.getElementById('sector').value;
    if (sector && sectorData[sector]) updateComputedValue(sectorData[sector]);
    calculate();
}

// ==========================================
// MAIN CALCULATION
// ==========================================
function calculate() {
    const sector = document.getElementById('sector').value;
    const situation = document.getElementById('currentSituation').value;
    const fixedFee = parseFloat(document.getElementById('fixedFee').value) || 0;
    const variableCost = parseFloat(document.getElementById('variableCost').value) || 0;

    const placeholderCard = document.getElementById('placeholderCard');
    const scenarioCard = document.getElementById('scenarioCard');
    const sectorCard = document.getElementById('sectorCard');
    const breakEvenCard = document.getElementById('breakEvenCard');
    const exportBtn = document.getElementById('exportBtn');

    if (!sector || !situation || !sectorData[sector]) {
        placeholderCard.style.display = 'block';
        scenarioCard.style.display = 'none';
        sectorCard.style.display = 'none';
        breakEvenCard.style.display = 'none';
        exportBtn.style.display = 'none';
        return;
    }

    placeholderCard.style.display = 'none';
    scenarioCard.style.display = 'block';
    sectorCard.style.display = 'block';
    breakEvenCard.style.display = 'block';
    exportBtn.style.display = 'inline-flex';

    const data = sectorData[sector];

    // Get OEE increases based on situation
    const oeeData = situation === 'noOEE' ? data.oeeNothingToT4A : data.oeeBlueToT4A;

    // Calculate for each scenario (per-line output/margin)
    const scenarios = ['conservative', 'expected', 'optimistic'];
    const results = {};

    let totalLines = 0;
    let totalAddedValue = 0;
    for (let p = 1; p <= numPlants; p++) {
        totalLines += plantData[p].lines.length;
    }

    for (const scenario of scenarios) {
        const oeeIncrease = oeeData[scenario];
        let totalAnnual = 0;

        for (let p = 1; p <= numPlants; p++) {
            for (const line of plantData[p].lines) {
                const hours = workHours[line.shifts.toString()];
                const lineOutput = data.outputPerHour[line.outputLevel || 'avg'];
                const lineMargin = data.marginPerUnit[line.marginLevel || 'avg'];
                const lineAddedValue = lineOutput * lineMargin;
                const annual = lineAddedValue * oeeIncrease * hours;
                totalAnnual += annual;
                if (scenario === 'conservative') totalAddedValue += lineAddedValue;
            }
        }

        results[scenario] = {
            annual: totalAnnual,
            threeYear: totalAnnual * 3,
            oeeIncrease: oeeIncrease
        };
    }

    const avgAddedValue = totalLines > 0 ? totalAddedValue / totalLines : 0;

    // Update scenario cards
    document.getElementById('totalLinesDisplay').textContent = totalLines;
    document.getElementById('totalPlantsDisplay').textContent = numPlants;

    for (const scenario of scenarios) {
        document.getElementById(scenario + 'Annual').textContent = formatCurrency(results[scenario].annual);
        document.getElementById(scenario + 'ThreeYear').textContent = formatCurrency(results[scenario].threeYear);
        document.getElementById(scenario + 'OEE').textContent = '+' + formatPercentage(results[scenario].oeeIncrease);
    }

    // Update sector info card
    document.getElementById('sectorNameDisplay').textContent = data.name;
    document.getElementById('addedValueDisplay').textContent = formatCurrency(avgAddedValue) + t('perHourSuffix');
    document.getElementById('oeeStartDisplay').textContent = formatPercentage(data.oeeStart);
    document.getElementById('oeeImprovementDisplay').textContent = '+' + formatPercentage(oeeData[selectedScenario]);

    // Update value bars using selected scenario
    const currentOEE = data.oeeStart * 100;
    const potentialOEE = Math.min(95, (data.oeeStart + oeeData[selectedScenario]) * 100);
    const gap = potentialOEE - currentOEE;

    document.getElementById('currentBar').style.width = currentOEE + '%';
    document.getElementById('currentBar').textContent = currentOEE.toFixed(0) + '%';
    document.getElementById('potentialBar').style.width = potentialOEE + '%';
    document.getElementById('potentialBar').textContent = potentialOEE.toFixed(0) + '%';
    document.getElementById('gapLabel').textContent = '+' + gap.toFixed(1) + '%';

    // Update break-even note with selected scenario name
    const scenarioLabels = { conservative: t('conservative'), expected: t('expected'), optimistic: t('optimistic') };
    const breakEvenNoteEl = document.querySelector('.break-even-note');
    if (breakEvenNoteEl) {
        breakEvenNoteEl.textContent = t('breakEvenNotePrefix') + ' ' + scenarioLabels[selectedScenario].toLowerCase() + ' ' + t('breakEvenNoteSuffix');
    }

    // Break-even using selected scenario
    const annualBenefit = results[selectedScenario].annual;
    const yearData = calculateBreakEven(annualBenefit, fixedFee, variableCost);
    renderGraph(yearData);
    displayBreakEven(yearData, fixedFee, variableCost);
}

// ==========================================
// BREAK-EVEN
// ==========================================
function calculateBreakEven(annualBenefit, fixedFee, variableCost) {
    const MIN_YEARS = 5;
    let yearData = [];

    // Year 0: upfront investment, no benefit yet
    yearData.push({ year: 0, cumulativeBenefit: 0, cumulativeCost: fixedFee });

    let cumulativeBenefit = 0;
    let cumulativeCost = fixedFee;
    let breakEvenReached = false;

    for (let year = 1; year <= 20; year++) {
        cumulativeBenefit += annualBenefit;
        cumulativeCost += variableCost;

        yearData.push({
            year: year,
            cumulativeBenefit: cumulativeBenefit,
            cumulativeCost: cumulativeCost
        });

        if (cumulativeBenefit >= cumulativeCost && !breakEvenReached) {
            breakEvenReached = true;
        }

        if (year >= MIN_YEARS) {
            if (breakEvenReached) {
                const beYear = yearData.find(d => d.year > 0 && d.cumulativeBenefit >= d.cumulativeCost).year;
                if (year >= beYear + 2) break;
            }
            if (fixedFee === 0 && variableCost === 0) break;
        }
    }

    return yearData;
}

// Realistic OEE curve: implementation dip, quick wins, plateau, bumpy climb, diminishing returns
function generateRealisticCurvePoints(yearData) {
    if (yearData.length < 2) return yearData;

    const maxYear = yearData[yearData.length - 1].year;
    const totalBenefit = yearData[yearData.length - 1].cumulativeBenefit;

    if (totalBenefit <= 0 || maxYear <= 0) return yearData;

    const totalMonths = maxYear * 12;

    // Phase-based growth rate multiplier for each month
    const getPhaseMultiplier = (month) => {
        if (month <= 3) return 0.15;             // Implementation dip: learning curve, installs
        if (month <= 6) return 2.2;              // Quick wins: low-hanging fruit, sudden OEE jump
        if (month <= 12) return 0.7;             // Plateau: stabilizing new baseline
        const year = month / 12;
        if (year <= 3) return 1.1;               // Steady growth: tackling harder issues
        return Math.max(0.5, 1.1 - (year - 3) * 0.15); // Diminishing returns
    };

    // Deterministic bumps using overlapping sine waves (consistent on re-render)
    const getBump = (month) => {
        if (month <= 6) return 0; // No bumps during implementation + quick wins
        return Math.sin(month * 2.7) * 0.3
             + Math.sin(month * 1.3) * 0.2
             + Math.sin(month * 4.1) * 0.1;
    };

    // Generate raw monthly growth rates
    const rawRates = [];
    for (let m = 1; m <= totalMonths; m++) {
        const rate = getPhaseMultiplier(m) * (1 + getBump(m));
        rawRates.push(Math.max(0.05, rate)); // ensure always positive
    }

    // Normalize so cumulative sum exactly equals totalBenefit
    const rawSum = rawRates.reduce((a, b) => a + b, 0);
    const monthlyBenefits = rawRates.map(r => (r / rawSum) * totalBenefit);

    // Cost interpolation helper
    const getCostAtYear = (yearFrac) => {
        for (let i = 0; i < yearData.length - 1; i++) {
            if (yearFrac >= yearData[i].year && yearFrac <= yearData[i + 1].year) {
                const span = yearData[i + 1].year - yearData[i].year;
                const frac = span > 0 ? (yearFrac - yearData[i].year) / span : 0;
                return yearData[i].cumulativeCost + frac * (yearData[i + 1].cumulativeCost - yearData[i].cumulativeCost);
            }
        }
        return yearData[yearData.length - 1].cumulativeCost;
    };

    // Build cumulative points at monthly resolution
    const points = [];
    points.push({ year: 0, cumulativeBenefit: 0, cumulativeCost: yearData[0].cumulativeCost });

    let cumulBenefit = 0;
    for (let m = 1; m <= totalMonths; m++) {
        cumulBenefit += monthlyBenefits[m - 1];
        const yearFrac = m / 12;
        points.push({
            year: yearFrac,
            cumulativeBenefit: cumulBenefit,
            cumulativeCost: getCostAtYear(yearFrac)
        });
    }

    return points;
}

function renderGraph(yearData) {
    const canvas = document.getElementById('breakEvenCanvas');
    const ctx = canvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const padding = { top: 30, right: 30, bottom: 50, left: 80 };
    const graphWidth = width - padding.left - padding.right;
    const graphHeight = height - padding.top - padding.bottom;

    ctx.clearRect(0, 0, width, height);

    if (yearData.length === 0) return;

    const maxYear = yearData[yearData.length - 1].year;
    const maxValue = Math.max(...yearData.map(d => Math.max(d.cumulativeBenefit, d.cumulativeCost)));

    const xScale = (year) => padding.left + (year / maxYear) * graphWidth;
    const yScale = (value) => padding.top + graphHeight - (value / maxValue) * graphHeight;

    // Grid
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;

    for (let i = 0; i <= 5; i++) {
        const y = padding.top + (i / 5) * graphHeight;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();

        const value = maxValue * (1 - i / 5);
        ctx.fillStyle = '#64748b';
        ctx.font = '11px Inter, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(formatCurrency(value), padding.left - 10, y + 4);
    }

    for (let year = 1; year <= maxYear; year++) {
        const x = xScale(year);
        ctx.beginPath();
        ctx.strokeStyle = '#e5e7eb';
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, height - padding.bottom);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.textAlign = 'center';
        ctx.fillText(t('yearLabel') + ' ' + year, x, height - padding.bottom + 20);
    }

    // Generate realistic OEE curve points for benefit line
    const realisticPoints = generateRealisticCurvePoints(yearData);

    // Cost line (linear, from yearData including year 0)
    ctx.beginPath();
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    yearData.forEach((d, i) => {
        const x = xScale(d.year);
        const y = yScale(d.cumulativeCost);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Benefit line (realistic OEE curve)
    ctx.beginPath();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    realisticPoints.forEach((d, i) => {
        const x = xScale(d.year);
        const y = yScale(d.cumulativeBenefit);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Break-even marker (where realistic benefit crosses cost)
    for (let i = 1; i < realisticPoints.length; i++) {
        if (realisticPoints[i].cumulativeBenefit >= realisticPoints[i].cumulativeCost) {
            const prev = realisticPoints[i - 1];
            const curr = realisticPoints[i];
            const benefitDiff = curr.cumulativeBenefit - prev.cumulativeBenefit;
            const costDiff = curr.cumulativeCost - prev.cumulativeCost;
            const prevGap = prev.cumulativeCost - prev.cumulativeBenefit;
            const gapChange = benefitDiff - costDiff;

            let beYear, beValue;
            if (gapChange > 0) {
                const frac = prevGap / gapChange;
                const stepSize = curr.year - prev.year;
                beYear = prev.year + frac * stepSize;
                beValue = prev.cumulativeBenefit + benefitDiff * frac;
            } else {
                beYear = curr.year;
                beValue = curr.cumulativeBenefit;
            }

            ctx.beginPath();
            ctx.fillStyle = '#fbbf24';
            ctx.arc(xScale(beYear), yScale(beValue), 10, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = '#ffffff';
            ctx.arc(xScale(beYear), yScale(beValue), 5, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
    }

    // Data point dots at integer years
    yearData.forEach((d) => {
        if (d.year === 0) return;
        const x = xScale(d.year);

        // Find realistic curve benefit at this year
        const pointAtYear = realisticPoints.find(p => Math.abs(p.year - d.year) < 0.01);
        const benefitY = pointAtYear ? pointAtYear.cumulativeBenefit : d.cumulativeBenefit;

        ctx.beginPath();
        ctx.fillStyle = '#10b981';
        ctx.arc(x, yScale(benefitY), 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = '#ef4444';
        ctx.arc(x, yScale(d.cumulativeCost), 5, 0, Math.PI * 2);
        ctx.fill();
    });
}

function displayBreakEven(yearData, fixedFee, variableCost) {
    const badge = document.getElementById('breakEvenBadge');
    const breakEvenYear = document.getElementById('breakEvenYear');

    badge.classList.remove('warning', 'error');

    // Skip year 0 (index 0) - start from year 1
    for (let i = 1; i < yearData.length; i++) {
        if (yearData[i].cumulativeBenefit >= yearData[i].cumulativeCost) {
            const prevD = yearData[i - 1];
            const currD = yearData[i];
            const benefitDiff = currD.cumulativeBenefit - prevD.cumulativeBenefit;
            const costDiff = currD.cumulativeCost - prevD.cumulativeCost;
            const prevGap = prevD.cumulativeCost - prevD.cumulativeBenefit;
            const gapChangeRate = benefitDiff - costDiff;

            let totalMonths;
            if (gapChangeRate !== 0) {
                const fraction = prevGap / gapChangeRate;
                totalMonths = Math.ceil((prevD.year + fraction) * 12);
            } else {
                totalMonths = currD.year * 12;
            }

            if (totalMonths <= 0) totalMonths = 1;
            breakEvenYear.textContent = totalMonths + ' ' + t('months');
            return;
        }
    }

    if (yearData.length > 0 && yearData[yearData.length - 1].cumulativeCost > yearData[yearData.length - 1].cumulativeBenefit) {
        breakEvenYear.textContent = t('overMonths');
        badge.classList.add('error');
    } else if (fixedFee === 0 && variableCost === 0) {
        breakEvenYear.textContent = '0 ' + t('months');
    }
}

// ==========================================
// PDF EXPORT
// ==========================================
function exportPDF() {
    const companyName = document.getElementById('companyName').value || t('companyDefault');
    const sector = document.getElementById('sector').value;
    const situation = document.getElementById('currentSituation').value;

    if (!sector || !situation) {
        alert(t('alertFillIn'));
        return;
    }

    const data = sectorData[sector];
    const oeeData = situation === 'noOEE' ? data.oeeNothingToT4A : data.oeeBlueToT4A;
    const fixedFee = parseFloat(document.getElementById('fixedFee').value) || 0;
    const variableCost = parseFloat(document.getElementById('variableCost').value) || 0;

    // Calculate all scenarios (per-line output/margin)
    const scenarios = ['conservative', 'expected', 'optimistic'];
    const results = {};
    let totalLines = 0;
    let totalAddedValue = 0;

    for (let p = 1; p <= numPlants; p++) {
        totalLines += plantData[p].lines.length;
    }

    for (const scenario of scenarios) {
        let totalAnnual = 0;

        for (let p = 1; p <= numPlants; p++) {
            for (const line of plantData[p].lines) {
                const hours = workHours[line.shifts.toString()];
                const lineOutput = data.outputPerHour[line.outputLevel || 'avg'];
                const lineMargin = data.marginPerUnit[line.marginLevel || 'avg'];
                const lineAddedValue = lineOutput * lineMargin;
                totalAnnual += lineAddedValue * oeeData[scenario] * hours;
                if (scenario === 'conservative') totalAddedValue += lineAddedValue;
            }
        }

        results[scenario] = {
            annual: totalAnnual,
            threeYear: totalAnnual * 3,
            oeeIncrease: oeeData[scenario]
        };
    }

    const avgAddedValue = totalLines > 0 ? totalAddedValue / totalLines : 0;
    const selectedAnnual = results[selectedScenario].annual;
    const totalCost3Years = fixedFee + (variableCost * 3);
    const netBenefit = results[selectedScenario].threeYear - totalCost3Years;
    const roi = totalCost3Years > 0 ? ((results[selectedScenario].threeYear / totalCost3Years) * 100).toFixed(0) : '\u221E';

    // Break-even in months (using selected scenario)
    let breakEvenMonths = 0;
    let cumulativeBenefit = 0;
    let cumulativeCost = fixedFee;
    for (let year = 1; year <= 20; year++) {
        cumulativeBenefit += selectedAnnual;
        cumulativeCost += variableCost;
        if (cumulativeBenefit >= cumulativeCost) {
            if (year === 1) {
                const prevGap = fixedFee;
                const gapChange = selectedAnnual - variableCost;
                const fraction = prevGap / gapChange;
                breakEvenMonths = Math.ceil(fraction * 12);
            } else {
                const prevBenefit = cumulativeBenefit - selectedAnnual;
                const prevCost = cumulativeCost - variableCost;
                const prevGap = prevCost - prevBenefit;
                const gapChange = selectedAnnual - variableCost;
                const fraction = prevGap / gapChange;
                breakEvenMonths = Math.ceil(((year - 1) + fraction) * 12);
            }
            break;
        }
    }

    const situationLabel = situation === 'noOEE' ? t('situationLabelNoOEE') : t('situationLabelBlue');
    const outputLabels = { min: t('outputLabelLow'), avg: t('outputLabelAvg'), max: t('outputLabelHigh') };
    const scenarioLabels = { conservative: t('conservative'), expected: t('expected'), optimistic: t('optimistic') };
    const dateLocale = currentLang === 'nl' ? 'nl-NL' : 'en-GB';

    const printContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${t('pdfTitle')} - ${companyName}</title>
    <style>
@page { margin: 15mm; size: A4; }
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; line-height: 1.5; font-size: 11pt; }

.header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 15px; border-bottom: 3px solid #00AAFF; margin-bottom: 25px; }
.header-left h1 { font-size: 22pt; font-weight: 800; color: #0f172a; }
.header-left h1 span { color: #00AAFF; }
.header-left .company { font-size: 14pt; color: #0f172a; font-weight: 600; margin-top: 3px; }
.header-right { text-align: right; font-size: 9pt; color: #64748b; }
.header-right .brand { font-weight: 700; color: #0f172a; font-size: 10pt; }

.exec-summary { background: #0f172a; color: #ffffff; padding: 20px 25px; border-radius: 8px; margin-bottom: 25px; display: flex; justify-content: space-between; align-items: center; }
.exec-summary .main-value .label { font-size: 9pt; text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.8; }
.exec-summary .main-value .number { font-size: 28pt; font-weight: 800; color: #00AAFF; }
.exec-summary .metrics { display: flex; gap: 30px; }
.exec-summary .metric { text-align: center; }
.exec-summary .metric .value { font-size: 16pt; font-weight: 700; }
.exec-summary .metric .label { font-size: 8pt; text-transform: uppercase; opacity: 0.7; }
.exec-summary .metric.green .value { color: #4ade80; }
.exec-summary .metric.cyan .value { color: #00AAFF; }

.content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 25px; }
.section { margin-bottom: 20px; }
.section-title { font-size: 11pt; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb; margin-bottom: 12px; }

.info-table { width: 100%; }
.info-table tr td { padding: 6px 0; border-bottom: 1px solid #f1f5f9; font-size: 10pt; }
.info-table tr:last-child td { border-bottom: none; }
.info-table .label { color: #64748b; width: 50%; }
.info-table .value { font-weight: 600; color: #0f172a; text-align: right; }

.scenario-table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
.scenario-table th { text-align: center; padding: 10px; font-size: 9pt; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; border-bottom: 2px solid #e5e7eb; }
.scenario-table th.expected { color: #00AAFF; background: #f0f9ff; border-radius: 6px 6px 0 0; }
.scenario-table td { text-align: center; padding: 8px; font-size: 10pt; border-bottom: 1px solid #f1f5f9; }
.scenario-table td.expected { background: #f0f9ff; }
.scenario-table .row-label { text-align: left; color: #64748b; font-size: 9pt; }
.scenario-table .value-row td { font-weight: 700; font-size: 12pt; color: #0f172a; }
.scenario-table .value-row td.expected { color: #0284c7; }

.financials { background: #f8fafc; border-radius: 8px; padding: 15px; }
.financials-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
.financials-row:last-child { border-bottom: none; }
.financials-row .label { color: #64748b; font-size: 10pt; }
.financials-row .value { font-weight: 600; font-size: 10pt; }
.financials-row.total { background: #0f172a; color: #fff; margin: 10px -15px -15px -15px; padding: 12px 15px; border-radius: 0 0 8px 8px; }
.financials-row.total .label { color: #fff; font-weight: 600; }
.financials-row.total .value { color: #4ade80; font-size: 12pt; }

.plant-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px; }
.plant-card { background: #f8fafc; padding: 10px 12px; border-radius: 6px; border-left: 3px solid #00AAFF; }
.plant-card .plant-name { font-weight: 600; font-size: 10pt; color: #0f172a; margin-bottom: 4px; }
.plant-card .plant-lines { font-size: 9pt; color: #64748b; }

.footer { margin-top: 30px; padding-top: 15px; border-top: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center; font-size: 8pt; color: #94a3b8; }
.footer-brand { font-weight: 600; color: #64748b; }

@media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
    </style>
</head>
<body>
    <div class="header">
<div class="header-left">
    <h1>OEE <span>${t('pdfTitle')}</span></h1>
    <div class="company">${companyName}</div>
</div>
<div class="header-right">
    <div class="brand">Decide4Action</div>
    ${new Date().toLocaleDateString(dateLocale, { day: 'numeric', month: 'long', year: 'numeric' })}
</div>
    </div>

    <div class="exec-summary">
<div class="main-value">
    <div class="label">${scenarioLabels[selectedScenario]} - ${t('pdfExpectedSavings')}</div>
    <div class="number">${formatCurrency(selectedAnnual)}</div>
</div>
<div class="metrics">
    <div class="metric green">
        <div class="value">${breakEvenMonths > 0 ? breakEvenMonths : '0'}</div>
        <div class="label">${t('pdfMonthsBreakEven')}</div>
    </div>
    <div class="metric cyan">
        <div class="value">${roi}%</div>
        <div class="label">${t('pdfRoi3Year')}</div>
    </div>
    <div class="metric green">
        <div class="value">${formatCurrency(netBenefit)}</div>
        <div class="label">${t('pdfNetBenefit3Year')}</div>
    </div>
</div>
    </div>

    <div class="section">
<div class="section-title">${t('pdfScenarioAnalysis')}</div>
<table class="scenario-table">
    <thead>
        <tr>
            <th></th>
            <th${selectedScenario === 'conservative' ? ' class="expected"' : ''}>${t('conservative')}</th>
            <th${selectedScenario === 'expected' ? ' class="expected"' : ''}>${t('expected')}</th>
            <th${selectedScenario === 'optimistic' ? ' class="expected"' : ''}>${t('optimistic')}</th>
        </tr>
    </thead>
    <tbody>
        <tr class="value-row">
            <td class="row-label">${t('pdfPerYear')}</td>
            <td${selectedScenario === 'conservative' ? ' class="expected"' : ''}>${formatCurrency(results.conservative.annual)}</td>
            <td${selectedScenario === 'expected' ? ' class="expected"' : ''}>${formatCurrency(results.expected.annual)}</td>
            <td${selectedScenario === 'optimistic' ? ' class="expected"' : ''}>${formatCurrency(results.optimistic.annual)}</td>
        </tr>
        <tr class="value-row">
            <td class="row-label">${t('pdfOver3Years')}</td>
            <td${selectedScenario === 'conservative' ? ' class="expected"' : ''}>${formatCurrency(results.conservative.threeYear)}</td>
            <td${selectedScenario === 'expected' ? ' class="expected"' : ''}>${formatCurrency(results.expected.threeYear)}</td>
            <td${selectedScenario === 'optimistic' ? ' class="expected"' : ''}>${formatCurrency(results.optimistic.threeYear)}</td>
        </tr>
        <tr>
            <td class="row-label">${t('pdfOeeImprovement')}</td>
            <td${selectedScenario === 'conservative' ? ' class="expected"' : ''}>+${formatPercentage(results.conservative.oeeIncrease)}</td>
            <td${selectedScenario === 'expected' ? ' class="expected"' : ''}>+${formatPercentage(results.expected.oeeIncrease)}</td>
            <td${selectedScenario === 'optimistic' ? ' class="expected"' : ''}>+${formatPercentage(results.optimistic.oeeIncrease)}</td>
        </tr>
    </tbody>
</table>
    </div>

    <div class="content-grid">
<div>
    <div class="section">
        <div class="section-title">${t('pdfCompanyDetails')}</div>
        <table class="info-table">
            <tr><td class="label">${t('pdfCompany')}</td><td class="value">${companyName}</td></tr>
            <tr><td class="label">${t('pdfSector')}</td><td class="value">${data.name}</td></tr>
            <tr><td class="label">${t('pdfOeeSituation')}</td><td class="value">${situationLabel}</td></tr>
            <tr><td class="label">${t('pdfValuePerHour')}</td><td class="value">${formatCurrency(avgAddedValue)}</td></tr>
            <tr><td class="label">${t('breakEvenNotePrefix')} scenario</td><td class="value">${scenarioLabels[selectedScenario]}</td></tr>
            <tr><td class="label">${t('pdfNumPlants')}</td><td class="value">${numPlants}</td></tr>
            <tr><td class="label">${t('pdfTotalLines')}</td><td class="value">${totalLines}</td></tr>
        </table>
    </div>

    <div class="section">
        <div class="section-title">${t('pdfOeeImprovementSection')}</div>
        <table class="info-table">
            <tr><td class="label">${t('pdfCurrentOee')}</td><td class="value">${(data.oeeStart * 100).toFixed(0)}%</td></tr>
            <tr><td class="label">${t('pdfExpectedImprov')}</td><td class="value">+${formatPercentage(oeeData[selectedScenario])}</td></tr>
            <tr><td class="label">${t('pdfPotentialOee')}</td><td class="value">${Math.min(95, (data.oeeStart + oeeData[selectedScenario]) * 100).toFixed(0)}%</td></tr>
        </table>
    </div>
</div>

<div>
    <div class="section">
        <div class="section-title">${t('pdfInvestment')}</div>
        <div class="financials">
            <div class="financials-row">
                <span class="label">${t('pdfFixedCosts')}</span>
                <span class="value">${formatCurrency(fixedFee)}</span>
            </div>
            <div class="financials-row">
                <span class="label">${t('pdfVariableCosts')}</span>
                <span class="value">${formatCurrency(variableCost)}</span>
            </div>
            <div class="financials-row">
                <span class="label">${t('pdfTotalCosts3yr')}</span>
                <span class="value">${formatCurrency(totalCost3Years)}</span>
            </div>
            <div class="financials-row total">
                <span class="label">${t('pdfNetBenefitExpected')} (${scenarioLabels[selectedScenario]})</span>
                <span class="value">${formatCurrency(netBenefit)}</span>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">${t('pdfPlantsLines')}</div>
        <div class="plant-grid">
            ${Array.from({length: numPlants}, (_, i) => i + 1).map(p => `
                <div class="plant-card">
                    <div class="plant-name">Plant ${p}</div>
                    <div class="plant-lines">${plantData[p].lines.map((l, j) => `${t('pdfLine')} ${j+1}: ${l.shifts} ${l.shifts > 1 ? t('shifts') : t('shift')} | ${t('thOutput')}: ${outputLabels[l.outputLevel || 'avg']} | ${t('thMargin')}: ${outputLabels[l.marginLevel || 'avg']}`).join('<br>')}</div>
                </div>
            `).join('')}
        </div>
    </div>
</div>
    </div>

    <div class="footer">
<div class="footer-brand">Decide4Action OEE ROI Calculator</div>
<div>${t('pdfFooterData')}</div>
    </div>
</body>
</html>`;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
        printWindow.print();
    }, 250);
}

// ==========================================
// INITIALIZE
// ==========================================
document.addEventListener('DOMContentLoaded', async function() {
    await loadSectorData();
    initSearchableSelect();
    updatePlantTabs();
});
