export function formatMonthsIntoYears(binding_period_in_months: number) {
  const bindingPeriod = binding_period_in_months < 12 ? `${binding_period_in_months} mån` : `${Math.floor(binding_period_in_months / 12)} år`
  return bindingPeriod
}