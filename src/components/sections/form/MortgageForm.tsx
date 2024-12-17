import DefaultInput from "@/components/inputs/DefaultInput";
import { InputType } from "@/utils/inputTypes";
import { MortgageInputType } from "@/utils/types/IMortgageTypes";
import { Dispatch, SetStateAction } from "react";

export default function MortgageForm({ inputArray, setMortgageInfo }: { inputArray: InputType[], setMortgageInfo: Dispatch<SetStateAction<MortgageInputType>> }) {

  function handleLoanInput(amount: number) {
    //om "amount" är av typ NaN (Not a number) returnera NULL. Inte nödvändigt men en safety check.
    if (Number.isNaN(amount)) return null;

    setMortgageInfo((prev) => {
      return { ...prev, loanAmount: amount }
    })
  }

  function handleMortgageInput(mortgage: {
    binding_period_in_months: number;
    mortgage_rate: number;
  }) {
    setMortgageInfo((prev) => {
      return { ...prev, binding_period_in_months: mortgage.binding_period_in_months, mortgage_rate: mortgage.mortgage_rate }
    })
  }

  return (
    <form className="flex flex-col space-y-5">
      {inputArray.map((input, i) => {
        switch (input.type) {
          case "number":
            return <DefaultInput onChange={handleLoanInput} key={i} label={input.label} type="number" />;
          case "select":
            return <DefaultInput onChange={handleMortgageInput} key={i} label={input.label} type="select" options={input.options} />;
          default:
            return null;
        }
      })}
    </form>
  )
}