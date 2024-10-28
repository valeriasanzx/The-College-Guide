import { useState } from "react"

export default function ArticleEntry({ mode, addArticle, editArticle, article, user }) {
  const [title, setTitle] = useState(article ? article.title : '')
  const [body, setBody] = useState(article ? article.body : '')
  const [error, setError] = useState(null)

  function submit(e) {
    setError(null)
    e.preventDefault()
    if (!title.trim() || !body.trim()) {
      setError("Both the title and body must be supplied")
    } else {
      const id = article.id
      switch (mode) {
        case 'add':
          addArticle({ title, body })
          break;
        case 'edit':
          editArticle({id, title, body, user })
          break;
      }
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        Title
        <input name='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        Body
        <textarea
          name='Body'
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        {mode == 'add' && <button type="submit">Create</button>}
        {mode == 'edit' && <button type="submit">Update</button>}
      </form>
    </div>
  )
}
