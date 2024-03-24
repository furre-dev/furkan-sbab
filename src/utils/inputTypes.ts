export type InputType = TextInputType | SelectInputType

type TextInputType = {
  type: "number";
  label: string;
  onChange?: (amount: number) => void;
}

type SelectInputType = {
  type: "select";
  label: string;
  options: { binding_period_in_months: number; mortgage_rate: number }[];
  onChange?: (mortgageInfo: {
    binding_period_in_months: number;
    mortgage_rate: number;
  }) => void;
}