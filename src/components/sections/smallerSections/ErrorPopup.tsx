import Image from "next/image";
import Link from "next/link";

export default function ErrorPopup() {
  return (
    <div className="w-screen h-screen bg-[#999999] absolute top-0 left-0 flex justify-center items-center">
      <div className="bg-[#F0F0F0] py-12 px-12 md:px-24 rounded-md text-center text-black flex flex-col items-center max-w-[95%]">
        <Image width={150} height={20} alt="SBAB logo" src={"https://www.sbab.se/assets/icons/logo/sbab-logo-2.svg"} />
        <p className="mt-5">Ett fel uppstod!
          <br />
          Vänligen kontakta kundtjänsten!
        </p>
        <Link className="mt-5 underline" target="_blank" href={"https://www.sbab.se/1/privat/kundservice/kontakt/kontakta_oss.html"}>Till kundtjänsten</Link>
      </div>
    </div>
  )
}