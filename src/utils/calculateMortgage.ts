export function costPerMonth(loanAmount: number | null, mortgage_rate: number | null) {
  if (!loanAmount || !mortgage_rate) {
    return null
  }

  // 4.9 => 0.049
  const mortgageInFloat = mortgage_rate / 100
  //
  const costPerYear = loanAmount * mortgageInFloat
  return Math.floor(costPerYear / 12)
}