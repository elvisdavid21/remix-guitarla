import { getPost } from '../models/posts.server'
import { useLoaderData } from '@remix-run/react'
import { formatearFecha } from '../utils/helpers'
import styles from '../styles/postsUrl.css'

export function links() {
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export async function loader({params}) {
    const resultado = await getPost(params.postUrl)
    if(resultado.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Página no Encontrada'
        })
    }
    return resultado.data
}

function Posts() {

    const post = useLoaderData()
    const {titulo, imagen, publishedAt, contenido} = post[0].attributes

  return (
    <article className='contenedor'>
        <h3 className='titulo-blog'>{titulo}</h3>
        <div className='articulo-blog'>
            <img src={imagen.data.attributes.formats.small.url} alt={`Imagen ${titulo}`} />
            <div className='articulo'>
                <p className='texto-blog'>{contenido[0]?.children[0]?.text}</p>
                <p className='fecha'>Publicado el: <span>{formatearFecha(publishedAt)}</span></p>
            </div>
        </div>
    </article>
  )
}

export default Posts