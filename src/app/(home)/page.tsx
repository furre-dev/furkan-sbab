import CalculateSection from "@/components/sections/CalculateSection";
import HomeHeader from "@/components/sections/HomeHeader";


export default function Page() {
  return (
    <main className="min-h-screen max-w-[850px] mx-auto px-4 md:px-16 pb-24">
      {/* Detta är den översta sektionen på hemsidan (Rubrik, underrubrik och bild) */}
      <HomeHeader />
      {/* Detta är sektionen där vi har våra inputs och kalkylationer */}
      <CalculateSection />
    </main>
  );
}
