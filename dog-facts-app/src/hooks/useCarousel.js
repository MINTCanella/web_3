import { useState } from 'react'

export function useCarousel(images) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const next = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    return {
        currentImage: images[currentIndex]?.url,
        next,
        prev,
        currentIndex,
        total: images.length
    }
}