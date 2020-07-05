function getNews() {
  let articles = document.querySelector('[data-content="newstrending"]')
  articles = articles.getElementsByTagName('article')

  const result = []

  for (let i = 0; i < articles.length; i++) {
    const article = articles[i]
    const img = article.querySelector('img:not(.tracking)')
    const src = img.getAttribute('src')

    const a = article.getElementsByTagName('a')[0]
    const href = a.getAttribute('href')

    const title = article.innerText

    const content = ''

    result.push({
      src,
      href,
      title,
      content
    })
  }

  console.log(result)
}

getNews()
