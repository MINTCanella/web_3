import { useBreed } from '../context/BreedContext'
import Carousel from './Carousel'
import BackButton from './BackButton'

export default function BreedDetails({ onBack }) {
    const { selectedBreed, breedImages } = useBreed()

    if (!selectedBreed) return <div>Loading breed details...</div>

    return (
        <section id="breed-details">
            <h2>Breed Details</h2>
            <div id="details" className="breed-details-container">
                <div className="breed-info">
                    <h3 id="breed-name">{selectedBreed.name}</h3>
                    <p id="breed-temperament">{selectedBreed.temperament}</p>
                </div>
                <Carousel images={breedImages} />
            </div>
            <BackButton onClick={onBack} />
        </section>
    )
}