export default numbers => {
  const length = numbers.length
  const products = []
  let product = 1

  for (let i = 0; i < length; ++i) {
    products[i] = product
    product *= numbers[i]
  }

  product = 1

  for (let i = length - 1; i >= 0; --i) {
    products[i] = products[i] * product
    product *= numbers[i]
  }

  return products
}
