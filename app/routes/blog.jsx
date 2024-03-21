import {getPosts} from '../models/posts.server'
import { useLoaderData } from '@remix-run/react'
import Post from '../components/post'
import styles from '../styles/blog.css'

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader() {
  const resultado = await getPosts()
  return resultado.data
}

function Blog() {

  const posts = useLoaderData()

  return (
  <main className="contenedor contenido-blog">
    <h2 className="heading">El Mejor Blog para Músicos y Entusiastas</h2>
    <div className="blog">
        {posts.map(post => (
          <Post
            key={post?.id}
            post={post?.attributes}
          />
        ))}
    </div>
  </main>
  )
}

export default Blog