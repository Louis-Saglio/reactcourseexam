import {useState, useEffect, useContext, useCallback} from "react"
import {Route, Switch, BrowserRouter, Link, useParams} from "react-router-dom"
import {articleService} from "./services";


function Login() {
  return (
    <div>Login</div>
  )
}

function Signup() {
  return (
    <div>Signup</div>
  )

}


function Auth() {
  return (
    <div>Auth</div>
  )
}


function ArticleList() {
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
        {articles.map(article => <li key={article.id}><Link to={`/blog/articles/${article.id}`}>{article.title}</Link></li>)}
      </ul>
    </div>

  )
}


function ArticleDetail() {
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


function ArticleCreate() {
  return (
    <div>Create new article</div>
  )
}


function Blog() {
  return (
    <div>
      <h3>Blog</h3>
      <ul>
        <li><Link to="/blog/articles/create">Write a new article</Link></li>
        <li><Link to="/blog/articles">Articles list</Link></li>
      </ul>
      <Switch>
        <Route path="/blog/articles/:id"><ArticleDetail/></Route>
        <Route path="/blog/articles"><ArticleList/></Route>
      </Switch>
    </div>
  )
}


function Settings() {
  return (
    <div>Settings</div>
  )
}


function AdminSettings() {
  return (
    <div>Admin settings</div>
  )
}


function Header() {
  return (
    <div>Header</div>
  )
}


function MainApp() {
  return (
    <div>
      <h2>Main App</h2>
      <ul>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
      <Switch>
        <Route path="/blog"><Blog/></Route>
        <Route path="/settings"><Settings/></Route>
        <Route path="/admin"><AdminSettings/></Route>
      </Switch>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/auth"><Auth/></Route>
          <Route path="/"><MainApp/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
