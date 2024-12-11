import { calculateMortgage } from "@/utils/calculateMortgage";
import { numberWithSpaces } from "@/utils/convertingFuncs";
import { ComparisonType } from "@/utils/types/IMortgageTypes";
import Image from "next/image";

export default function Comparison({ bank_data, loanAmount, binding_period, mortgage_rate }: { bank_data: ComparisonType, loanAmount: number, binding_period: number, mortgage_rate: number }) {

  const currentRate = bank_data.rates.find((rate) => rate.binding_period_in_months === binding_period);



  if (!currentRate || currentRate.mortgage_rate < mortgage_rate) {
    return null;
  }

  const costPerMonth = calculateMortgage(loanAmount, currentRate.mortgage_rate);
  const cost = costPerMonth ? numberWithSpaces(costPerMonth) : "-";

  const rate_diff = currentRate.mortgage_rate - mortgage_rate;

  return (
    <li>
      <section className="py-3 px-4 bg-white border border-[#E8E8E8] min-w-[350px] shadow-lg">
        <article className="w-full">
          <div className="flex">
            <figure className="w-12 h-12 rounded-full bg-black overflow-hidden" aria-hidden="true">
              <Image width={100} height={100} src={bank_data.image_url} alt={`${bank_data.bank_name} logga`} className="w-full h-full" />
            </figure>
            <header className="max-w-28 ml-2">
              <h5 className="font-semibold text-sm">{bank_data.bank_name}</h5>
              <time className="text-[11px] text-[#616161] block" dateTime="2024-11-30">
                Senast uppdaterad {currentRate.last_updated}
              </time>
            </header>
            <aside className="flex justify-end flex-grow">
              <p className="text-lg text-[#808080]">{cost} kr / mån</p>
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
              <p className="m-0 -mt-1 text-[#D81B1B] text-sm">+{Math.ceil(rate_diff * 100) / 100}%</p>
            </section>
            <section className="w-2/4">
              <label className="font-extralight text-sm text-[#808080]">
                Bindningstid
              </label>
              <output className="block font-black text-4xl">
                {currentRate.binding_period_in_months} mån
              </output>
            </section>
          </footer>
        </article>
      </section>
    </li>
  )
}