let i = 0
const myInterval = setInterval(() => {
  console.log(i)
  i++
  if (i === 10)
    clearInterval(myInterval)
}, 100)
