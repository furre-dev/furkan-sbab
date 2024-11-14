export interface IMortgageTypes {
    mortgage_rates: MortgageRate[];
}

export interface MortgageRate {
    binding_period_in_months: number;
    mortgage_rate: number;
}
