import { Carousel } from "react-bootstrap";


const LawnCarousel = ({imageSet}) => { //Takes an array of images as a prop
    return (
        <Carousel>
            {
                imageSet.map((image) => {
                    return <Carousel.Item className="carousel-item" key={image.id}>
                        <img
                            className="d-block w-50 "
                            src={image.imageSrc}
                            alt={image.imageAlt}
                        />
                    </Carousel.Item>
                })
            }
        </Carousel>
    )
}

export default LawnCarousel