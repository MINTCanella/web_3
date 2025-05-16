import { useState } from 'react'
import Header from './components/Header'
import BreedList from './components/BreedList'
import BreedDetails from './components/BreedDetails'
import { BreedProvider } from './context/BreedContext'

function App() {
    const [showDetails, setShowDetails] = useState(false)

    return (
        <BreedProvider>
            <Header />
            <main>
                {!showDetails ? (
                    <BreedList onShowDetails={() => setShowDetails(true)} />
                ) : (
                    <BreedDetails onBack={() => setShowDetails(false)} />
                )}
            </main>
        </BreedProvider>
    )
}

export default App