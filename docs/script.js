// ==========================================
// TRANSLATIONS
// ==========================================
// ==========================================
// TRANSLATIONS (Updated with English Point 2 & Formula Consistency)
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
        optionLow: 'Optie A',
        optionAvg: 'Optie B',
        optionHigh: 'Optie C',
        unitsPerHour: 'eenheden/uur',
        marginLabel: 'Marge per eenheid',
        perUnit: 'per eenheid',
        addedValueLabel: 'Toegevoegde waarde per uur:',
        perHourSuffix: '/uur',
        benchmarkInfoText: 'Waarden zijn industrie-typische benchmarkbereiken, gebaseerd op productielijn capaciteiten en gemiddelde contributiemarges in vergelijkbare productieomgevingen.',
        cardPlantsTitle: 'Plants & Lijnen Configuratie',
        cardPlantsSubtitle: 'Configureer lijnen per plant met individuele ploegen',
        thLine: 'Lijn',
        thShiftRegime: 'Ploegen',
        thOutput: 'Max. output',
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
        calcStep2Formula: 'Jaarlijks = Waarde/uur (bij 100%) × OEE verbetering (punten) × Werkuren × Kostenfactor',
        calcStep2Desc: 'Elk gewonnen procentpunt OEE wordt direct gewaardeerd tegen de toegevoegde waarde per uur. Als u bijvoorbeeld van 50% naar 52% OEE gaat, rekent het model met de 2% winst op uw totale capaciteit.',
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
        calcBreakdownFormula: 'Besparing per lijn = Werkuren × OEE verbetering × Waarde/uur × Modelfactor',
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
        outputLabelHigh: 'Hoog',
        rampUpTitle: "Geleidelijke Besparingsopbouw (Ramp-up)",
        rampUpDesc: "De ROI houdt rekening met een realistisch adoptieproces. We bouwen de resultaten stapsgewijs op (Jaar 1: 33%, Jaar 2: 67%, Jaar 3: 100%) om rekening te houden met de tijd die nodig is voor training, procesoptimalisatie en gedragsverandering binnen uw team.",
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
        optionLow: 'Option A',
        optionAvg: 'Option B',
        optionHigh: 'Option C',
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
        calcStep2Formula: 'Annual = Value/hr (at 100%) × OEE improvement (points) × Work hours × Cost factor',
        calcStep2Desc: 'Each OEE percentage point gained is directly valued against the added value per hour. For example, if you go from 50% to 52% OEE, the model calculates with the 2% gain on your total capacity.',
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
        calcBreakdownFormula: 'Savings per line = Work hours × OEE improvement × Value/hr × Model factor',
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
        pdfOver3Years: 'Over 3 Year',
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
        outputLabelHigh: 'High',
        rampUpTitle: "Gradual Savings Realization (Ramp-up)",
        rampUpDesc: "The ROI accounts for a realistic adoption process. Results are built up in stages (Year 1: 33%, Year 2: 67%, Year 3: 100%) to reflect the time required for staff training, process optimization, and cultural change within your organization.",
        sectorPharm: 'Pharmaceutical',
        sectorFood: 'Food',
        sectorBottlers: 'Bottlers',
        sectorTextile: 'Textile',
        sectorWood: 'Wood',
        sectorPaper: 'Paper',
        sectorChemical: 'Chemical',
        sectorPlastic: 'Plastic',
        sectorMetal: 'Metal',
        sectorMachine: 'Machinery',
        sectorAuto: 'Auto & Transport',
        sectorElectronics: 'Electronics',
        sectorOil: 'Oil & Refinery',
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
    
    // RE-INITIALIZE THE SEARCHABLE SELECT TO LOAD NEW TRANSLATIONS
    initSearchableSelect(); 
    
    renderPlantContent();
    calculate();
}

