import { InputType } from "@/utils/inputTypes";
import Comparison from "../Comparison";
import { ComparisonType } from "@/utils/types/IMortgageTypes";

export default function Comparisons({ comparisons, loanAmount, binding_period, mortgage_rate }: {
  comparisons: ComparisonType[],
  loanAmount: number,
  binding_period: number,
  mortgage_rate: number
}) {
  return (
    <>
      <hr className="mt-10 mb-8 mt:my-4" />
      <h4 className="font-semibold text-2xl">Jämför vår ränta med andra banker</h4>
      <ul className="flex mt-6 space-x-10">
        {comparisons.map((bank_data) => {
          return <Comparison bank_data={bank_data} loanAmount={loanAmount} binding_period={binding_period} mortgage_rate={mortgage_rate} />
        })}
      </ul>
    </>
  )
}