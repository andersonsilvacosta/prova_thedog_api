import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { getcharacters } from '../api/character'
import './App.css'
import api from '../api/api'

function App() {
  const [conteudo, setConteudo] = useState(<p>Carregando...</p>)
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/The-Dog-Api')
        setBreeds(response.data)
      } catch (error) {
        console.error('Erro ao carregar raças:', error)
      }
    }

    async function transformaEmLista() {
      try {
        const todosDogs = await getcharacters()

        const lista = todosDogs.map(dog => (
          <div className='card char' key={dog.id}>
            <img src={dog.image} alt={`Foto de ${dog.name}`} />
            <h2>{dog.name}</h2>
            <div className='char-info'>
              <span><b>Espécie:</b> {dog.species}</span>
              <span><b>Gênero:</b> {dog.gender}</span>
            </div>
            <div className='lista secundaria'>
              <b>Raças:</b>{' '}
              {breeds.length > 0
                ? breeds.map((raca, index) => (
                    <span key={index}>{raca.name}</span>
                  ))
                : <span>Carregando raças...</span>
              }
            </div>
            <h5><b>Status:</b> {dog.status}</h5>
          </div>
        ))

        setConteudo(lista)
      } catch (error) {
        console.error('Erro ao carregar personagens:', error)
        setConteudo(<p>Erro ao carregar conteúdo.</p>)
      }
    }

    fetchData()
    transformaEmLista()
  }, [])

  return (
    <>
      <Header />
      <main>
        <div className='lista-principal'>
          {conteudo}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
