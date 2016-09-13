export default ranges => {
  if (ranges.length < 1) return []
  ranges = ranges.sort((a,b) => a.startTime - b.startTime)
  let c = 0
  const condensed = [ranges[0]]
  ranges.slice(1).forEach(range => {
    if (range.startTime <= condensed[c].endTime) {
      condensed[c].endTime = Math.max(condensed[c].endTime, range.endTime)
    } else {
      condensed.push(range)
      c++
    }
  })
  return condensed
}
