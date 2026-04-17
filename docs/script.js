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
        thOutput: 'Max. output/uur',
        outputTooltipTitle: 'Maximale output per uur',
        outputTooltipBody: 'Dit getal is gebaseerd op de output zonder verlies van snelheid, beschikbaarheid en kwaliteit.',
        thMargin: 'Marge',
        marginTooltipTitle: 'Margin/Unit is: contributiemarge per extra geproduceerd product',
        marginTooltipBody: '= verkoopprijs (netto) \u2212 variabele kosten per product. Deze waardes zijn bedoeld als startpunt, D4A kan deze waardes aanpassen op basis van uw behoefte. D4A berekent de marge per eenheid als netto verkoopprijs minus variabele kosten per product. Dat is de bijdrage van \u00e9\u00e9n extra geproduceerd stuk. De ranges in onze tabel zijn benchmark-ordegroottes; voor de definitieve businesscase vervangen we die door jullie werkelijke prijs- en kostdata.',
        thAddedValue: 'Waarde/uur',
        thModel: 'Model',
        modelDemand: 'Vraag',
        modelCost: 'Kosten',
        modelTooltipTitle: 'Berekeningsmodel',
        modelTooltipBody: 'Vraag: onbeperkte vraag \u2014 extra OEE levert extra omzet op. Kosten: gelijk volume \u2014 OEE-verbetering verlaagt kosten (scrap, energie, storingen).',
        thCurrentOEE: 'Huidige OEE',
        currentOEETooltipTitle: 'Huidige OEE',
        currentOEETooltipBody: 'Het huidige OEE-percentage van deze lijn vóór verbeteringen. Standaard waarde komt uit sector benchmark. Pas aan naar uw werkelijke situatie.',
        thLineName: 'Naam',
        thAction: 'Actie',
        lineNamePlaceholder: 'Lijn',
        optionCustom: 'Handmatig',
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
        internalCostLabel: 'Interne Kosten (Eenmalig)',
        internalCostPlaceholder: 'Bijv. 5.000',
        internalCostTooltipTitle: 'Interne kosten zijn:',
        internalCostTooltipBody: 'implementatie-uren, trainingsuren, IT hardware, IT software.',
        calcInfoBtn: 'Berekening',
        calcModalTitle: 'Hoe berekenen wij het besparingspotentieel?',
        calcStep1Title: '1. Toegevoegde waarde per uur',
        calcStep1Formula: 'Waarde per uur = Output per uur \u00d7 Marge per eenheid',
        calcStep1Desc: 'De output en marge komen uit uw sector benchmarks of uw eigen ingevoerde waarden.',
        calcStep2Title: '2. Jaarlijkse besparing (per lijn)',
        calcStep2Formula: 'Jaarlijks = Waarde/uur \u00d7 Huidige OEE \u00d7 OEE verbetering \u00d7 Werkuren \u00d7 Kostenfactor',
        calcStep2Desc: 'Elk gewonnen uur wordt gewaardeerd tegen de huidige OEE \u00d7 toegevoegde waarde per uur, omdat de lijn op het huidige OEE-niveau produceert. De werkuren worden bepaald door het ploegregime (2.000 tot 8.760 uur/jaar).',
        calcStep3Title: '3. Berekeningsmodel',
        calcStep3Desc: '<strong>Vraagmodel:</strong> Onbeperkte vraag \u2014 extra OEE genereert extra omzet (factor = 1).<br><strong>Kostenmodel:</strong> Vast volume \u2014 OEE verbetering verlaagt kosten. Kostenfactor: conservatief 20%, verwacht 30%, optimistisch 40%.',
        calcStep4Title: '4. Besparing over 3 jaar',
        calcStep4Desc: 'De OEE verbetering wordt geleidelijk opgebouwd over 3 jaar:',
        calcStep4Formula: 'Totaal 3 jaar = Jaarlijks \u00d7 (1/3 + 2/3 + 1) = Jaarlijks \u00d7 2',
        calcYear1: 'Jaar 1',
        calcYear2: 'Jaar 2',
        calcYear3: 'Jaar 3',
        calcStep5Title: '5. Scenario\u2019s',
        calcStep5Desc: 'Elk scenario (conservatief, verwacht, optimistisch) gebruikt een andere OEE verbetering percentage, gebaseerd op sectordata en historische resultaten.',
        placeholderTitle: 'Vul uw gegevens in',
        placeholderText: 'Selecteer uw sector, productie parameters en OEE situatie om uw besparingspotentieel te zien',
        savingPotentialTooltip: 'Dit besparingspotentieel is gebaseerd op de upgrade van OEE blue naar T4A. De OEE verhoging die gepaard gaat met deze upgrade wordt behaald door: 1. Direct inzicht op actuele stand van zaken vanaf overal in de wereld 2. Makkelijker schaalbaar als het gaat om lijnen en functionaliteiten 3. Koppeling met ERP voor scherpere analyses 4. Nieuwe inzichten en analyse tools maken verbeteren nog makkelijker 5. Configuratie en beheer centraal ipv in de fabriek, per lijn 6. meer mogelijkheden tav gebruikersrechten en het automatisch versturen van rapporten 7. Maximale flexibiliteit bij keuze on/of premise 8. Inzetbaar als data platform: ontvangen data uit andere bronnen dan productie machines, combineren en presenteren in T4A & Real time Koppeling mogelijk met specialistische data analyse tools, oa PowerBI.',
        valuePerHourTooltipTitle: 'Waarde per uur bij 100% OEE',
        valuePerHourTooltipBody: 'Dit is de maximale toegevoegde waarde per uur, berekend alsof de lijn op 100% OEE draait (zonder verlies van beschikbaarheid, prestatie en kwaliteit).',
        calcBreakdownTitle: 'Berekeningsoverzicht',
        calcBreakdownLine: 'Lijn',
        calcBreakdownHours: 'Werkuren',
        calcBreakdownOEEImpr: 'OEE Verbr.',
        calcBreakdownCurrentOEE: 'Huidige OEE',
        calcBreakdownValueHr: 'Waarde/uur',
        calcBreakdownModel: 'Model',
        calcBreakdownAnnual: 'Jaarlijks',
        calcBreakdownTotal: 'Totaal per jaar',
        calcBreakdownFormula: 'Besparing per lijn = Werkuren × OEE verbetering × Huidige OEE × Waarde/uur × Modelfactor',
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
        pdfInternalCosts: 'Interne kosten (eenmalig)',
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
        thOutput: 'Max. output/hr',
        outputTooltipTitle: 'Maximum output per hour',
        outputTooltipBody: 'This number is based on the output without loss of speed, availability and quality.',
        thMargin: 'Margin',
        marginTooltipTitle: 'Margin per Unit: the contribution margin per additional unit produced',
        marginTooltipBody: '= net selling price \u2212 variable cost per product. These values are intended as a starting point. D4A can adjust them based on your specific situation and requirements. D4A calculates the margin per unit as the net selling price minus the variable cost per product. This represents the economic contribution of one additional unit produced. The ranges shown in our table are industry benchmark order-of-magnitude estimates. For the final business case, we will replace them with your actual pricing and cost data.',
        thAddedValue: 'Value/hr',
        thModel: 'Model',
        modelDemand: 'Demand',
        modelCost: 'Cost',
        modelTooltipTitle: 'Calculation model',
        modelTooltipBody: 'Demand: unlimited demand \u2014 extra OEE generates extra revenue. Cost: fixed volume \u2014 OEE improvement reduces costs (scrap, energy, downtime).',
        thCurrentOEE: 'Current OEE',
        currentOEETooltipTitle: 'Current OEE',
        currentOEETooltipBody: 'The current OEE percentage of this line before improvements. Default value comes from sector benchmark. Adjust to your actual situation.',
        thLineName: 'Name',
        thAction: 'Action',
        lineNamePlaceholder: 'Line',
        optionCustom: 'Custom',
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
        internalCostLabel: 'Internal Costs (One-time)',
        internalCostPlaceholder: 'E.g. 5,000',
        internalCostTooltipTitle: 'Internal costs could be:',
        internalCostTooltipBody: 'implementation hours, training hours, IT hardware, IT software.',
        calcInfoBtn: 'Calculation',
        calcModalTitle: 'How do we calculate the savings potential?',
        calcStep1Title: '1. Added value per hour',
        calcStep1Formula: 'Value per hour = Output per hour \u00d7 Margin per unit',
        calcStep1Desc: 'The output and margin come from your sector benchmarks or your own entered values.',
        calcStep2Title: '2. Annual savings (per line)',
        calcStep2Formula: 'Annual = Value/hr \u00d7 Current OEE \u00d7 OEE improvement \u00d7 Work hours \u00d7 Cost factor',
        calcStep2Desc: 'Each won hour is valued at the current OEE \u00d7 added value per hour, since the line produces at its current OEE level. Work hours are determined by the shift regime (2,000 to 8,760 hrs/year).',
        calcStep3Title: '3. Calculation model',
        calcStep3Desc: '<strong>Demand model:</strong> Unlimited demand \u2014 extra OEE generates extra revenue (factor = 1).<br><strong>Cost model:</strong> Fixed volume \u2014 OEE improvement reduces costs. Cost factor: conservative 20%, expected 30%, optimistic 40%.',
        calcStep4Title: '4. Savings over 3 years',
        calcStep4Desc: 'The OEE improvement ramps up gradually over 3 years:',
        calcStep4Formula: 'Total 3 years = Annual \u00d7 (1/3 + 2/3 + 1) = Annual \u00d7 2',
        calcYear1: 'Year 1',
        calcYear2: 'Year 2',
        calcYear3: 'Year 3',
        calcStep5Title: '5. Scenarios',
        calcStep5Desc: 'Each scenario (conservative, expected, optimistic) uses a different OEE improvement percentage, based on sector data and historical results.',
        placeholderTitle: 'Enter your details',
        placeholderText: 'Select your sector, production parameters and OEE situation to see your savings potential',
        savingPotentialTooltip: 'The savings potential is based on the upgrade from OEE blue to T4A. The OEE increase proportional to this upgrade is achieved through: 1. Direct insight into the current state of affairs from anywhere in the world 2. Scalable booking regarding lines and functionalities 3. Integration with ERP for sharper analyses 4. New insights and analysis tools made even easier 5. Central configuration and management instead of in the factory, per line 6. More options regarding user rights and automatic notification 7. Possibility when choosing on-premise or premise 8. Usability as a data platform: receiving data from sources other than production machines, combining and presenting it in T4A & Realtime. Integration possible with specialized data analysis tools, including PowerBI.',
        valuePerHourTooltipTitle: 'Value per hour at 100% OEE',
        valuePerHourTooltipBody: 'This is the maximum added value per hour, calculated as if the line runs at 100% OEE (without loss of availability, performance and quality).',
        calcBreakdownTitle: 'Calculation Overview',
        calcBreakdownLine: 'Line',
        calcBreakdownHours: 'Work hours',
        calcBreakdownOEEImpr: 'OEE Impr.',
        calcBreakdownCurrentOEE: 'Current OEE',
        calcBreakdownValueHr: 'Value/hr',
        calcBreakdownModel: 'Model',
        calcBreakdownAnnual: 'Annual',
        calcBreakdownTotal: 'Total per year',
        calcBreakdownFormula: 'Savings per line = Work hours × OEE improvement × Current OEE × Value/hr × Model factor',
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
        pdfInternalCosts: 'Internal costs (one-time)',
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
    calculate();
}

