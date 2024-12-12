import { InputType } from "./inputTypes";
import { ComparisonType, IMortgageTypes } from "./types/IMortgageTypes";

const defaultError = { inputArray: null, comparisons: null, error: { message: "Could not get mortgage rates", source: "getInputOptions()" } };

export async function getInputOptions() {
  try {
    const sbab_mortgage_rates = await fetch("https://developer.sbab.se/sandbox/api/interest-rates/2.0/mortgage-rates");
    const sbab_response: IMortgageTypes | null = await sbab_mortgage_rates.json();

    const comparison_morgage_rates = await fetch("https://sbab-api.onrender.com");
    const comparison_response: ComparisonType[] | null = await comparison_morgage_rates.json();

    //Error kommer att returnas ifall API responsen är okej men att vi inte får ut några mortgage_rates från API. Eller att mortgage_rates har längd av 0.
    if (!sbab_response) {
      return defaultError
    }

    //* Åtanke i inputFields är att få ett dynamiskt sätt att rendera inputs. T.ex om vi får inputs från ett CMS *
    //Om det behövs lägger du till en ny input här och med lite setup så har du en fin och fungerande input. TS hjälper dig också så att du alltid skapar den korrekt.
    const inputArray: InputType[] = [
      { label: "Önskat lånebelopp", type: "number" },
      { label: "Välj bindningstid", type: "select", options: sbab_response.mortgage_rates },
    ];

    return { inputArray: inputArray, comparisons: comparison_response, error: null }
  } catch (err) {
    return defaultError
  }
}