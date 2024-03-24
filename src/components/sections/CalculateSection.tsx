import { getInputOptions } from "@/utils/getInputOptions";
import Calculations from "./smallerSections/Calculations";
import ErrorPopup from "./smallerSections/ErrorPopup";

export default async function CalculateSection() {
  const { inputArray, error } = await getInputOptions()

  if (error) {
    return <ErrorPopup />
  }

  return (
    <section className="mt-10 md:mt-20 w-full">
      <h2 className="text-xl md:text-2xl font-semibold">Få fram din räntekostnad direkt</h2>
      <hr className="mt-4 mb-8 mt:my-4" />
      <Calculations inputArray={inputArray} />
    </section>
  )
}