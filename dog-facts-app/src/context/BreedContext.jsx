import { createContext, useContext, useState } from 'react'

const BreedContext = createContext()

export function BreedProvider({ children }) {
    const [selectedBreed, setSelectedBreed] = useState(null)
    const [breedImages, setBreedImages] = useState([])
    const API_KEY = 'live_uZca6SEZEM1f1puAiGxk1z2HoExsj2DR276Iq01Dl3sDuP5XWq55gOkITWM6'

    const fetchBreeds = async () => {
        const response = await fetch('https://api.thedogapi.com/v1/breeds', {
            headers: { 'x-api-key': API_KEY }
        })
        return await response.json()
    }

    const fetchBreedDetails = async (breedId) => {
        const [details, images] = await Promise.all([
            fetch(`https://api.thedogapi.com/v1/breeds/${breedId}`, {
                headers: { 'x-api-key': API_KEY }
            }).then(r => r.json()),
            fetch(`https://api.thedogapi.com/v1/images/search?limit=6&breed_id=${breedId}`, {
                headers: { 'x-api-key': API_KEY }
            }).then(r => r.json())
        ])

        setSelectedBreed(details)
        setBreedImages(images)
        return { details, images }
    }

    return (
        <BreedContext.Provider value={{
            selectedBreed,
            breedImages,
            fetchBreeds,
            fetchBreedDetails,
            setSelectedBreed
        }}>
            {children}
        </BreedContext.Provider>
    )
}

export function useBreed() {
    return useContext(BreedContext)
}