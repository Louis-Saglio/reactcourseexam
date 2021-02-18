import React, {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {articleService} from "../services";

export function ArticleDetail() {
  const [article, setArticle] = useState({})
  const [loading, setLoading] = useState(false)
  const {id} = useParams()

  useEffect(
    () => {
      setLoading(true)
      articleService.detail(parseInt(id))
        .then(payload => setArticle(payload))
        .catch(err => alert(`Unable to fetch article ${id}`))
        .finally(() => setLoading(false))
    },
    [id]
  )

  const renderArticle = useCallback(
    () => (
      <div>
        <h4>Article detail</h4>
        <h5>{article.title}</h5>
        <p>{article.body}</p>
      </div>
    ),
    [article]
  )

  return loading ? <div>Loading ...</div> : renderArticle()
}