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
        let find = articles.find(it => it.id === id);
        console.log(find)
        resolve(find)
      }, 1000 + Math.floor(Math.random() * 1000))
    })
  }
}