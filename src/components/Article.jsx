export default function Article({ article }) {
  return (
    <article className="p-5 ">
      {!article ? (
        <p>No post selected.</p>
      ) : (
        <section >
          <h2 className="font-bold text-xl mb-2">{article.title}</h2>
          <p className="text-sm text-dark">{`${Date(article.date).substring(0, 24)}`}</p>
          <p className="text-sm text-dark">{`Author: ${article.author.name}`}</p>
          <p>{article.body}</p>
        </section>
      )}
    </article>
  )
}