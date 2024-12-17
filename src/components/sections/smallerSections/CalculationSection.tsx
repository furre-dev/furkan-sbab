"use client"
import { InputType } from "@/utils/inputTypes";
import { useState } from "react";
import { ComparisonType, MortgageInputType } from "@/utils/types/IMortgageTypes";
import ComparisonSection from "./ComparisonSection";
import MortgageForm from "../form/MortgageForm";
import MortgageCostSection from "./MortgageCostSection";

export default function CalculationSection({ inputArray, comparisons }: { inputArray: InputType[]; comparisons: ComparisonType[] | null }) {
  const [mortgageInfo, setMortgageInfo] = useState<MortgageInputType>({
    loanAmount: null,
    binding_period_in_months: null,
    mortgage_rate: null
  })

  return (
    <>
      <MortgageForm inputArray={inputArray} setMortgageInfo={setMortgageInfo} />
      <MortgageCostSection mortgageInfo={mortgageInfo} />
      {/*If we can't fetch comparisons, or if user has not selected every input, we don't show the comparisons. */}
      {comparisons &&
        mortgageInfo.loanAmount &&
        mortgageInfo.binding_period_in_months &&
        mortgageInfo.mortgage_rate &&
        (<ComparisonSection
          mortgage_rate={mortgageInfo.mortgage_rate}
          comparisons={comparisons}
          loanAmount={mortgageInfo.loanAmount}
          binding_period={mortgageInfo.binding_period_in_months}
        />
        )
      }
    </>
  )
}