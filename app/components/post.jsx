import {Link} from '@remix-run/react'
import {formatearFecha} from '../utils/helpers'

function Post({post}) {

    const {titulo, imagen, contenido, publishedAt, url} = post

    const fecha = formatearFecha(publishedAt)

    //console.log(contenido[0].children[0].text)
    
    const parrafos = contenido.map(parrafo => {
        return parrafo.children[0].text
    })

  return (
    <article className="post">
        <img src={imagen.data.attributes.formats.small.url} alt={`Imagen ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className='fecha'>{fecha}</p>
            <p className='resumen'>{parrafos}</p>
            <Link
                className='enlace'
                to={`/posts/${url}`}
            >
                Leer Blog
            </Link>
        </div>
    </article>
  )
}

export default Post