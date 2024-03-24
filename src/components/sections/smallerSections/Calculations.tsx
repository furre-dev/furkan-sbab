"use client"
import DefaultInput from "@/components/inputs/DefaultInput";
import { costPerMonth } from "@/utils/calculateMortgage";
import { InputType } from "@/utils/inputTypes";
import { useState } from "react";
import CompareSVG from "@/public/assets/images/Compare.svg"
import Image from "next/image";

type MortgageType = {
  loanAmount: null | number,
  binding_period_in_months: null | number,
  mortgage_rate: null | number
}

export default function Calculations({ inputArray }: { inputArray: InputType[] }) {
  const [mortgageInfo, setMortgageInfo] = useState<MortgageType>({
    loanAmount: null,
    binding_period_in_months: null,
    mortgage_rate: null
  })

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
    <>
      <div className="flex flex-col space-y-5">
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
      </div>
      <h2 className="mt-16 text-2xl font-semibold">Din räntekostnad - {mortgageInfo.mortgage_rate}%</h2>
      <hr className="mt-4 mb-3" />
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <h2 className="font-extrabold text-5xl md:text-6xl mt-10">{`${costPerMonth(mortgageInfo.loanAmount, mortgageInfo.mortgage_rate) ?? "-"} kr / mån`}</h2>
        <Image className="h-[6.5rem] object-cover" alt="Comparing icon" src={CompareSVG} />
      </div>
    </>
  )
}