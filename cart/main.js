const cart = {}

function handleOnClickAddBtn(event) {
  // lấy ra thông tin của product
  const product = getProductInfo(event)

  // thêm product vào giỏ hàng
  add(product)

  // in ra giỏ hàng
  render()
}

function render() {
  const cartTag = document.getElementById('cart')

  let html = ''
  for (let key in cart) {
    if (cart.hasOwnProperty(key)) {
      const product = cart[key]
      html += `
        <div>
          <p>Tên sản phẩm: ${product.name}</p>
          <p>Số lượng: ${product.total}</p>

          <button onclick="increment('${product.id}')">+</button>
          <button onclick="decrement('${product.id}')">-</button>
          <button onclick="removeProduct('${product.id}')">Xóa khỏi giỏ hàng</button>
          <hr/>
        </div>
      `
    }
  }

  cartTag.innerHTML = html
}

function increment(productId) {
  const product = cart[productId]
  if (!product) return

  product.total += 1
  render()
}
function decrement(productId) {
  const product = cart[productId]
  if (!product) return

  const total = product.total - 1
  if (total === 0) {
    removeProduct(productId)
  } else {
    product.total = total
    render()
  }
}

function removeProduct(productId) {
  delete cart[productId]

  render()
}

function add(product) {
  const currentProductInCart = cart[product.id]
  if (currentProductInCart) { // nếu đã có trong giỏ hàng
    currentProductInCart.total += 1
  } else {
    product.total = 1
    cart[product.id] = product
  }
}

function getProductInfo(event) {
  const button = event.target
  const product = button.parentNode

  const productId = product.getAttribute('data-product-id')

  const nameTag = product.querySelector('.name')
  const name = nameTag.innerText

  const priceTag = product.querySelector('.price')
  let price = priceTag.innerText
  price = price.replace(' vnđ', '')
    .replace(/,/g, '')
  price = Number(price)

  return {
    id: productId,
    name,
    price
  }
}