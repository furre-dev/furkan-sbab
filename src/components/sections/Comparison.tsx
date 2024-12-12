import { calculateMortgage } from "@/utils/calculateMortgage";
import { numberWithSpaces } from "@/utils/convertingFuncs";
import { formatMonthsIntoYears } from "@/utils/formatMonthsIntoYears";
import { ComparisonRate, ComparisonType } from "@/utils/types/IMortgageTypes";
import Image from "next/image";

export default function Comparison({ bank_data, currentRate, loanAmount, mortgage_rate }: { bank_data: ComparisonType, currentRate: ComparisonRate, loanAmount: number, mortgage_rate: number }) {

  const costPerMonth = calculateMortgage(loanAmount, currentRate.mortgage_rate);
  const cost = numberWithSpaces(costPerMonth);

  //percent difference between SBAB mortgage and the compared bank mortgage.
  const rate_diff = currentRate.mortgage_rate - mortgage_rate;

  return (
    <li className="pointer-events-none select-none min-w-[90%] [@media(min-width:450px)]:min-w-[350px]">
      <section className="py-3 px-4 bg-white border border-[#E8E8E8] w-full shadow-lg">
        <article className="w-full">
          <div className="flex">
            <figure className="min-w-12 h-12 rounded-full bg-black overflow-hidden" aria-hidden="true">
              <Image width={100} height={100} src={bank_data.image_url} alt={`${bank_data.bank_name} logga`} className="w-full h-full" />
            </figure>
            <header className="max-w-28 ml-2">
              <h5 className="font-semibold text-sm">{bank_data.bank_name}</h5>
              <time className="text-[11px] text-[#616161] block" dateTime="2024-11-30">
                Senast uppdaterad {currentRate.last_updated}
              </time>
            </header>
            <aside className="flex justify-end flex-grow text-right">
              <p className="text-base [@media(min-width:450px)]:text-lg text-[#808080]">{cost} kr / mån</p>
            </aside>
          </div>
          <footer className="flex justify-between mt-4">
            <section className="w-2/4">
              <label className="font-extralight text-sm text-[#808080]">
                Räntekostnad
              </label>
              <output className="block font-black text-4xl">
                {currentRate.mortgage_rate}%
              </output>
              <p className="m-0 -mt-1 text-[#D81B1B] text-sm font-black">+{Math.ceil(rate_diff * 100) / 100}%</p>
            </section>
            <section className="w-2/4">
              <label className="font-extralight text-sm text-[#808080]">
                Bindningstid
              </label>
              <output className="block font-black text-4xl">
                {formatMonthsIntoYears(currentRate.binding_period_in_months)}
              </output>
            </section>
          </footer>
        </article>
      </section>
    </li>
  )
}