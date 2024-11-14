import { IMortgageTypes } from "../../IMortgageTypes";
import { InputType } from "./inputTypes";

const defaultError = { inputArray: null, error: { message: "Could not get mortgage rates", source: "getInputOptions()" } };

export async function getInputOptions() {
  try {
    const response = await fetch("https://developer.sbab.se/sandbox/api/interest-rates/2.0/mortgage-rates")
    const data: IMortgageTypes = await response.json()
    const mortgageOptions = data.mortgage_rates;

    //Error kommer att returnas ifall API responsen är okej men att vi inte får ut några mortgage_rates från API. Eller att mortgage_rates har längd av 0.
    if (!mortgageOptions) {
      return defaultError
    }

    //* Åtanke i inputFields är att få ett dynamiskt sätt att rendera inputs. T.ex om vi får inputs från ett CMS *
    //Om det behövs lägger du till en ny input här och med lite setup så har du en fin och fungerande input. TS hjälper dig också så att du alltid skapar den korrekt.
    const inputArray: InputType[] = [
      { label: "Önskat lånebelopp", type: "number" },
      { label: "Välj bindningstid", type: "select", options: mortgageOptions },
    ];

    return { inputArray: inputArray, error: null }
  } catch (err) {
    return defaultError
  }
}