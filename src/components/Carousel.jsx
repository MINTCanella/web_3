import { useCarousel } from '../hooks/useCarousel'

export default function Carousel({ images }) {
    const { currentImage, next, prev } = useCarousel(images)

    if (!images.length) return <div>No images available</div>

    return (
        <div className="carousel">
            <button className="prev-button" onClick={prev}>❮</button>
            <div className="carousel-image-container">
                <img src={currentImage} alt="Dog" className="carousel-image" />
            </div>
            <button className="next-button" onClick={next}>❯</button>
        </div>
    )
}