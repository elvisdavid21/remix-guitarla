import ImagenNosotros from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
  return[
    {title: 'GuitarLA - Sobre Nosotros'},
    {description: 'Venta de guitarras, blog de musica'}
  ]
}

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: ImagenNosotros,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>
        <div className="contenido">
          <img src={ImagenNosotros} alt="Imagen Nosotros" />
          <div>
            <p>Fusce ex turpis, rutrum vitae fringilla et, tincidunt ullamcorper diam. Sed id efficitur arcu. Integer vel felis convallis, 
              mollis felis at, mattis nisi. Curabitur ornare erat ut velit pulvinar blandit. Praesent lectus justo, luctus at pellentesque et, 
              scelerisque a tortor. Etiam fringilla purus metus, dignissim pharetra dolor ultrices ut. Quisque pellentesque mi ut varius luctus. 
              Sed sit amet auctor lacus, ac convallis tortor.
            </p>
            <p>Fusce ex turpis, rutrum vitae fringilla et, tincidunt ullamcorper diam. Sed id efficitur arcu. Integer vel felis convallis, 
              mollis felis at, mattis nisi. Curabitur ornare erat ut velit pulvinar blandit. Praesent lectus justo, luctus at pellentesque et, 
              scelerisque a tortor. Etiam fringilla purus metus, dignissim pharetra dolor ultrices ut. Quisque pellentesque mi ut varius luctus. 
              Sed sit amet auctor lacus, ac convallis tortor.
            </p>
          </div>
        </div>
    </main>
  )
}

export default Nosotros