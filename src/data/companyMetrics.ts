export const companyMetrics = {
  // Core company metrics
  yearsOfExperience: 10,
  businessesServed: 200,
  projectsCompleted: 200,
  clientSatisfaction: 95,
  
  // Impact metrics
  revenueGenerated: 150, // in millions
  jobsCreated: 2500,
  marketsEntered: 30,
  
  // Expertise metrics
  industrySectors: 15,
  successRate: 95,
  clientRetention: 100,
  
  // Cambodia market metrics
  cambodiaGDPGrowth: 7.1,
  cambodiaPopulation: 16, // in millions
  cambodiaGDP: 28, // in billions
  cambodiaMobilePenetration: 75,
  
  // Case study examples
  caseStudies: {
    agriculture: {
      productionIncrease: 300,
      exportValue: 15, // in millions
      jobsCreated: 500,
      efficiency: 40
    },
    textiles: {
      efficiencyImprovement: 60,
      newContracts: 1.2, // in millions
      marketExpansion: 8,
      costReduction: 25
    },
    manufacturing: {
      productivityGain: 45,
      costSavings: 2.3, // in millions
      newMarkets: 15,
      qualityImprovement: 30
    }
  }
};

// Formatted metric helpers
export const formatMetric = (value: number, suffix: string = '') => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K${suffix}`;
  }
  return `${value}${suffix}`;
};

export const formatCurrency = (value: number) => {
  if (value >= 1) {
    return `$${value}M`;
  }
  return `$${(value * 1000).toFixed(0)}K`;
};

export const formatPercentage = (value: number) => `${value}%`;