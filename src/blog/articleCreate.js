import React, {useCallback, useState} from "react";
import {articleService} from "../services";

export function ArticleCreate() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submit = useCallback(
    () => {
      articleService.create(title, body)
        .catch(err => alert("Could not create the article"))
        .finally(() => {
          setBody('')
          setTitle('')
        })
    },
    [title, body]
  )

  return (
    <div>
      <h4>Create new article</h4>
      <input placeholder="title" value={title} onChange={event => setTitle(event.target.value)}/>
      <br/>
      <textarea placeholder="content" cols="90" rows="10" value={body} onChange={event => setBody(event.target.value)}/>
      <br/>
      <button onClick={submit}>Create</button>
    </div>
  )
}