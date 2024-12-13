//This function adds spaces in numbers, for example "2000" into "2 000" and so on
export function numberWithSpaces(input: number | null, allowClear?: boolean) {
  //If allowClear, it will return clear(null), else it will return the string "-".
  if (!input) return allowClear ? null : "-";

  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

//This function turns a string into a number
export function stringNumberToNumber(input: string) {
  return parseInt(input.replace(/\s/g, ''), 10)
}