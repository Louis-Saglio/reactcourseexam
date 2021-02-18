const articles = [
  {title: "first article", id: 0, body: "lorem ipsum dolor sit amet"},
  {title: "second article", id: 1, body: "lorem ipsum dolor sit amet"},
  {title: "third article", id: 2, body: "lorem ipsum dolor sit amet"},
  {title: "forth article", id: 3, body: "lorem ipsum dolor sit amet"},
  {title: "fifth article", id: 4, body: "lorem ipsum dolor sit amet"},
]


export const articleService = {
  list: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(articles)
      }, 1000 + Math.floor(Math.random() * 1000))
    })
  },

  detail: (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(articles.find(it => it.id === id))
      }, 1000 + Math.floor(Math.random() * 1000))
    })
  },

  create: (title, body) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        articles.push({title:title, body:body, id:articles.slice(-1)[0].id})
        resolve(true)
      }, 1000 + Math.floor(Math.random() * 1000))
    })
  },
}

export const authService = {
  login: (username, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(username === 'admin' && password === 'root' ? 'admin' : 'user')
      }, 1000 + Math.floor(Math.random() * 1000))
    })
  },
}