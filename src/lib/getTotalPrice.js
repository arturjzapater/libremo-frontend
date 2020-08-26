const addPrice = (acc, item) => acc + item.price * item.quantity
const getTotalPrice = products => products.reduce(addPrice, 0)

export default getTotalPrice
