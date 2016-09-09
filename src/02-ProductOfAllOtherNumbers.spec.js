import { expect } from 'chai'

import getProducts from './02-ProductOfAllOtherNumbers'


describe('Product Of All Other Numbers', function() {
  it('should calculate the correct products', function() {
    expect(getProducts([1, 2, 6, 5, 9])).to.deep.equal([540, 270, 90, 108, 60])
  })

  it('should work even if the input has zeros', function() {
    expect(getProducts([1, 0, 6, 5, 9])).to.deep.equal([0, 270, 0, 0, 0])
  })

  it('should return [] if passed an empty array', function() {
    expect(getProducts([])).to.deep.equal([])
  })

  it('should return [1] if passed an array with a single element', function() {
    expect(getProducts([0])).to.deep.equal([1])
  })
})
