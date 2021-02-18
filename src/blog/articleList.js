import React, {useEffect, useState} from "react";
import {articleService} from "../services";
import {Link} from "react-router-dom";

export function ArticleList() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(
    () => {
      setLoading(true)
      articleService.list()
        .then(payload => setArticles(payload))
        .catch(err => alert("Unable to fetch articles"))
        .finally(() => setLoading(false))
    },
    []
  )

  return (
    <div>
      <h4>Article list</h4>
      {loading ? "loading ..." : ''}
      <ul>
        {articles.map(article => <li key={article.id}><Link to={`/blog/articles/${article.id}`}>{article.title}</Link>
        </li>)}
      </ul>
    </div>

  )
}