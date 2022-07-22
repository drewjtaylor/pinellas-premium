import LawnCarousel from "../components/LawnCarousel";
import { carouselImages } from '../demoData/carouselImages';

const Homepage = () => {
  return (
    <LawnCarousel imageSet={carouselImages}/>
  )
}

export default Homepage