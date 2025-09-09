
import './App.css'
import { useEffect, useState } from 'react'
import { getcharacters } from '../../api/character'



function Thedog() {
  const [conteudo, setConteudo] = useState(<>Carregando</>)

  
  async function TransformaEmLista() {
    const todosDogs = await getcharacters()

    return todosDogs.map(dogs =>
      <div className='card char' key={dogs.id}>
        <img src={dogs.image} alt={`Foto de ${dogs.name}`} />
        <h2>{dogs.name}</h2>
        <div className='char-info'>
          <span><b>Especie:</b>{dogs.species}</span>
          <span><b>Gênero:</b>{dogs.gender}</span>
        </div>
        <div className='lista secundaria'>
          <b>Participações:</b>
          {

          }
        </div>
        <h5><b> Status: </b> {dogs.status} </h5>
      </div>
    )
  }
  useEffect(() => {
    async function carregar() {
      setConteudo(
        await TransformaEmLista())
    }
    carregar()

  }, [])

  return (
  
     

    <main>
        <div className='lista-principal'>
          {conteudo}
        </div>
      </main>
     

 

  )
}

export default Thedog
