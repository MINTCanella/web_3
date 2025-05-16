import { useEffect, useState } from 'react'
import { useBreed } from '../context/BreedContext'

export default function BreedList({ onShowDetails }) {
    const [breeds, setBreeds] = useState([])
    const [loading, setLoading] = useState(true)
    const { fetchBreeds, fetchBreedDetails, setSelectedBreed } = useBreed()

    useEffect(() => {
        const loadBreeds = async () => {
            try {
                const data = await fetchBreeds()
                setBreeds(data)
            } catch (error) {
                console.error('Error fetching breeds:', error)
            } finally {
                setLoading(false)
            }
        }
        loadBreeds()
    }, [fetchBreeds])

    const handleBreedClick = async (breedId) => {
        try {
            await fetchBreedDetails(breedId)
            onShowDetails()
        } catch (error) {
            console.error('Error fetching breed details:', error)
        }
    }

    if (loading) return <div>Loading...</div>

    return (
        <section id="breed-list">
            <h2>Breeds</h2>
            <ul id="breeds">
                {breeds.map(breed => (
                    <li
                        key={breed.id}
                        onClick={() => handleBreedClick(breed.id)}
                    >
                        {breed.name}
                    </li>
                ))}
            </ul>
        </section>
    )
}