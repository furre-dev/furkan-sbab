export type MortgageInputType = {
    loanAmount: null | number,
    binding_period_in_months: null | number,
    mortgage_rate: null | number
}


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
    image_url: string;
}

export interface ComparisonRate {
    binding_period_in_months: number
    mortgage_rate: number
    last_updated: string
}