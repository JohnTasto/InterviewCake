export default numbers => {
  if (numbers.length < 3) return undefined
  let highest = Math.max(numbers[0], numbers[1])
  let lowest  = Math.min(numbers[0], numbers[1])
  let highestProductOf2 = numbers[0] * numbers[1]
  let lowestProductOf2  = highestProductOf2
  let highestProductOf3 = highestProductOf2 * numbers[2]
  numbers.slice(2).forEach(number => {
    highestProductOf3 = Math.max(highestProductOf3, highestProductOf2 * number, lowestProductOf2 * number)
    highestProductOf2 = Math.max(highestProductOf2, highest * number, lowest * number)
    lowestProductOf2  = Math.min(lowestProductOf2,  highest * number, lowest * number)
    highest = Math.max(highest, number)
    lowest  = Math.min(lowest,  number)
  })
  return highestProductOf3
}
