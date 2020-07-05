function changeColorToGreen(event) {
    event.preventDefault()
    const a = event.target
    const color = a.style.color
    if (color === 'green')
        a.style.color = 'red'
    else
        a.style.color = 'green'

    // console.log(a.href)
    // const href = a.getAttribute('href')
    // console.log(href)
    console.log(a.innerText)
    // a.innerText = 'Dòng nội dung mới'
    a.innerHTML = '<div style="width: 50px; height: 50px; background: red;"></div>'
}


const news = [
    {
        src: '',
        href: '',
        title: ''
    },
]