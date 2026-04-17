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
let plantData = { 1: { lines: [{ shifts: 3, outputLevel: 'avg', marginLevel: 'avg', name: '', customOutput: null, customMargin: null, calcModel: 'demand', currentOEE: null }] } };
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
                        <th class="th-tooltip">${t('thOutput')} <span style="font-size:0.7rem; opacity:0.6;">&#9432;</span><div class="tooltip-text"><span class="tooltip-title">${t('outputTooltipTitle')}</span>${t('outputTooltipBody')}</div></th>
                        <th class="th-tooltip">${t('thMargin')} <span style="font-size:0.7rem; opacity:0.6;">&#9432;</span><div class="tooltip-text"><span class="tooltip-title">${t('marginTooltipTitle')}</span>${t('marginTooltipBody')}</div></th>
                        <th>${t('thAddedValue')}</th>
                        <th class="th-tooltip">${t('thCurrentOEE')} <span style="font-size:0.7rem; opacity:0.6;">&#9432;</span><div class="tooltip-text"><span class="tooltip-title">${t('currentOEETooltipTitle')}</span>${t('currentOEETooltipBody')}</div></th>
                        <th class="th-tooltip">${t('thModel')} <span style="font-size:0.7rem; opacity:0.6;">&#9432;</span><div class="tooltip-text"><span class="tooltip-title">${t('modelTooltipTitle')}</span>${t('modelTooltipBody')}</div></th>
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
            const customOutputHTML = ol === 'custom' ? `<input type="number" class="custom-value-input" value="${line.customOutput || ''}" onchange="updateLineCustomOutput(${p}, ${index}, this.value)" oninput="updateLineCustomOutput(${p}, ${index}, this.value)" placeholder="${t('unitsPerHour')}">` : '';
            const customMarginHTML = ml === 'custom' ? `<input type="number" class="custom-value-input" step="0.001" value="${line.customMargin || ''}" onchange="updateLineCustomMargin(${p}, ${index}, this.value)" oninput="updateLineCustomMargin(${p}, ${index}, this.value)" placeholder="${t('perUnit')}">` : '';
            const lineOutput = ol === 'custom' ? (line.customOutput || 0) : (data ? data.outputPerHour[ol] : 0);
            const lineMargin = ml === 'custom' ? (line.customMargin || 0) : (data ? data.marginPerUnit[ml] : 0);
            const lineAddedValue = lineOutput * lineMargin;
            tableHTML += `
                <tr>
                    <td class="line-number">${index + 1}</td>
                    <td>
                        <input type="text" class="line-name-input" value="${line.name || ''}" onchange="updateLineName(${p}, ${index}, this.value)" placeholder="${t('lineNamePlaceholder')} ${index + 1}">
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
                    <td class="added-value-cell">${formatCurrency(lineAddedValue)}</td>
                    <td>
                        <input type="number" class="oee-input" step="1" min="1" max="100" value="${line.currentOEE !== null ? Math.round(line.currentOEE * 100) : (data ? Math.round(data.oeeStart * 100) : '')}" onchange="updateLineOEE(${p}, ${index}, this.value)" oninput="updateLineOEE(${p}, ${index}, this.value)" placeholder="${data ? Math.round(data.oeeStart * 100) + '%' : '%'}">
                    </td>
                    <td>
                        <select onchange="updateLineModel(${p}, ${index}, this.value)">
                            <option value="demand" ${(line.calcModel || 'demand') === 'demand' ? 'selected' : ''}>${t('modelDemand')}</option>
                            <option value="cost" ${line.calcModel === 'cost' ? 'selected' : ''}>${t('modelCost')}</option>
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
    plantData[plantNum].lines.push({ shifts: 3, outputLevel: 'avg', marginLevel: 'avg', name: '', customOutput: null, customMargin: null, calcModel: 'demand', currentOEE: null });
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
    const situation = document.getElementById('currentSituation').value;
    const fixedFee = parseFloat(document.getElementById('fixedFee').value) || 0;
    const variableCost = parseFloat(document.getElementById('variableCost').value) || 0;
    const internalCost = parseFloat(document.getElementById('internalCost').value) || 0;
    const totalFixedCost = fixedFee + internalCost;

    const placeholderCard = document.getElementById('placeholderCard');
    const scenarioCard = document.getElementById('scenarioCard');
    const sectorCard = document.getElementById('sectorCard');
    const breakEvenCard = document.getElementById('breakEvenCard');
    const exportBtn = document.getElementById('exportBtn');

    const calcBreakdownCard = document.getElementById('calcBreakdownCard');

    if (!sector || !situation || !sectorData[sector]) {
        placeholderCard.style.display = 'block';
        scenarioCard.style.display = 'none';
        sectorCard.style.display = 'none';
        breakEvenCard.style.display = 'none';
        if (calcBreakdownCard) calcBreakdownCard.style.display = 'none';
        exportBtn.style.display = 'none';
        return;
    }

    placeholderCard.style.display = 'none';
    scenarioCard.style.display = 'block';
    sectorCard.style.display = 'block';
    breakEvenCard.style.display = 'block';
    if (calcBreakdownCard) calcBreakdownCard.style.display = 'block';
    exportBtn.style.display = 'inline-flex';

    const data = sectorData[sector];

    // Get OEE increases based on situation
    const oeeData = situation === 'noOEE' ? data.oeeNothingToT4A : data.oeeBlueToT4A;

    // Show/hide saving potential tooltip based on situation
    const savingInfo = document.getElementById('savingPotentialInfo');
    if (savingInfo) {
        savingInfo.style.display = situation === 'blueUpgrade' ? 'inline' : 'none';
    }

    // Calculate for each scenario (per-line output/margin, per-line OEE)
    const scenarios = ['conservative', 'expected', 'optimistic'];
    const results = {};

    let totalLines = 0;
    let totalAddedValue = 0;
    let totalWeightedOEE = 0;
    for (let p = 1; p <= numPlants; p++) {
        totalLines += plantData[p].lines.length;
    }

    // Collect breakdown data for the selected scenario
    const breakdownRows = [];

    for (const scenario of scenarios) {
        const oeeIncrease = oeeData[scenario];
        let totalAnnual = 0;
        let lineCounter = 0;

        for (let p = 1; p <= numPlants; p++) {
            for (const line of plantData[p].lines) {
                lineCounter++;
                const hours = workHours[line.shifts.toString()];
                const lineOutput = line.outputLevel === 'custom' ? (line.customOutput || 0) : data.outputPerHour[line.outputLevel || 'avg'];
                const lineMargin = line.marginLevel === 'custom' ? (line.customMargin || 0) : data.marginPerUnit[line.marginLevel || 'avg'];
                const lineAddedValue = lineOutput * lineMargin;
                const lineOEE = line.currentOEE !== null ? line.currentOEE : data.oeeStart;
                const effectiveValue = lineAddedValue * lineOEE;
                const costFactor = line.calcModel === 'cost'
                    ? { conservative: 0.20, expected: 0.30, optimistic: 0.40 }[scenario]
                    : 1;
                const annual = effectiveValue * oeeIncrease * hours * costFactor;
                totalAnnual += annual;
                if (scenario === 'conservative') {
                    totalAddedValue += lineAddedValue;
                    totalWeightedOEE += lineOEE;
                }

                // Collect breakdown for selected scenario
                if (scenario === selectedScenario) {
                    breakdownRows.push({
                        plantNum: p,
                        lineIndex: lineCounter,
                        lineName: line.name || (t('calcBreakdownLine') + ' ' + lineCounter),
                        hours: hours,
                        oeeIncrease: oeeIncrease,
                        currentOEE: lineOEE,
                        addedValue: lineAddedValue,
                        model: line.calcModel || 'demand',
                        costFactor: costFactor,
                        annual: annual
                    });
                }
            }
        }

        // OEE improvement ramps evenly over 3 years: 1/3, 2/3, 3/3
        // Annual = year 3 savings (full improvement)
        // 3-year total = year1 (1/3) + year2 (2/3) + year3 (3/3) = annual * 2
        results[scenario] = {
            annual: totalAnnual,
            threeYear: totalAnnual * (1/3 + 2/3 + 1),
            oeeIncrease: oeeIncrease
        };
    }

    const avgAddedValue = totalLines > 0 ? totalAddedValue / totalLines : 0;
    const avgOEE = totalLines > 0 ? totalWeightedOEE / totalLines : data.oeeStart;

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
    document.getElementById('oeeStartDisplay').textContent = formatPercentage(avgOEE);
    document.getElementById('oeeImprovementDisplay').textContent = '+' + formatPercentage(oeeData[selectedScenario]);

    // Update calculation breakdown
    renderCalcBreakdown(breakdownRows, results[selectedScenario].annual);

    // Update value bars using selected scenario (use avg per-line OEE)
    const currentOEE = avgOEE * 100;
    const potentialOEE = Math.min(95, (avgOEE + oeeData[selectedScenario]) * 100);
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
    const yearData = calculateBreakEven(annualBenefit, totalFixedCost, variableCost);
    renderGraph(yearData);
    displayBreakEven(yearData, totalFixedCost, variableCost);
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

function getBreakEvenData(annualBenefit, fixedFee, variableCost) {
    const monthlyVarCost = variableCost / 12;
    
    // 1. THE CALCULUS (The Master Lead)
    // Uses your specific 3-year ramp logic
    let calcBenefit = 0;
    let calcCost = fixedFee;
    let breakEvenMonth = 0;
    const MAX_MONTHS = 240;

    for (let m = 1; m <= MAX_MONTHS; m++) {
        const year = m / 12;
        // EXACT RAMP: Year 1 = 1/3, Year 2 = 2/3, Year 3+ = 100%
        let rampFactor = 1;
        if (year <= 1) rampFactor = 1/3;
        else if (year <= 2) rampFactor = 2/3;
        else rampFactor = 1;

        // Benefit added this month is (Annual / 12) * current ramp
        calcBenefit += (annualBenefit / 12) * rampFactor;
        calcCost += monthlyVarCost;

        if (calcBenefit >= calcCost && breakEvenMonth === 0) {
            breakEvenMonth = m;
            break;
        }
    }

    // 2. THE GRAPH (The Visual Representation)
    // We pin the "Realistic" curve to the calculated Break-Even Month
    const totalMonths = breakEvenMonth > 0 ? Math.max(breakEvenMonth + 24, 60) : 60;
    const costAtBE = fixedFee + (breakEvenMonth * monthlyVarCost);
    
    // Generate "weights" for the realistic look (bumps/dips)
    let weights = [];
    for (let m = 1; m <= (breakEvenMonth || totalMonths); m++) {
        // Keeps the visual "feel" but the math will override the scale
        const w = m <= 3 ? 0.2 : (m <= 6 ? 1.8 : 1.0); 
        weights.push(w);
    }
    
    const sumWeights = weights.reduce((a, b) => a + b, 0);
    // This multiplier ensures Cumulative Benefit == costAtBE at the exact breakEvenMonth
    const scaleFactor = breakEvenMonth > 0 ? (costAtBE / sumWeights) : 0;

    const points = [];
    points.push({ year: 0, cumulativeBenefit: 0, cumulativeCost: fixedFee });
    
    let runningBenefit = 0;
    for (let m = 1; m <= totalMonths; m++) {
        if (breakEvenMonth > 0 && m <= breakEvenMonth) {
            runningBenefit += weights[m-1] * scaleFactor;
        } else {
            // After break-even, it continues at the full 100% annual rate
            runningBenefit += (annualBenefit / 12);
        }

        points.push({
            year: m / 12,
            cumulativeBenefit: runningBenefit,
            cumulativeCost: fixedFee + (m * monthlyVarCost)
        });
    }

    return { 
        points, 
        breakEvenMonth, 
        beValue: costAtBE 
    };
}

// Update your rendering to use the returned object:
function displayBreakEven(data) {
    const breakEvenYear = document.getElementById('breakEvenYear');
    if (data.breakEvenMonth > 0 && data.breakEvenMonth < 240) {
        breakEvenYear.textContent = data.breakEvenMonth + ' months';
    } else {
        breakEvenYear.textContent = 'Calculation exceeds 20 years';
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
    const internalCost = parseFloat(document.getElementById('internalCost').value) || 0;
    const totalFixedCost = fixedFee + internalCost;

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
                const lineOutput = line.outputLevel === 'custom' ? (line.customOutput || 0) : data.outputPerHour[line.outputLevel || 'avg'];
                const lineMargin = line.marginLevel === 'custom' ? (line.customMargin || 0) : data.marginPerUnit[line.marginLevel || 'avg'];
                const lineAddedValue = lineOutput * lineMargin;
                const lineOEE = line.currentOEE !== null ? line.currentOEE : data.oeeStart;
                const effectiveValue = lineAddedValue * lineOEE;
                const costFactor = line.calcModel === 'cost'
                    ? { conservative: 0.20, expected: 0.30, optimistic: 0.40 }[scenario]
                    : 1;
                totalAnnual += effectiveValue * oeeData[scenario] * hours * costFactor;
                if (scenario === 'conservative') totalAddedValue += lineAddedValue;
            }
        }

        // OEE improvement ramps evenly over 3 years: 1/3, 2/3, 3/3
        results[scenario] = {
            annual: totalAnnual,
            threeYear: totalAnnual * (1/3 + 2/3 + 1),
            oeeIncrease: oeeData[scenario]
        };
    }

    const avgAddedValue = totalLines > 0 ? totalAddedValue / totalLines : 0;
    const selectedAnnual = results[selectedScenario].annual;
    const totalCost3Years = totalFixedCost + (variableCost * 3);
    const netBenefit = results[selectedScenario].threeYear - totalCost3Years;
    const roi = totalCost3Years > 0 ? ((results[selectedScenario].threeYear / totalCost3Years) * 100).toFixed(0) : '\u221E';

    // Break-even in months (using selected scenario)
    let breakEvenMonths = 0;
    let cumulativeBenefit = 0;
    let cumulativeCost = totalFixedCost;
    for (let year = 1; year <= 20; year++) {
        // OEE improvement ramps over 3 years: 1/3, 2/3, then full from year 3+
        const rampFactor = year <= 3 ? year / 3 : 1;
        const yearBenefit = selectedAnnual * rampFactor;
        cumulativeBenefit += yearBenefit;
        cumulativeCost += variableCost;
        if (cumulativeBenefit >= cumulativeCost) {
            if (year === 1) {
                const prevGap = totalFixedCost;
                const gapChange = yearBenefit - variableCost;
                const fraction = prevGap / gapChange;
                breakEvenMonths = Math.ceil(fraction * 12);
            } else {
                const prevBenefit = cumulativeBenefit - yearBenefit;
                const prevCost = cumulativeCost - variableCost;
                const prevGap = prevCost - prevBenefit;
                const gapChange = yearBenefit - variableCost;
                const fraction = prevGap / gapChange;
                breakEvenMonths = Math.ceil(((year - 1) + fraction) * 12);
            }
            break;
        }
    }

    const situationLabel = situation === 'noOEE' ? t('situationLabelNoOEE') : t('situationLabelBlue');
    const outputLabels = { min: t('outputLabelLow'), avg: t('outputLabelAvg'), max: t('outputLabelHigh'), custom: t('optionCustom') };
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
            ${internalCost > 0 ? `<div class="financials-row">
                <span class="label">${t('pdfInternalCosts')}</span>
                <span class="value">${formatCurrency(internalCost)}</span>
            </div>` : ''}
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
                    <div class="plant-lines">${plantData[p].lines.map((l, j) => {
                        const lineName = l.name || (t('pdfLine') + ' ' + (j+1));
                        const outputText = l.outputLevel === 'custom' ? t('optionCustom') + ' (' + formatOutputValue(l.customOutput || 0) + ')' : outputLabels[l.outputLevel || 'avg'];
                        const marginText = l.marginLevel === 'custom' ? t('optionCustom') + ' (' + formatMarginValue(l.customMargin || 0) + ')' : outputLabels[l.marginLevel || 'avg'];
                        const modelText = l.calcModel === 'cost' ? t('modelCost') : t('modelDemand');
                        return `${lineName}: ${l.shifts} ${l.shifts > 1 ? t('shifts') : t('shift')} | ${t('thOutput')}: ${outputText} | ${t('thMargin')}: ${marginText} | ${t('thModel')}: ${modelText}`;
                    }).join('<br>')}</div>
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

