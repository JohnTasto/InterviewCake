import { expect } from 'chai'

import highestProductOf3 from './03-HighestProductOf3'


describe('Highest Product Of 3', function() {
  it('should calculate the highest product', function() {
    expect(highestProductOf3([1, 10, -5, 1, -100])).to.equal(5000)
  })

  it('should be undefined if there are less than 3 numbers', function() {
    expect(highestProductOf3([1, 1])).to.be.undefined
  })
})