function applyTranslations() {
    // Keys that need innerHTML (contain HTML tags)
    const htmlKeys = new Set(['calcStep3Desc']);
    // Update all elements with data-i18n attribute (textContent)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key] !== undefined) {
            if (htmlKeys.has(key)) {
                el.innerHTML = translations[currentLang][key];
            } else {
                el.textContent = translations[currentLang][key];
            }
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
// CALCULATION MODAL
// ==========================================
function openCalcModal() {
    document.getElementById('calcModal').classList.add('open');
}

function closeCalcModal(event) {
    if (!event || event.target === event.currentTarget) {
        document.getElementById('calcModal').classList.remove('open');
    }
}

// ==========================================
// SECTOR DATA (fallback, updated via sector-data.json from GitHub Action)
// ==========================================
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
// SECTOR DATA SYNC (from sector-data.json, updated by GitHub Action)
// ==========================================
async function loadSectorData() {
    try {
        const resp = await fetch('sector-data.json');
        if (!resp.ok) return;
        const data = await resp.json();
        for (const [key, values] of Object.entries(data)) {
            if (sectorData[key]) Object.assign(sectorData[key], values);
        }
        console.log('Loaded sector data from sector-data.json');
    } catch (err) {
        console.warn('Failed to load sector-data.json, using fallback:', err.message);
    }
}

const workHours = { "1": 2000, "2": 4000, "3": 6000, "4": 8000, "5": 8760 };

// ==========================================
// STATE
// ==========================================
let plantData = { 1: { lines: [{ shifts: 3, outputLevel: 'avg', marginLevel: 'avg', situation: 'blueUpgrade', name: '', customOutput: null, customMargin: null, calcModel: 'demand', currentOEE: null }] } };
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

    // Reset all lines to average when sector changes
    for (let p = 1; p <= numPlants; p++) {
        if (plantData[p]) {
            for (const line of plantData[p].lines) {
                line.outputLevel = 'avg';
                line.marginLevel = 'avg';
                line.currentOEE = null;
            }
        }
    }
    renderPlantContent();
    calculate();
}


// ==========================================
// SCENARIO SELECTION
// ==========================================
function selectScenario(scenario) {
    selectedScenario = scenario;
    
    // UI Update: Highlight the selected card
    document.querySelectorAll('.scenario-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    const selectedCard = document.querySelector(`.scenario-card[data-scenario="${scenario}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }

    // Trigger the calculation with the new state
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
            plantData[p] = { lines: [{ shifts: 3, outputLevel: 'avg', marginLevel: 'avg', calcModel: 'demand', currentOEE: null }] };
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
                        <th>${t('thLineName')}</th>
                        <th>${t('currentSituationLabel')}</th>
                        <th class="th-tooltip">${t('thOutput')} <span style="font-size:0.7rem; opacity:0.6;">&#9432;</span><div class="tooltip-text"><span class="tooltip-title">${t('outputTooltipTitle')}</span>${t('outputTooltipBody')}</div></th>
                        <th class="th-tooltip">${t('thMargin')} <span style="font-size:0.7rem; opacity:0.6;">&#9432;</span><div class="tooltip-text"><span class="tooltip-title">${t('marginTooltipTitle')}</span>${t('marginTooltipBody')}</div></th>
                        <th class="th-tooltip">${t('thModel')} <span style="font-size:0.7rem; opacity:0.6;">&#9432;</span><div class="tooltip-text"><span class="tooltip-title">${t('modelTooltipTitle')}</span>${t('modelTooltipBody')}</div></th>
                        <th>${t('thShiftRegime')}</th>
                        <th>${t('thAddedValue')}</th>
                        <th class="th-tooltip">${t('thCurrentOEE')} <span style="font-size:0.7rem; opacity:0.6;">&#9432;</span><div class="tooltip-text"><span class="tooltip-title">${t('currentOEETooltipTitle')}</span>${t('currentOEETooltipBody')}</div></th>
                        <th>${t('thAction')}</th>
                    </tr>
                </thead>
                <tbody>
        `;

        plantData[p].lines.forEach((line, index) => {
            const shiftWord = (s) => s === 1 ? t('shift') : t('shifts');
            const ol = line.outputLevel || 'avg';
            const ml = line.marginLevel || 'avg';
            const sit = line.situation || 'blueUpgrade';
            
            const customOutputHTML = ol === 'custom' ? `<input type="number" class="custom-value-input" value="${line.customOutput || ''}" oninput="updateLineCustomOutput(${p}, ${index}, this.value)" placeholder="${t('unitsPerHour')}">` : '';
            const customMarginHTML = ml === 'custom' ? `<input type="number" class="custom-value-input" step="0.001" value="${line.customMargin || ''}" oninput="updateLineCustomMargin(${p}, ${index}, this.value)" placeholder="${t('perUnit')}">` : '';
            
            const lineOutput = ol === 'custom' ? (line.customOutput || 0) : (data ? data.outputPerHour[ol] : 0);
            const lineMargin = ml === 'custom' ? (line.customMargin || 0) : (data ? data.marginPerUnit[ml] : 0);
            const lineAddedValue = lineOutput * lineMargin;

            tableHTML += `
                <tr>
                    <td class="line-number">${index + 1}</td>
                    <td><input type="text" class="line-name-input" value="${line.name || ''}" onchange="updateLineName(${p}, ${index}, this.value)" placeholder="${t('lineNamePlaceholder')} ${index + 1}"></td>
                    <td>
                        <select onchange="plantData[${p}].lines[${index}].situation=this.value; calculate();">
                            <option value="blueUpgrade" ${sit === 'blueUpgrade' ? 'selected' : ''}>${t('situationLabelBlue')}</option>
                            <option value="noOEE" ${sit === 'noOEE' ? 'selected' : ''}>${t('situationLabelNoOEE')}</option>
                        </select>
                    </td>
                    <td>
                        <select onchange="updateLineOutput(${p}, ${index}, this.value)">
                            <option value="min" ${ol === 'min' ? 'selected' : ''}>${getOutputOptionText('min', data)}</option>
                            <option value="avg" ${ol === 'avg' ? 'selected' : ''}>${getOutputOptionText('avg', data)}</option>
                            <option value="max" ${ol === 'max' ? 'selected' : ''}>${getOutputOptionText('max', data)}</option>
                            <option value="custom" ${ol === 'custom' ? 'selected' : ''}>${t('optionCustom')}</option>
                        </select>
                        ${customOutputHTML}
                    </td>
                    <td>
                        <select onchange="updateLineMargin(${p}, ${index}, this.value)">
                            <option value="min" ${ml === 'min' ? 'selected' : ''}>${getMarginOptionText('min', data)}</option>
                            <option value="avg" ${ml === 'avg' ? 'selected' : ''}>${getMarginOptionText('avg', data)}</option>
                            <option value="max" ${ml === 'max' ? 'selected' : ''}>${getMarginOptionText('max', data)}</option>
                            <option value="custom" ${ml === 'custom' ? 'selected' : ''}>${t('optionCustom')}</option>
                        </select>
                        ${customMarginHTML}
                    </td>
                    <td><select onchange="updateLineModel(${p}, ${index}, this.value)"><option value="demand" ${line.calcModel === 'demand' ? 'selected' : ''}>${t('modelDemand')}</option><option value="cost" ${line.calcModel === 'cost' ? 'selected' : ''}>${t('modelCost')}</option></select></td>
                    <td><select onchange="updateLineShifts(${p}, ${index}, this.value)">${[1,2,3,4,5].map(s => `<option value="${s}" ${line.shifts === s ? 'selected' : ''}>${s} ${shiftWord(s)}</option>`).join('')}</select></td>
                    <td class="added-value-cell">${formatCurrency(lineAddedValue)}</td>
                    <td><input type="number" class="oee-input" value="${line.currentOEE !== null ? Math.round(line.currentOEE * 100) : ''}" oninput="updateLineOEE(${p}, ${index}, this.value)" placeholder="${data ? Math.round(data.oeeStart * 100) + '%' : '%'}"></td>
                    <td><button class="btn btn-remove" onclick="removeLine(${p}, ${index})" ${plantData[p].lines.length <= 1 ? 'disabled' : ''}>${t('removeBtn')}</button></td>
                </tr>
            `;
        });
        tableHTML += `</tbody></table><button class="btn btn-primary" onclick="addLine(${p})">${t('addLineBtn')}</button>`;
        content.innerHTML = tableHTML;
        container.appendChild(content);
    }
}

function addLine(plantNum) {
    plantData[plantNum].lines.push({ shifts: 3, outputLevel: 'avg', marginLevel: 'avg', name: '', customOutput: null, customMargin: null, calcModel: 'demand', currentOEE: null, situation: 'blueUpgrade' });
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

function updateLineModel(plantNum, lineIndex, value) {
    plantData[plantNum].lines[lineIndex].calcModel = value;
    calculate();
}

function updateLineName(plantNum, lineIndex, value) {
    plantData[plantNum].lines[lineIndex].name = value;
}

function updateLineOutput(plantNum, lineIndex, level) {
    plantData[plantNum].lines[lineIndex].outputLevel = level;
    renderPlantContent();
    calculate();
}

function updateLineMargin(plantNum, lineIndex, level) {
    plantData[plantNum].lines[lineIndex].marginLevel = level;
    renderPlantContent();
    calculate();
}

function updateLineCustomOutput(plantNum, lineIndex, value) {
    plantData[plantNum].lines[lineIndex].customOutput = parseFloat(value) || 0;
    renderPlantContent();
    calculate();
}

function updateLineCustomMargin(plantNum, lineIndex, value) {
    plantData[plantNum].lines[lineIndex].customMargin = parseFloat(value) || 0;
    renderPlantContent();
    calculate();
}

function updateLineOEE(plantNum, lineIndex, value) {
    const pct = parseFloat(value);
    plantData[plantNum].lines[lineIndex].currentOEE = (pct > 0 && pct <= 100) ? pct / 100 : null;
    calculate();
}

// ==========================================
// MAIN CALCULATION
// ==========================================
function calculate() {
    const sector = document.getElementById('sector').value;
    const fixedFee = parseFloat(document.getElementById('fixedFee').value) || 0;
    const variableCost = parseFloat(document.getElementById('variableCost').value) || 0;
    const internalCost = parseFloat(document.getElementById('internalCost').value) || 0;
    const totalFixedCost = fixedFee + internalCost;

    const placeholderCard = document.getElementById('placeholderCard');
    const scenarioCard = document.getElementById('scenarioCard');
    const breakEvenCard = document.getElementById('breakEvenCard');
    const exportBtn = document.getElementById('exportBtn');
    const calcBreakdownCard = document.getElementById('calcBreakdownCard');

    // Hide/Show UI logic
    if (!sector || !sectorData[sector]) {
        if (placeholderCard) placeholderCard.style.display = 'block';
        if (scenarioCard) scenarioCard.style.display = 'none';
        if (breakEvenCard) breakEvenCard.style.display = 'none';
        if (calcBreakdownCard) calcBreakdownCard.style.display = 'none';
        if (exportBtn) exportBtn.style.display = 'none';
        return;
    }

    if (placeholderCard) placeholderCard.style.display = 'none';
    if (scenarioCard) scenarioCard.style.display = 'block';
    if (breakEvenCard) breakEvenCard.style.display = 'block';
    if (calcBreakdownCard) calcBreakdownCard.style.display = 'block';
    if (exportBtn) exportBtn.style.display = 'inline-flex';

    const data = sectorData[sector];
    const scenarios = ['conservative', 'expected', 'optimistic', 'aangepast'];
    const results = {};

    let totalLines = 0;
    let totalWeightedOEE = 0;

    for (let p = 1; p <= numPlants; p++) {
        totalLines += plantData[p].lines.length;
    }

    const breakdownRows = [];

    // Main calculation loop per scenario
    for (const scenario of scenarios) {
        let totalAnnual = 0;
        let lineCounter = 0;
        let totalScenarioImprovement = 0;

        for (let p = 1; p <= numPlants; p++) {
            for (const line of plantData[p].lines) {
                lineCounter++;
                const hours = workHours[line.shifts.toString()] || 2000;
                const output = line.outputLevel === 'custom' ? (line.customOutput || 0) : data.outputPerHour[line.outputLevel || 'avg'];
                const margin = line.marginLevel === 'custom' ? (line.customMargin || 0) : data.marginPerUnit[line.marginLevel || 'avg'];
                const oeeStart = line.currentOEE !== null ? line.currentOEE : data.oeeStart;
                
                const lineSit = line.situation || 'blueUpgrade';
                
                let improvement;
                if (scenario === 'aangepast') {
                    const customInput = document.getElementById('customOEEInput');
                    let val = (customInput && customInput.value !== "") ? parseFloat(customInput.value.replace(',', '.')) : 0;
                    improvement = val / 100; // Always treated as direct percentage
                } else {
                    improvement = lineSit === 'noOEE' ? data.oeeNothingToT4A[scenario] : data.oeeBlueToT4A[scenario];
                }
                
                totalScenarioImprovement += improvement;

                const costFactor = line.calcModel === 'cost' ? 
                    { conservative: 0.20, expected: 0.30, optimistic: 0.40, aangepast: 0.30 }[scenario] : 1;
                
                const annual = (output * margin) * oeeStart * improvement * hours * costFactor;
                totalAnnual += annual;

                if (scenario === 'conservative') {
                    totalWeightedOEE += oeeStart;
                }

                if (scenario === selectedScenario) {
                    breakdownRows.push({
                        lineName: line.name || (t('calcBreakdownLine') + ' ' + lineCounter),
                        hours: hours,
                        oeeIncrease: improvement,
                        currentOEE: oeeStart,
                        addedValue: (output * margin),
                        model: line.calcModel || 'demand',
                        costFactor: costFactor,
                        annual: annual
                    });
                }
            }
        }
        results[scenario] = { 
            annual: totalAnnual, 
            threeYear: totalAnnual * 2,
            avgImprov: totalLines > 0 ? totalScenarioImprovement / totalLines : 0
        };
    }

    // Update Scenario Cards UI
    for (const scenario of scenarios) {
        const idPrefix = scenario === 'aangepast' ? 'custom' : scenario;
        const annualEl = document.getElementById(idPrefix + 'Annual');
        const threeYearEl = document.getElementById(idPrefix + 'ThreeYear');
        const oeeEl = document.getElementById(idPrefix + 'OEE');

        if (annualEl) annualEl.textContent = formatCurrency(results[scenario].annual);
        if (threeYearEl) threeYearEl.textContent = formatCurrency(results[scenario].threeYear);
        
        const card = document.querySelector(`.scenario-card[data-scenario="${scenario}"]`);
        const labelEl = card ? card.querySelector('.scenario-oee-label') : null;

        if (scenario === 'aangepast') {
            if (labelEl) labelEl.style.display = 'block';
        } else {
            if (oeeEl) oeeEl.textContent = ""; 
            if (labelEl) labelEl.style.display = 'none';
        }
    }

    const avgOEE = totalLines > 0 ? totalWeightedOEE / totalLines : data.oeeStart;
    const activeRes = results[selectedScenario] || results['expected'];

    // Update Comparison Bars in Break-even section
    const currentBar = document.getElementById('currentBar');
    const potentialBar = document.getElementById('potentialBar');
    const gapLabel = document.getElementById('gapLabel');
    
    if (currentBar) {
        currentBar.style.width = (avgOEE * 100) + '%';
        currentBar.textContent = Math.round(avgOEE * 100) + '%';
    }
    if (potentialBar) {
        const potOEE = Math.min(1, avgOEE + activeRes.avgImprov);
        potentialBar.style.width = (potOEE * 100) + '%';
        potentialBar.textContent = Math.round(potOEE * 100) + '%';
    }
    if (gapLabel) gapLabel.textContent = t('pdfPotentialOee'); 

    // Refresh breakdown and graph
    renderCalcBreakdown(breakdownRows, activeRes.annual);
    renderGraph(calculateBreakEven(activeRes.annual, totalFixedCost, variableCost));

    // Update graph note
    const scenarioLabels = { 
        conservative: t('conservative'), 
        expected: t('expected'), 
        optimistic: t('optimistic'), 
        aangepast: t('optionCustom') 
    };
    const beNote = document.querySelector('.break-even-note');
    if (beNote) {
        beNote.textContent = `${t('breakEvenNotePrefix')} ${scenarioLabels[selectedScenario]} ${t('breakEvenNoteSuffix')}`;
    }
}

// ==========================================
// CALCULATION BREAKDOWN
// ==========================================
function renderCalcBreakdown(rows, totalAnnual) {
    const container = document.getElementById('calcBreakdownContent');
    if (!container) return;

    const modelLabels = { demand: t('modelDemand'), cost: t('modelCost') };

    let html = `
        <div class="calc-breakdown-formula">${t('calcBreakdownFormula')}</div>
        <table class="calc-breakdown-table">
            <thead>
                <tr>
                    <th>${t('calcBreakdownLine')}</th>
                    <th>${t('calcBreakdownHours')}</th>
                    <th>${t('calcBreakdownOEEImpr')}</th>
                    <th>${t('calcBreakdownCurrentOEE')}</th>
                    <th>${t('calcBreakdownValueHr')}</th>
                    <th>${t('calcBreakdownModel')}</th>
                    <th>${t('calcBreakdownAnnual')}</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (const row of rows) {
        html += `
            <tr>
                <td class="line-number">${row.lineName}</td>
                <td>${new Intl.NumberFormat('nl-NL').format(row.hours)}</td>
                <td>${formatPercentage(row.oeeIncrease)}</td>
                <td>${formatPercentage(row.currentOEE)}</td>
                <td>${formatCurrency(row.addedValue)}</td>
                <td>${modelLabels[row.model] || row.model}${row.costFactor < 1 ? ' (' + Math.round(row.costFactor * 100) + '%)' : ''}</td>
                <td class="annual-value">${formatCurrency(row.annual)}</td>
            </tr>
        `;
    }

    html += `
            </tbody>
            <tfoot>
                <tr class="calc-breakdown-total">
                    <td colspan="6">${t('calcBreakdownTotal')}</td>
                    <td class="annual-value">${formatCurrency(totalAnnual)}</td>
                </tr>
            </tfoot>
        </table>
    `;

    container.innerHTML = html;
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
        // OEE improvement ramps over 3 years: 1/3, 2/3, then full from year 3+
        const rampFactor = year <= 3 ? year / 3 : 1;
        cumulativeBenefit += annualBenefit * rampFactor;
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
function generateRealisticCurvePoints(yearData, annualBenefit) {
    if (yearData.length < 2) return yearData;

    // Fallback: If annualBenefit isn't passed, derive it from the last year's data
    // to ensure the line always renders.
    const effectiveAnnualBenefit = annualBenefit || 
        (yearData[yearData.length - 1].cumulativeBenefit / (yearData.length - 1));

    const maxYear = yearData[yearData.length - 1].year;
    const totalMonths = maxYear * 12;
    const points = [];

    points.push({ year: 0, cumulativeBenefit: 0, cumulativeCost: yearData[0].cumulativeCost });

    let currentCumulativeBenefit = 0;

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

    for (let m = 1; m <= totalMonths; m++) {
        const yearFrac = m / 12;
        
        // Match your Break-even logic (1/3, 2/3, 1)
        let currentRamp;
        if (yearFrac <= 1) currentRamp = 1 / 3;
        else if (yearFrac <= 2) currentRamp = 2 / 3;
        else currentRamp = 1;

        const monthlyBenefit = (effectiveAnnualBenefit * currentRamp) / 12;
        currentCumulativeBenefit += monthlyBenefit;

        points.push({
            year: yearFrac,
            cumulativeBenefit: currentCumulativeBenefit,
            cumulativeCost: getCostAtYear(yearFrac)
        });
    }

    return points;
}

function renderGraph(yearData, fixedFee, variableCost) {
    const canvas = document.getElementById('breakEvenCanvas');
    const ctx = canvas.getContext('2d');
    const badge = document.getElementById('breakEvenBadge');
    const breakEvenYear = document.getElementById('breakEvenYear');

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
    if (!yearData || yearData.length < 2) return;

    // 1. MATH: DERIVE ANNUAL BENEFIT & GENERATE POINTS
    const last = yearData[yearData.length - 1];
    const prev = yearData[yearData.length - 2];
    const annualBenefit = last.cumulativeBenefit - prev.cumulativeBenefit;
    const maxYear = last.year;
    const totalMonths = maxYear * 12;
    const realisticPoints = [];
    
    realisticPoints.push({ year: 0, cumulativeBenefit: 0, cumulativeCost: yearData[0].cumulativeCost });

    let runningBenefit = 0;
    let beFound = false;
    let finalBreakEvenMonth = null;

    for (let m = 1; m <= totalMonths; m++) {
        const yearFrac = m / 12;
        let ramp = yearFrac <= 1 ? 1/3 : (yearFrac <= 2 ? 2/3 : 1);
        runningBenefit += (annualBenefit * ramp) / 12;

        const targetY = Math.floor(yearFrac);
        const idx = yearData.findIndex(d => d.year === targetY);
        let cost = (idx !== -1 && yearData[idx+1]) 
            ? yearData[idx].cumulativeCost + (yearData[idx+1].cumulativeCost - yearData[idx].cumulativeCost) * (yearFrac - targetY)
            : last.cumulativeCost;

        realisticPoints.push({ year: yearFrac, cumulativeBenefit: runningBenefit, cumulativeCost: cost });

        if (runningBenefit >= cost && !beFound) {
            finalBreakEvenMonth = m;
            beFound = true;
        }
    }

    // 2. SCALING HELPERS
    const maxValue = Math.max(...yearData.map(d => Math.max(d.cumulativeBenefit, d.cumulativeCost)));
    const xScale = (y) => padding.left + (y / maxYear) * graphWidth;
    const yScale = (v) => padding.top + graphHeight - (v / maxValue) * graphHeight;

    // 3. DRAW GRID & Y-AXIS LABELS
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.font = '11px Inter, sans-serif';
    for (let i = 0; i <= 5; i++) {
        const y = padding.top + (i / 5) * graphHeight;
        ctx.beginPath(); ctx.moveTo(padding.left, y); ctx.lineTo(width - padding.right, y); ctx.stroke();
        ctx.fillStyle = '#64748b'; ctx.textAlign = 'right';
        ctx.fillText(formatCurrency(maxValue * (1 - i / 5)), padding.left - 10, y + 4);
    }

    // --- NEW: DRAW X-AXIS LABELS (JAAR 1 - JAAR 5) ---
    for (let year = 1; year <= maxYear; year++) {
        const x = xScale(year);
        ctx.beginPath();
        ctx.strokeStyle = '#e5e7eb';
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, height - padding.bottom);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.textAlign = 'center';
        // Use your translation function t() or hardcode 'Jaar'
        ctx.fillText(t('yearLabel') + ' ' + year, x, height - padding.bottom + 20);
    }
    // ------------------------------------------------

    // 4. DRAW COST LINE (Red)
    ctx.beginPath(); ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 3;
    yearData.forEach((d, i) => { i === 0 ? ctx.moveTo(xScale(d.year), yScale(d.cumulativeCost)) : ctx.lineTo(xScale(d.year), yScale(d.cumulativeCost)); });
    ctx.stroke();

    // 5. DRAW BENEFIT LINE (Green)
    ctx.beginPath(); ctx.strokeStyle = '#10b981'; ctx.lineWidth = 3;
    realisticPoints.forEach((d, i) => { i === 0 ? ctx.moveTo(xScale(d.year), yScale(d.cumulativeBenefit)) : ctx.lineTo(xScale(d.year), yScale(d.cumulativeBenefit)); });
    ctx.stroke();

    // 6. UPDATE BADGE & DRAW YELLOW DOT
    badge.classList.remove('warning', 'error');
    if (beFound) {
        breakEvenYear.textContent = finalBreakEvenMonth + ' ' + t('months');
        const pt = realisticPoints.find(p => p.year * 12 === finalBreakEvenMonth);
        if (pt) {
            ctx.beginPath(); ctx.fillStyle = '#fbbf24';
            ctx.arc(xScale(pt.year), yScale(pt.cumulativeBenefit), 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
        }
    } else if (last.cumulativeCost > last.cumulativeBenefit) {
        breakEvenYear.textContent = t('overMonths');
        badge.classList.add('error');
    }
}

// ==========================================
// PDF EXPORT
// ==========================================
function exportPDF() {
    // 1. Removed companyName check and situation dropdown check to prevent crashes
    const sector = document.getElementById('sector').value;

    if (!sector) {
        alert(t('alertFillIn'));
        return;
    }

    const data = sectorData[sector];
    const fixedFee = parseFloat(document.getElementById('fixedFee').value) || 0;
    const variableCost = parseFloat(document.getElementById('variableCost').value) || 0;
    const internalCost = parseFloat(document.getElementById('internalCost').value) || 0;
    const totalFixedCost = fixedFee + internalCost;

    // Include all 4 scenarios so the PDF works regardless of which card is selected
    const scenarios = ['conservative', 'expected', 'optimistic', 'aangepast'];
    const results = {};
    let totalLines = 0;
    let totalAddedValue = 0;
    let totalStartOEE = 0;

    for (let p = 1; p <= numPlants; p++) {
        totalLines += plantData[p].lines.length;
    }

    for (const scenario of scenarios) {
        let totalAnnual = 0;
        let totalImprovement = 0;

        for (let p = 1; p <= numPlants; p++) {
            for (const line of plantData[p].lines) {
                const hours = workHours[line.shifts.toString()] || 2000;
                const lineOutput = line.outputLevel === 'custom' ? (line.customOutput || 0) : data.outputPerHour[line.outputLevel || 'avg'];
                const lineMargin = line.marginLevel === 'custom' ? (line.customMargin || 0) : data.marginPerUnit[line.marginLevel || 'avg'];
                const lineOEE = line.currentOEE !== null ? line.currentOEE : data.oeeStart;
                
                const lineSit = line.situation || 'blueUpgrade';
                
                let improvement;
                if (scenario === 'aangepast') {
                    const customInput = document.getElementById('customOEEInput');
                    let val = customInput ? parseFloat(customInput.value.replace(',', '.')) : 0;
                    improvement = val > 1 ? val / 100 : val; 
                } else {
                    improvement = lineSit === 'noOEE' ? data.oeeNothingToT4A[scenario] : data.oeeBlueToT4A[scenario];
                }
                
                totalImprovement += improvement;

                const costFactor = line.calcModel === 'cost' ? 
                    { conservative: 0.20, expected: 0.30, optimistic: 0.40, aangepast: 0.30 }[scenario] : 1;
                
                totalAnnual += (lineOutput * lineMargin * lineOEE) * improvement * hours * costFactor;
                
                if (scenario === 'conservative') {
                    totalAddedValue += (lineOutput * lineMargin);
                    totalStartOEE += lineOEE;
                }
            }
        }

        results[scenario] = {
            annual: totalAnnual,
            threeYear: totalAnnual * 2,
            oeeIncrease: totalImprovement / totalLines
        };
    }

    const avgAddedValue = totalLines > 0 ? totalAddedValue / totalLines : 0;
    const avgStartOEE = totalLines > 0 ? totalStartOEE / totalLines : data.oeeStart;
    
    // Safety: use selectedScenario or fallback to expected
    const activeRes = results[selectedScenario] || results['expected'];
    const selectedAnnual = activeRes.annual;
    const totalCost3Years = totalFixedCost + (variableCost * 3);
    const netBenefit = activeRes.threeYear - totalCost3Years;
    const roi = totalCost3Years > 0 ? ((activeRes.threeYear / totalCost3Years) * 100).toFixed(0) : '0';

    // Break-even Calculation
    let breakEvenMonths = 0;
    let cumulativeBenefit = 0;
    let cumulativeCost = totalFixedCost;
    for (let year = 1; year <= 10; year++) {
        const rampFactor = year <= 3 ? year / 3 : 1;
        const yearBenefit = selectedAnnual * rampFactor;
        cumulativeBenefit += yearBenefit;
        cumulativeCost += variableCost;
        if (cumulativeBenefit >= cumulativeCost) {
            const prevBenefit = cumulativeBenefit - yearBenefit;
            const prevCost = cumulativeCost - variableCost;
            const prevGap = Math.max(0, prevCost - prevBenefit);
            const gapChange = yearBenefit - variableCost;
            const fraction = gapChange > 0 ? prevGap / gapChange : 0;
            breakEvenMonths = Math.ceil(((year - 1) + fraction) * 12);
            break;
        }
    }

    const scenarioLabels = { conservative: t('conservative'), expected: t('expected'), optimistic: t('optimistic'), aangepast: t('optionCustom') };
    const dateLocale = currentLang === 'nl' ? 'nl-NL' : 'en-GB';

    // Generate the HTML for the PDF (Removed Company Name references)
    const printContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${t('pdfTitle')}</title>
    <style>
        @page { margin: 15mm; size: A4; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Arial, sans-serif; color: #1e293b; line-height: 1.5; font-size: 11pt; }
        .header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 15px; border-bottom: 3px solid #00AAFF; margin-bottom: 25px; }
        .header-left h1 { font-size: 22pt; font-weight: 800; color: #0f172a; }
        .header-left h1 span { color: #00AAFF; }
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
        .info-table .label { color: #64748b; width: 50%; }
        .info-table .value { font-weight: 600; color: #0f172a; text-align: right; }
        .scenario-table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
        .scenario-table th { text-align: center; padding: 10px; font-size: 9pt; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; border-bottom: 2px solid #e5e7eb; }
        .scenario-table td { text-align: center; padding: 8px; font-size: 10pt; border-bottom: 1px solid #f1f5f9; }
        .scenario-table .row-label { text-align: left; color: #64748b; font-size: 9pt; }
        .scenario-table .value-row td { font-weight: 700; font-size: 12pt; color: #0f172a; }
        .financials { background: #f8fafc; border-radius: 8px; padding: 15px; }
        .financials-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e5e7eb; }
        .financials-row.total { background: #0f172a; color: #fff; margin: 10px -15px -15px -15px; padding: 12px 15px; border-radius: 0 0 8px 8px; }
        .plant-card { background: #f8fafc; padding: 10px 12px; border-radius: 6px; border-left: 3px solid #00AAFF; margin-bottom:5px;}
        .footer { margin-top: 30px; padding-top: 15px; border-top: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center; font-size: 8pt; color: #94a3b8; }
        @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
    </style>
</head>
<body>
    <div class="header">
        <div class="header-left">
            <h1>OEE <span>${t('pdfTitle')}</span></h1>
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
                    <th>${t('conservative')}</th>
                    <th>${t('expected')}</th>
                    <th>${t('optimistic')}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="value-row">
                    <td class="row-label">${t('pdfPerYear')}</td>
                    <td>${formatCurrency(results.conservative.annual)}</td>
                    <td>${formatCurrency(results.expected.annual)}</td>
                    <td>${formatCurrency(results.optimistic.annual)}</td>
                </tr>
                <tr>
                    <td class="row-label">${t('pdfOeeImprovement')}</td>
                    <td>+${formatPercentage(results.conservative.oeeIncrease)}</td>
                    <td>+${formatPercentage(results.expected.oeeIncrease)}</td>
                    <td>+${formatPercentage(results.optimistic.oeeIncrease)}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="content-grid">
        <div>
            <div class="section">
                <div class="section-title">${t('pdfCompanyDetails')}</div>
                <table class="info-table">
                    <tr><td class="label">${t('pdfSector')}</td><td class="value">${data.name}</td></tr>
                    <tr><td class="label">${t('pdfValuePerHour')}</td><td class="value">${formatCurrency(avgAddedValue)}</td></tr>
                    <tr><td class="label">${t('pdfNumPlants')}</td><td class="value">${numPlants}</td></tr>
                    <tr><td class="label">${t('pdfTotalLines')}</td><td class="value">${totalLines}</td></tr>
                </table>
            </div>
            <div class="section">
                <div class="section-title">${t('pdfOeeImprovementSection')}</div>
                <table class="info-table">
                    <tr><td class="label">${t('pdfCurrentOee')}</td><td class="value">${(avgStartOEE * 100).toFixed(0)}%</td></tr>
                    <tr><td class="label">${t('pdfExpectedImprov')}</td><td class="value">+${formatPercentage(activeRes.oeeIncrease)}</td></tr>
                </table>
            </div>
        </div>
        <div>
            <div class="section">
                <div class="section-title">${t('pdfInvestment')}</div>
                <div class="financials">
                    <div class="financials-row"><span class="label">${t('pdfFixedCosts')}</span><span class="value">${formatCurrency(fixedFee)}</span></div>
                    <div class="financials-row"><span class="label">${t('pdfVariableCosts')}</span><span class="value">${formatCurrency(variableCost)}</span></div>
                    <div class="financials-row total"><span class="label">${t('pdfNetBenefitExpected')}</span><span class="value">${formatCurrency(netBenefit)}</span></div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div>Decide4Action OEE ROI Calculator</div>
        <div>${t('pdfFooterData')}</div>
    </div>
</body>
</html>`;

    // Open window and print
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        alert("Pop-up geblokkeerd! Sta pop-ups toe om de PDF te openen.");
        return;
    }
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
        printWindow.print();
    }, 500);
}

// ==========================================
// INITIALIZE
// ==========================================
document.addEventListener('DOMContentLoaded', async function() {
    await loadSectorData();
    initSearchableSelect();
    updatePlantTabs();

    // ADD THIS PART: Link the custom OEE input to the calculation engine
    const customOeeInput = document.getElementById('customOEEInput');
    if (customOeeInput) {
        // 'input' fires on every keystroke, 'change' fires when you click away
        customOeeInput.addEventListener('input', () => {
            if (selectedScenario === 'aangepast') {
                calculate();
            }
        });
    }
});
