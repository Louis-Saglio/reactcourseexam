import {Link, Route, Switch} from "react-router-dom";
import React from "react";
import {ArticleCreate} from "./articleCreate";
import {ArticleDetail} from "./articleDetail";
import {ArticleList} from "./articleList";

export function Blog() {
  return (
    <div>
      <h3>Blog</h3>
      <ul>
        <li><Link to="/blog/articles/create">Write a new article</Link></li>
        <li><Link to="/blog/articles">Articles list</Link></li>
      </ul>
      <Switch>
        <Route path="/blog/articles/create"><ArticleCreate/></Route>
        <Route path="/blog/articles/:id"><ArticleDetail/></Route>
        <Route path="/blog/articles"><ArticleList/></Route>
      </Switch>
    </div>
  )
}