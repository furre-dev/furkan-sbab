export interface IMortgageTypes {
    mortgage_rates: MortgageRate[];
}

export interface MortgageRate {
    binding_period_in_months: number;
    mortgage_rate: number;
}

export interface ComparisonType {
    bank_name: string
    rates: ComparisonRate[]
}

export interface ComparisonRate {
    binding_period_in_months: number
    mortgage_rate: number
    last_updated: string
}