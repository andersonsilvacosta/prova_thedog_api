import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { getcharacters } from './api/character.jsx'
import './App.css'
import api from './api/api.jsx'

function App() {
  const [characters, setCharacters] = useState([])
  const [breeds, setBreeds] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const [charactersResponse, breedsResponse] = await Promise.all([
          getcharacters(),
          api.get('/breeds'),
        ])
        setCharacters(charactersResponse)
        setBreeds(breedsResponse.data)
        setLoading(false)
      } catch (err) {
        console.error('Erro ao carregar dados:', err)
        setError('Não foi possível carregar os dados. Por favor, tente novamente mais tarde.')
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  function renderCharactersList() {
    if (loading) {
      return <p>Carregando...</p>
    }

    if (error) {
      return <p className="error">{error}</p>
    }

    if (characters.length === 0) {
      return <p>Nenhum personagem encontrado.</p>
    }

    return characters.map((dog) => (
      <div className="card char" key={dog.id}>
       <img src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`} alt={`Foto de ${dog.name}`} />  
        <h2>Galgo afegão</h2> 
        <div className="char-info">
          <span>
            <b>Espécie:</b> Canino
          </span>
          <span>
            <b>Gênero:</b> Macho
          </span>
        </div>
        <div className="lista secundaria">
          <b>Raças:</b>{' '}
          
          {dog.breeds?.length > 0
            ? dog.breeds.map((raca) => (
                <span key={raca.id}>{raca.name}</span>
              ))
            : <span>Raça não especificada</span>}
        </div>
        <h5>
          <b>Status:</b> Vivo {/* <-- Alteração aqui */}
        </h5>
      </div>
    ))
  }

  return (
    <>
      <Header />
  
      <main>
        <div className="lista-principal">{renderCharactersList()}</div>
      </main>
      <Footer />
    </>
  )
}

export default App