function applyTranslations() {
    const htmlKeys = new Set(['calcStep3Desc']);
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
// SECTOR DATA
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

async function loadSectorData() {
    try {
        const resp = await fetch('sector-data.json');
        if (!resp.ok) return;
        const data = await resp.json();
        for (const [key, values] of Object.entries(data)) {
            if (sectorData[key]) Object.assign(sectorData[key], values);
        }
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

    const newSelect = select.cloneNode(true);
    select.parentNode.replaceChild(newSelect, select);
    newSelect.addEventListener('mousedown', (e) => {
        e.preventDefault();
        wrapper.classList.add('open', 'searching');
        search.value = '';
        search.focus();
    });

    search.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        dropdown.querySelectorAll('.select-option').forEach(opt => {
            const match = opt.textContent.toLowerCase().includes(q);
            opt.classList.toggle('hidden', !match);
        });
    });

    search.addEventListener('blur', () => {
        setTimeout(() => {
            wrapper.classList.remove('open', 'searching');
        }, 150);
    });

    dropdown.addEventListener('click', (e) => {
        if (e.target.classList.contains('select-option')) {
            document.getElementById('sector').value = e.target.dataset.value;
            wrapper.classList.remove('open', 'searching');
            onSectorChange();
        }
    });
}

function onSectorChange() {
    const sector = document.getElementById('sector').value;
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

function selectScenario(scenario) {
    selectedScenario = scenario;
    document.querySelectorAll('.scenario-card').forEach(card => card.classList.remove('selected'));
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
    numPlants = Math.min(10, Math.max(1, parseInt(document.getElementById('numPlants').value) || 1));
    document.getElementById('numPlantsSlider').value = numPlants;
    for (let p = 1; p <= numPlants; p++) {
        if (!plantData[p]) plantData[p] = { lines: [{ shifts: 3, outputLevel: 'avg', marginLevel: 'avg', calcModel: 'demand', currentOEE: null }] };
    }
    if (activePlant > numPlants) activePlant = numPlants;
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
        tab.onclick = () => { activePlant = p; renderPlantTabs(); renderPlantContent(); };
        tabsContainer.appendChild(tab);
    }
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
            <div class="table-container-rounded">
                <table class="lines-table">
                    <colgroup>
                        <col style="width: 40px;"> <col style="width: 160px;"> <col style="width: 110px;"> 
                        <col style="width: 140px;"> <col style="width: 140px;"> <col style="width: 100px;"> 
                        <col style="width: 80px;"> <col style="width: 110px;"> <col style="width: 90px;"> <col style="width: 50px;">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>${t('thLineName')}</th>
                            <th>Situatie</th>
                            <th class="th-tooltip">Output <span class="info-icon">ⓘ</span><div class="tooltip-text">${t('outputTooltipBody')}</div></th>
                            <th class="th-tooltip">Marge <span class="info-icon">ⓘ</span><div class="tooltip-text">${t('marginTooltipBody')}</div></th>
                            <th>Model</th>
                            <th>Ploegen</th>
                            <th>${t('thAddedValue')}</th>
                            <th class="th-tooltip">OEE % <span class="info-icon">ⓘ</span><div class="tooltip-text">${t('currentOEETooltipBody')}</div></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>`;

        plantData[p].lines.forEach((line, index) => {
            const displayOEE = line.currentOEE !== null 
                ? Math.round(line.currentOEE * 100) 
                : (data ? Math.round(data.oeeStart * 100) : '');

            // Determine values for Value/Hour cell
            const currentOutput = (line.outputLevel === 'custom' ? (line.customOutput || 0) : (data ? data.outputPerHour[line.outputLevel || 'avg'] : 0));
            const currentMargin = (line.marginLevel === 'custom' ? (line.customMargin || 0) : (data ? data.marginPerUnit[line.marginLevel || 'avg'] : 0));

            tableHTML += `
                <tr>
                    <td style="font-weight: bold; color: #94a3b8;">${index + 1}</td>
                    <td><input type="text" class="line-input" value="${line.name || ''}" onchange="updateLineName(${p}, ${index}, this.value)" placeholder="Lijn naam.."></td>
                    <td>
                        <select class="line-select" onchange="plantData[${p}].lines[${index}].situation=this.value; calculate();">
                            <option value="blueUpgrade" ${line.situation === 'blueUpgrade' ? 'selected' : ''}>Blue Upgrade</option>
                            <option value="noOEE" ${line.situation === 'noOEE' ? 'selected' : ''}>Nieuwe Plant</option>
                        </select>
                    </td>
                    <td>
                        <select class="line-select" onchange="updateLineOutput(${p}, ${index}, this.value)">
                            <option value="min" ${line.outputLevel === 'min' ? 'selected' : ''}>${t('optionLow')} (${data ? data.outputPerHour.min : '0'})</option>
                            <option value="avg" ${line.outputLevel === 'avg' ? 'selected' : ''}>${t('optionAvg')} (${data ? data.outputPerHour.avg : '0'})</option>
                            <option value="max" ${line.outputLevel === 'max' ? 'selected' : ''}>${t('optionHigh')} (${data ? data.outputPerHour.max : '0'})</option>
                            <option value="custom" ${line.outputLevel === 'custom' ? 'selected' : ''}>${t('optionCustom')}</option>
                        </select>
                        ${line.outputLevel === 'custom' ? `<input type="number" class="line-input" style="margin-top:5px;" value="${line.customOutput || ''}" oninput="plantData[${p}].lines[${index}].customOutput=parseFloat(this.value); calculate();" placeholder="Output/u">` : ''}
                    </td>
                    <td>
                        <select class="line-select" onchange="updateLineMargin(${p}, ${index}, this.value)">
                            <option value="min" ${line.marginLevel === 'min' ? 'selected' : ''}>${t('optionLow')} (€${data ? data.marginPerUnit.min : '0'})</option>
                            <option value="avg" ${line.marginLevel === 'avg' ? 'selected' : ''}>${t('optionAvg')} (€${data ? data.marginPerUnit.avg : '0'})</option>
                            <option value="max" ${line.marginLevel === 'max' ? 'selected' : ''}>${t('optionHigh')} (€${data ? data.marginPerUnit.max : '0'})</option>
                            <option value="custom" ${line.marginLevel === 'custom' ? 'selected' : ''}>${t('optionCustom')}</option>
                        </select>
                        ${line.marginLevel === 'custom' ? `<input type="number" class="line-input" style="margin-top:5px;" value="${line.customMargin || ''}" oninput="plantData[${p}].lines[${index}].customMargin=parseFloat(this.value); calculate();" placeholder="Marge/st">` : ''}
                    </td>
                    <td>
                        <select class="line-select" onchange="updateLineModel(${p}, ${index}, this.value)">
                            <option value="demand" ${line.calcModel === 'demand' ? 'selected' : ''}>${t('modelDemand')}</option>
                            <option value="cost" ${line.calcModel === 'cost' ? 'selected' : ''}>${t('modelCost')}</option>
                        </select>
                    </td>
                    <td>
                        <select class="line-select" onchange="plantData[${p}].lines[${index}].shifts=parseInt(this.value); calculate();">
                            ${[1,2,3,4,5].map(s => `<option value="${s}" ${line.shifts === s ? 'selected' : ''}>${s}</option>`).join('')}
                        </select>
                    </td>
                    <td class="added-value-cell">${formatCurrency(currentOutput * currentMargin)}</td>
                    <td>
                        <div class="percentage-input-wrapper">
                            <input type="number" class="line-input oee-center" value="${displayOEE}" oninput="updateLineOEE(${p}, ${index}, this.value)" placeholder="0">
                            <span class="pct-symbol">%</span>
                        </div>
                    </td>
                    <td style="text-align: right;">
                        <button class="btn-remove-line" onclick="removeLine(${p}, ${index})" ${plantData[p].lines.length <= 1 ? 'disabled' : ''}>&times;</button>
                    </td>
                </tr>`;
        });
        tableHTML += `</tbody></table></div><button class="btn btn-primary" style="margin-top: 15px;" onclick="addLine(${p})">${t('addLineBtn')}</button>`;
        content.innerHTML = tableHTML;
        container.appendChild(content);
    }
}

function addLine(p) { plantData[p].lines.push({ shifts: 3, outputLevel: 'avg', marginLevel: 'avg', name: '', calcModel: 'demand', currentOEE: null, situation: 'blueUpgrade' }); renderPlantContent(); calculate(); }
function removeLine(p, i) { if (plantData[p].lines.length > 1) { plantData[p].lines.splice(i, 1); renderPlantContent(); calculate(); } }
function updateLineName(p, i, v) { plantData[p].lines[i].name = v; }
function updateLineOutput(p, i, l) { plantData[p].lines[i].outputLevel = l; renderPlantContent(); calculate(); }
function updateLineMargin(p, i, l) { plantData[p].lines[i].marginLevel = l; renderPlantContent(); calculate(); }
function updateLineModel(p, i, v) { plantData[p].lines[i].calcModel = v; calculate(); }
function updateLineOEE(p, i, v) { const pct = parseFloat(v); plantData[p].lines[i].currentOEE = (pct >= 0 && pct <= 100) ? pct / 100 : null; calculate(); }

// ==========================================
// CALCULATE
// ==========================================

// Add this helper function to your script to fix the missing graph issue
function findBreakEvenMonth(annualBenefit, investment, maintenance) {
    let cumulativeBenefit = 0;
    let cumulativeCost = investment;
    
    // Check up to 120 months (10 years)
    for (let m = 1; m <= 120; m++) {
        let yearNum = Math.ceil(m / 12);
        // Apply ramp-up logic: Year 1 = 33%, Year 2 = 67%, Year 3+ = 100%
        let monthlyBenefit = (annualBenefit * (yearNum <= 3 ? (yearNum / 3) : 1)) / 12;
        cumulativeBenefit += monthlyBenefit;
        cumulativeCost += (maintenance / 12);

        if (cumulativeBenefit >= cumulativeCost) {
            return m < 12 ? `${m} ${t('months')}` : `${(m / 12).toFixed(1)} ${t('yearLabel').toLowerCase()}`;
        }
    }
    return t('overMonths');
}

function calculate() {
    const sector = document.getElementById('sector').value;
    const fixedFee = parseFloat(document.getElementById('fixedFee').value) || 0;
    const variableCost = parseFloat(document.getElementById('variableCost').value) || 0;
    const internalCost = parseFloat(document.getElementById('internalCost').value) || 0;
    const totalFixedCost = fixedFee + internalCost;

    if (!sector || !sectorData[sector]) {
        document.getElementById('placeholderCard').style.display = 'block';
        document.getElementById('scenarioCard').style.display = 'none';
        document.getElementById('breakEvenCard').style.display = 'none';
        document.getElementById('calcBreakdownCard').style.display = 'none';
        document.getElementById('exportBtn').style.display = 'none';
        return;
    }

    document.getElementById('placeholderCard').style.display = 'none';
    document.getElementById('scenarioCard').style.display = 'block';
    document.getElementById('breakEvenCard').style.display = 'block';
    document.getElementById('calcBreakdownCard').style.display = 'block';
    document.getElementById('exportBtn').style.display = 'inline-flex';

    const data = sectorData[sector];
    const scenarios = ['conservative', 'expected', 'optimistic', 'aangepast'];
    const results = {};
    const breakdownRows = [];
    let totalLinesCount = 0;

    for (const scenario of scenarios) {
        let totalAnnual = 0;
        let lineCounter = 0;
        const scenarioImproves = [];

        for (let p = 1; p <= numPlants; p++) {
            for (const line of plantData[p].lines) {
                lineCounter++;
                if (scenario === 'expected') totalLinesCount++;
                
                const hours = workHours[line.shifts.toString()] || 2000;
                
                // Use custom values if "Handmatig" is selected, otherwise use benchmark
                const output = line.outputLevel === 'custom' ? (line.customOutput || 0) : data.outputPerHour[line.outputLevel || 'avg'];
                const margin = line.marginLevel === 'custom' ? (line.customMargin || 0) : data.marginPerUnit[line.marginLevel || 'avg'];
                
                const oeeStart = line.currentOEE !== null ? line.currentOEE : data.oeeStart;
                
                let improvement;
                if (scenario === 'aangepast') {
                    const customInput = document.getElementById('customOEEInput');
                    improvement = (customInput && customInput.value !== "") ? parseFloat(customInput.value.replace(',', '.')) / 100 : 0;
                } else {
                    improvement = line.situation === 'noOEE' ? data.oeeNothingToT4A[scenario] : data.oeeBlueToT4A[scenario];
                }
                scenarioImproves.push(improvement);

                const costFactor = line.calcModel === 'cost' ? { conservative: 0.2, expected: 0.3, optimistic: 0.4, aangepast: 0.3 }[scenario] : 1;
                const annual = (output * margin) * improvement * hours * costFactor;
                totalAnnual += annual;

                if (scenario === selectedScenario) {
                    breakdownRows.push({ lineName: line.name || (t('calcBreakdownLine') + ' ' + lineCounter), hours, oeeIncrease: improvement, currentOEE: oeeStart, addedValue: output * margin, model: line.calcModel, costFactor, annual });
                }
            }
        }
        results[scenario] = { annual: totalAnnual, minImp: Math.min(...scenarioImproves), maxImp: Math.max(...scenarioImproves) };
    }

    document.getElementById('totalLinesDisplay').textContent = totalLinesCount;
    document.getElementById('totalPlantsDisplay').textContent = numPlants;

    for (const scenario of scenarios) {
        const id = scenario === 'aangepast' ? 'custom' : scenario;
        const annual = results[scenario].annual;
        document.getElementById(id + 'ThreeYear').textContent = formatCurrency(annual * 2);
        document.getElementById(id + 'Year1').textContent = formatCurrency(annual * (1/3));
        document.getElementById(id + 'Year2').textContent = formatCurrency(annual * (2/3));
        document.getElementById(id + 'Year3').textContent = formatCurrency(annual);
        
        if (scenario !== 'aangepast') {
            const oeeEl = document.getElementById(id + 'OEE');
            oeeEl.textContent = results[scenario].minImp === results[scenario].maxImp 
                ? `+${formatPercentage(results[scenario].minImp)}` 
                : `+${formatPercentage(results[scenario].minImp)} - ${formatPercentage(results[scenario].maxImp)}`;
        }
    }

    renderCalcBreakdown(breakdownRows, results[selectedScenario].annual);
    
    // --- BADGE & GRAPH LOGIC ---
    const breakEvenResult = findBreakEvenMonth(results[selectedScenario].annual, totalFixedCost, variableCost);
    const badge = document.getElementById('breakEvenBadge');
    
    const yearDisplay = document.getElementById('breakEvenYear');
    if (yearDisplay) yearDisplay.textContent = breakEvenResult;

    if (badge) {
        if (breakEvenResult === t('overMonths')) {
            badge.classList.remove('success');
            badge.classList.add('warning');
        } else {
            badge.classList.remove('warning');
            badge.classList.add('success');
        }
    }

    // This renders the visual lines in the canvas
    renderGraph(calculateBreakEven(results[selectedScenario].annual, totalFixedCost, variableCost));
}

function renderCalcBreakdown(rows, totalAnnual) {
    const container = document.getElementById('calcBreakdownContent');
    
    // Bijgewerkte tabel met alleen de relevante kolommen voor de nieuwe som
    let html = `
        <div class="calc-breakdown-formula">${t('calcBreakdownFormula')}</div>
        <table class="calc-breakdown-table">
            <thead>
                <tr>
                    <th>${t('calcBreakdownLine')}</th>
                    <th>${t('calcBreakdownHours')}</th>
                    <th>${t('calcBreakdownOEEImpr')}</th>
                    <th>${t('calcBreakdownValueHr')}</th>
                    <th>${t('calcBreakdownModel')}</th>
                    <th>${t('calcBreakdownAnnual')}</th>
                </tr>
            </thead>
            <tbody>`;
            
    rows.forEach(row => { 
        html += `
            <tr>
                <td class="line-number">${row.lineName}</td>
                <td>${new Intl.NumberFormat('nl-NL').format(row.hours)}</td>
                <td>+${formatPercentage(row.oeeIncrease)}</td>
                <td>${formatCurrency(row.addedValue)}</td>
                <td>
                    ${t('model' + row.model.charAt(0).toUpperCase() + row.model.slice(1))}
                    ${row.costFactor < 1 ? ' (' + Math.round(row.costFactor * 100) + '%)' : ''}
                </td>
                <td class="annual-value">${formatCurrency(row.annual)}</td>
            </tr>`; 
    });
    
    html += `
            </tbody>
            <tfoot>
                <tr class="calc-breakdown-total">
                    <td colspan="5">${t('calcBreakdownTotal')}</td>
                    <td class="annual-value">${formatCurrency(totalAnnual)}</td>
                </tr>
            </tfoot>
        </table>`;
        
    container.innerHTML = html;
}

function calculateBreakEven(annualBenefit, fixedFee, variableCost) {
    let yearData = [{ year: 0, cumulativeBenefit: 0, cumulativeCost: fixedFee }];
    let cumulativeBenefit = 0, cumulativeCost = fixedFee;
    for (let year = 1; year <= 10; year++) {
        cumulativeBenefit += annualBenefit * (year <= 3 ? year / 3 : 1);
        cumulativeCost += variableCost;
        yearData.push({ year, cumulativeBenefit, cumulativeCost });
        if (cumulativeBenefit >= cumulativeCost && year >= 5) break;
    }
    return yearData;
}

function renderGraph(yearData) {
    const canvas = document.getElementById('breakEvenCanvas');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const padding = { top: 30, right: 30, bottom: 50, left: 80 };
    const graphWidth = rect.width - padding.left - padding.right;
    const graphHeight = rect.height - padding.top - padding.bottom;
    const last = yearData[yearData.length - 1];
    const maxVal = Math.max(...yearData.map(d => Math.max(d.cumulativeBenefit, d.cumulativeCost)));
    const xScale = (y) => padding.left + (y / last.year) * graphWidth;
    const yScale = (v) => padding.top + graphHeight - (v / maxVal) * graphHeight;

    ctx.clearRect(0,0, rect.width, rect.height);
    ctx.strokeStyle = '#e5e7eb'; ctx.font = '11px Inter';
    for (let i = 0; i <= 5; i++) {
        let y = padding.top + (i/5) * graphHeight;
        ctx.beginPath(); ctx.moveTo(padding.left, y); ctx.lineTo(rect.width-padding.right, y); ctx.stroke();
        ctx.fillStyle = '#64748b'; ctx.textAlign = 'right'; ctx.fillText(formatCurrency(maxVal * (1 - i/5)), padding.left-10, y+4);
    }
    for (let y = 1; y <= last.year; y++) {
        let x = xScale(y); ctx.textAlign = 'center'; ctx.fillText(t('yearLabel') + ' ' + y, x, rect.height-padding.bottom+20);
    }
    ctx.beginPath(); ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 3;
    yearData.forEach((d, i) => i === 0 ? ctx.moveTo(xScale(d.year), yScale(d.cumulativeCost)) : ctx.lineTo(xScale(d.year), yScale(d.cumulativeCost)));
    ctx.stroke();
    ctx.beginPath(); ctx.strokeStyle = '#10b981';
    yearData.forEach((d, i) => i === 0 ? ctx.moveTo(xScale(d.year), yScale(d.cumulativeBenefit)) : ctx.lineTo(xScale(d.year), yScale(d.cumulativeBenefit)));
    ctx.stroke();
}

function exportPDF() { window.print(); }

document.addEventListener('DOMContentLoaded', async () => {
    await loadSectorData();
    applyTranslations();
    initSearchableSelect();
    updatePlantTabs();
});