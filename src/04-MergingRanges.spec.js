import { expect } from 'chai'

import mergeRanges from './04-MergingRanges'


describe('Merging Ranges', function() {
  it('should merge ranges correctly', function() {
    expect(mergeRanges([
      {startTime: 0,  endTime: 1},
      {startTime: 3,  endTime: 5},
      {startTime: 4,  endTime: 8},
      {startTime: 10, endTime: 12},
      {startTime: 9,  endTime: 10},
    ])).to.deep.equal([
      {startTime: 0, endTime: 1},
      {startTime: 3, endTime: 8},
      {startTime: 9, endTime: 12},
    ])
  })

  it('should work if a meeting starts at the same time another ends', function() {
    expect(mergeRanges([
      {startTime: 1, endTime: 2},
      {startTime: 2, endTime: 3},
    ])).to.deep.equal([
      {startTime: 1, endTime: 3},
    ])
  })

  it('should work if one meeting is completely overlaps another', function() {
    expect(mergeRanges([
      {startTime: 1, endTime: 5},
      {startTime: 2, endTime: 3},
    ])).to.deep.equal([
      {startTime: 1, endTime: 5},
    ])
  })

  it('should return an empty array if no ranges are specified', function() {
    expect(mergeRanges([])).to.deep.equal([])
  })
})
