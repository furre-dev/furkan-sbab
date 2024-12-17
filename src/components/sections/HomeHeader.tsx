import Image from "next/image";
import PercentageSVG from "@/public/assets/images/Percentage.svg"

export default function HomeHeader() {
  return (
    <section
      className="pt-16 md:pt-24 flex justify-between items-center">
      <div>
        <h1 className="font-extrabold text-4xl md:text-6xl">Din räntekostnad</h1>
        <h3 className="font-medium text-[1.3rem] md:text-[1.42rem] mt-4 md:mt-2 max-w-[30rem]">Här ser du både våra aktuella boräntor och din räknekostnad per månad</h3>
      </div>
      <Image className="hidden md:block" alt="Percentage icon" src={PercentageSVG} />
    </section>
  )
}