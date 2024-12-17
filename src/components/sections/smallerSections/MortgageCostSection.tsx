import { calculateMortgage } from "@/utils/calculateMortgage";
import { numberWithSpaces } from "@/utils/convertingFuncs";
import { decimalToComma } from "@/utils/decimalToComma";
import { MortgageInputType } from "@/utils/types/IMortgageTypes";
import CompareSVG from "@/public/assets/images/Compare.svg"
import Image from "next/image";

export default function MortgageCostSection({ mortgageInfo }: { mortgageInfo: MortgageInputType }) {
  const costPerMonth = calculateMortgage(mortgageInfo.loanAmount, mortgageInfo.mortgage_rate);
  const costWithSpaces = numberWithSpaces(costPerMonth);

  return (
    <>
      <h2 className="mt-16 text-2xl font-semibold">Din räntekostnad - {decimalToComma(mortgageInfo.mortgage_rate)}%</h2>
      <hr className="mt-4 mb-3" />
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <h2 className="font-extrabold text-5xl md:text-6xl mt-10 text-center">
          {`${costWithSpaces} kr / mån`}
        </h2>
        <Image className="h-[6.5rem] object-cover" alt="Comparing icon" src={CompareSVG} />
      </div>
    </>
  )
}