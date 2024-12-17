"use client"

import { numberWithSpaces, stringNumberToNumber } from "@/utils/stringsAndNumbers";
import { InputType } from "@/utils/inputTypes";
import { useState } from "react";
import { formatMonthsIntoYears } from "@/utils/formatMonthsIntoYears";
import { decimalToComma } from "@/utils/decimalToComma";


export default function DefaultInput(props: InputType) {
  const [numberInput, setNumberInput] = useState<{ actualValue: null | number; shownValue: null | string }>({
    actualValue: null,
    shownValue: null,
  })

  const numberInputOnChange = (input: string) => {
    const inputToNumber = stringNumberToNumber(input)
    const shownNumber = numberWithSpaces(inputToNumber, true)

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
              numberInputOnChange(e.target.value)
            }}
            placeholder="2 000 000"
            className=" border border-[#999999] p-2 w-full dark:bg-black" />
        </div>
      </div>)
  }

  if (props.type === "select") {
    return (
      <div className="flex flex-col gap-2">
        <label className="font-bold">{props.label}</label>
        <select
          onChange={(e) => props.onChange && props.onChange(props.options[e.target.selectedIndex - 1])}
          className="border border-[#999999] dark:bg-black p-2 w-full md:max-w-[15rem]">
          <option
            selected
            disabled
            className="text-gray-600">Välj ett alternativ
          </option>
          {props.options.map((option, i) => {
            //This function will return "X mån" if X is less than 12, and "X år" if X is more than 12.
            const bindingPeriod = formatMonthsIntoYears(option.binding_period_in_months)
            return (
              <option key={i}>{`${bindingPeriod} - ${decimalToComma(option.mortgage_rate)}%`}</option>
            )
          })}
        </select>
      </div>)
  }
}