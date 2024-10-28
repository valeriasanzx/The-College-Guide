import { useEffect, useState } from "react"
import Nav from "./Nav"
import Article from "./Article"
import ArticleEntry from "./ArticleEntry"
import { SignIn, SignOut } from "./Auth"
import { useAuthentication } from "../services/authService"
import { fetchArticles, createArticle, deleteArticle, updateArticle } from "../services/articleService"
// import "../styles/App.css"
import "../styles/index.css"

export default function App() {
  const [articles, setArticles] = useState([])
  const [article, setArticle] = useState(null)
  const [mode, setMode] = useState('')
  const user = useAuthentication()

  // This is a trivial app, so just fetch all the articles only when
  // a user logs in. A real app would do pagination. Note that
  // "fetchArticles" is what gets the articles from the service and
  // then "setArticles" writes them into the React state.
  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles)
    }
  }, [user])

  // Update the "database" *then* update the internal React state. These
  // two steps are definitely necessary.
  function addArticle({ title, body }) {
    createArticle({ title, body, user }).then((article) => {
      setArticle(article)
      setArticles([article, ...articles])
      setMode('')
    })
  }

  function delArticle() {
    deleteArticle({ article }).then((id) => {
      setArticle(null)
      setArticles(articles.filter((item) => {return (item.id != id)}))
    })
  }

  function editArticle({ id, title, body, user }) {
    updateArticle({ id, title, body, user }).then((article) => {
      setArticle(article)
      const otherArticles = articles.filter((item) => {return (item.id != article.id)})
      setArticles([article, ...otherArticles])
      setMode('')
    })
  }

  return (
    <div className="App">
      <header className="text-white-900 text-xl">
        <p className="m-5">The College Guide</p>
      </header>
      <div>
        <h1>
          {user && <button onClick={() => setMode('add')}>New Post</button>}
          {article && (user.uid == article.author.id) && <button onClick={() => setMode('edit')}>Edit Post</button>}
          {article && (user.uid == article.author.id) && <button onClick={() => delArticle()}>Delete Post</button>}
          {!user ? <SignIn /> : <SignOut />}
        </h1>
        {user && <Nav articles={articles} setArticle={setArticle} />}
        {user && (mode != '') ? (
          <ArticleEntry mode={mode} addArticle={addArticle} editArticle={editArticle} article={(mode == 'edit' ? article : null)} user={user}/>
        ) : (
          <Article article={article} />
        )}
      </div>
    </div>
  )
}