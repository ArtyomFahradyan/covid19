export type Data = {
  total_deaths: number;
  new_deaths: number;
  total_cases: number;
  new_cases: number;
};

export type CountryStat = {
  aged_65_older?: number;
  aged_70_older?: number;
  cardiovasc_death_rate?: number;
  continent: string;
  data: Data[];
  diabetes_prevalence?: number;
  extreme_poverty?: number;
  female_smokers?: number;
  gdp_per_capita?: number;
  hospital_beds_per_thousand?: number;
  human_development_index?: number;
  life_expectancy: number;
  location: string;
  male_smokers?: number;
  median_age?: number;
  population: number;
  population_density: number;
};

export type Statistic = Record<string, CountryStat>;
