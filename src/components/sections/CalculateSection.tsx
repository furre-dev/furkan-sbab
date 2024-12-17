import { getMortgageRates } from "@/utils/getMortgageRates";
import Calculations from "./smallerSections/CalculationSection";
import ErrorPopup from "./smallerSections/ErrorPopup";
import CalculationSection from "./smallerSections/CalculationSection";

export default async function CalculateSection() {
  const { mortgage_rates, comparisons, error } = await getMortgageRates();

  if (error) {
    return <ErrorPopup />
  }

  return (
    <section className="mt-10 md:mt-20 w-full">
      <h2 className="text-xl md:text-2xl font-semibold">Få fram din räntekostnad direkt</h2>
      <hr className="mt-4 mb-8 mt:my-4" />
      <CalculationSection inputArray={mortgage_rates} comparisons={comparisons} />
    </section>
  )
}