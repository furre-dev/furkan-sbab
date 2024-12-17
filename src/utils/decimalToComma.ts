export function decimalToComma(number: number | null) {
  if (!number) return null;

  let numberAsString = number.toString();

  //If number is a decimal, replace dots with comma
  return numberAsString.includes('.') ? numberAsString.replace('.', ',') : numberAsString;
}