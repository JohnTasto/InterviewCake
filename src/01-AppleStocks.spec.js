import { expect } from 'chai'

import getMaxProfit from './01-AppleStocks'


describe('Apple Stocks', function() {
  it('should pick the best trade', function() {
    expect(getMaxProfit([10, 7, 5, 8, 7, 11, 9])).to.equal(6)
  })

  it('should pick the smallest loss if stock prices fall all day', function() {
    expect(getMaxProfit([10, 8, 7, 5, 4, 2])).to.equal(-1)
  })

  it('should be undefined if there are less than two stock quotes', function() {
    expect(getMaxProfit([1])).to.be.undefined
  })
})
