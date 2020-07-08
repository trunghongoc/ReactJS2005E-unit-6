const slide = document.getElementById('slide')
const imgWidth = 800
const totalImgs = slide.getElementsByTagName('img').length
const imgsWidth = imgWidth * totalImgs

const wrapper = slide.querySelector('.imgs')
wrapper.style.width = imgsWidth + 'px'

let left = 0
const maxPosition = (totalImgs - 1) * imgWidth

function prev() {
  left -= 800
  if (left < -maxPosition)
    left = 0
  wrapper.style.left = left + 'px'
}
function next() {
  left += 800
  if (left > 0)
    left = -maxPosition
  wrapper.style.left = left + 'px'
}

let loopSlide = setInterval(() => prev(), 1000)

function stopSlide() {
  console.log('stop')
  clearInterval(loopSlide)
}
function reRunSlide() {
  console.log('run')
  loopSlide = setInterval(() => prev(), 1000)
}
