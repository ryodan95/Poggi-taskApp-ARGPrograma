import { Carousel } from "react-bootstrap"


const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
       <img className="d block w-100" style={{maxHeight: "500px", objectFit: "cover"}} src="public/assets/images/concepto-collage-html-css-persona_23-2150062008.avif" alt="slide1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img className="d block w-100" style={{maxHeight: "500px", objectFit: "cover"}} src="public/assets/images/collage-fondo-programacion_23-2149901774.jpg" alt="slide2" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img className="d block w-100" style={{maxHeight: "500px", objectFit: "cover"}} src="public/assets/images/gente-negocios-organizando-varias-notas-adhesivas-texto-vidrio-oficina_662251-1531.avif" alt="slide3" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHome