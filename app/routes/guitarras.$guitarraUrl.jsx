import {useLoaderData} from '@remix-run/react'
import {getGuitarra} from '../models/guitarras.server'
import styles from '../styles/guitarras.css'

export async function loader({ params }) {
  const {guitarraUrl} = params
  const guitarra = await getGuitarra(guitarraUrl)
  //si no existe la guitarra se lanza en error
  if(guitarra.data.length === 0) {
    throw new Response('',{
      status: 404,
      statusText: 'Guitarra No Encontrada',
    })
  }
  return guitarra
}
//Mi forma de mostrar el titulo 
// export function meta({params}) {
//   const title1 = params.guitarraUrl[0].toUpperCase(0)
//   const title2 = params.guitarraUrl.slice(1)
//   return[
//     {title: `GuitarLA - ${title1+title2}`},
//     {description: 'GuitarLA - Descripción detallada de cada guitarra'}
//   ]
// }

//Segunda forma de agregar el titulo mediante el {data} es parte de remix
//el segundo data del return es del json de strapi
//data se carga en vacio si no tiene algun objeto de guitarra que no existe asi que cuando se carga la paguina data es undefined en cado contrario si tiene info de las guitarras
export function meta({data}) {
  console.log(data)
  if(!data || Object.keys(data).length === 0) {
    return[
      {title: 'GuitarLA - Guitarra No Encontrada'},
      {description: 'GuitarLA - Guitarra No Encontrada'}
    ]
  }

  return[
    {title: `GuitarLA - ${data.data[0].attributes.nombre}`},
    {description: 'GuitarLA - Descripción detallada de cada guitarra'}
  ]
}

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Guitarras() {

    const guitarra = useLoaderData()
    const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes

  return (
    <main className='contenedor  guitarra'>
        <img className='imagen' src={imagen.data.attributes.formats.medium.url} alt={`Imagen ${nombre}`} />
        <div className='contenido'>
            <h3>{nombre}</h3>
            <p className='texto'>{descripcion[0].children[0].text}</p>
            <p className='precio'>${precio}</p>
        </div>
    </main>
  )
}

export default Guitarras