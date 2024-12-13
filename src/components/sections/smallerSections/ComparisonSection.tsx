"use client";
import Comparison from "../Comparison";
import { ComparisonType } from "@/utils/types/IMortgageTypes";
import { MutableRefObject, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";


export default function ComparisonSection({ comparisons, loanAmount, binding_period, mortgage_rate }: {
  comparisons: ComparisonType[],
  loanAmount: number,
  binding_period: number,
  mortgage_rate: number
}) {
  const ref = useRef<HTMLUListElement>() as MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref);


  const banks_array = comparisons.map((bank_data) => {
    const currentRate = bank_data.rates.find((rate) => rate.binding_period_in_months === binding_period);

    //if currentRate is valid and if SBAB mortgage is lower than Banks mortgage, retrun the Comparison.
    return currentRate && currentRate.mortgage_rate > mortgage_rate ? (
      <Comparison
        key={bank_data.bank_name}
        currentRate={currentRate}
        bank_data={bank_data}
        loanAmount={loanAmount}
        mortgage_rate={mortgage_rate} />) : null
  }).filter((item) => item) as JSX.Element[]; //This filtering will remove any NULL elements, (as JSX.Element[]) to make TypeScript understand.

  return (
    <>
      <hr className="mt-10 mb-8 mt:my-4" />
      <h4 className="font-semibold text-2xl">Jämför vår ränta med andra banker</h4>
      <ul className="flex mt-6 space-x-2 [@media(min-width:450px)]:space-x-5 pb-4 overflow-x-scroll relative
        [&::-webkit-scrollbar]:h-2
        [&::-webkit-scrollbar]:z-40
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-thumb]:bg-gray-700
        [&::-webkit-scrollbar-thumb]:z-40
        [&::-webkit-scrollbar-track]:bg-transparent
        dark:[&::-webkit-scrollbar-track]:bg-transparent"
        {...events}
        ref={ref}
      >
        {banks_array.length > 0 ?
          banks_array :
          <p>
            Det finns inga banker att jämföra med för denna bindningstid. Välj en annan bindningstid för att se jämförelser.
          </p>
        }
      </ul>
    </>
  )
}