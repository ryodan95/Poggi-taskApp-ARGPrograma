import { Carousel } from "react-bootstrap"


const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
       <img className="d block w-100" style={{maxHeight: "500px", objectFit: "cover"}} src="https://images.unsplash.com/photo-1617529520608-42a0fe601be2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="slide1" />
        <Carousel.Caption>
          <h3>Primer Slide</h3>
          <p>Foto de Programación.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img className="d block w-100" style={{maxHeight: "500px", objectFit: "cover"}} src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="slide2" />
        <Carousel.Caption>
          <h3>Segundo slide</h3>
          <p>Programación y más Programacion.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img className="d block w-100" style={{maxHeight: "500px", objectFit: "cover"}} src="https://images.unsplash.com/photo-1587620931276-d97f425f62b9?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="slide3" />
        <Carousel.Caption>
          <h3>Tercer slide</h3>
          <p>
            Programación pero en una laptop negra.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHome