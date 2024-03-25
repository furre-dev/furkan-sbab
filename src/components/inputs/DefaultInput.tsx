"use client"

import { numberWithSpaces, stringNumberToNumber } from "@/utils/convertingFuncs";
import { InputType } from "@/utils/inputTypes";
import { useState } from "react";
import { formatMonthsIntoYears } from "@/utils/formatMonthsIntoYears";


export default function DefaultInput(props: InputType) {
  const [numberInput, setNumberInput] = useState<{ actualValue: null | number; shownValue: null | string }>({
    actualValue: null,
    shownValue: null,
  })

  const handleNumberOnChange = (input: string) => {
    const inputToNumber = stringNumberToNumber(input)
    const shownNumber = numberWithSpaces(inputToNumber)

    //if shownNumber = NaN then render empty string
    //detta kommer att göra så att användare aldrig får NaN i input fältet och ingen användare kommer att kunna skriva in något annat än en bokstav.
    setNumberInput({ actualValue: inputToNumber, shownValue: shownNumber !== "NaN" ? shownNumber : "" })
  }


  if (props.type === "number") {
    return (
      <div className="flex flex-col gap-2">
        <label className="font-bold">{props.label}</label>
        <div className="w-full md:max-w-[15rem] relative">
          <input
            inputMode="numeric"
            maxLength={11}
            value={numberInput.shownValue ?? ""}
            onChange={(e) => {
              props.onChange && props.onChange(stringNumberToNumber(e.target.value));
              handleNumberOnChange(e.target.value)
            }}
            placeholder="2 000 000"
            className=" border border-gray-400 p-2 w-full" />
        </div>
      </div>)
  }

  if (props.type === "select") {
    return (
      <div className="flex flex-col gap-2">
        <label className="font-bold">{props.label}</label>
        <select
          onChange={(e) => props.onChange && props.onChange(props.options[e.target.selectedIndex - 1])}
          className="border border-gray-400 p-2 w-full md:max-w-[15rem]">
          <option
            selected
            disabled
            className="text-gray-600">Välj ett alternativ
          </option>
          {props.options.map((option, i) => {
            //This function will return "X mån" if X is less than 12, and "X år" if X is more than 12.
            const bindingPeriod = formatMonthsIntoYears(option.binding_period_in_months)
            return (
              <option key={i}>{`${bindingPeriod} - ${option.mortgage_rate}%`}</option>
            )
          })}
        </select>
      </div>)
  }
}