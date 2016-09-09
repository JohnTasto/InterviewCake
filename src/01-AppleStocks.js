export default stockPrices => {
  if (stockPrices.length < 2) return undefined
  else return stockPrices.slice(2).reduce((best, curr) => ({
    minSoFar: Math.min(best.minSoFar, curr),
    maxProfit: Math.max(best.maxProfit, curr - best.minSoFar),
  }), {
    minSoFar: Math.min(stockPrices[0], stockPrices[1]),
    maxProfit: stockPrices[1] - stockPrices[0],
  }).maxProfit
}
