import React, { useEffect, useState } from 'react'
import { getAddsaleById } from '../../../api/troca-rapida-api'

export const List = () => {
  const [adds, setAdds] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAdds = async () => {
      try {
        const addsData = await getAddsaleById(4)
        console.log('addsData:', addsData)

        // Garante que addsData seja uma array, mesmo que tenha apenas um elemento
        const addsArray = Array.isArray(addsData) ? addsData : [addsData]

        setAdds(addsArray)
      } catch (error) {
        console.error('Erro ao obter os anúncios:', error.message)
        setError('Erro ao carregar os anúncios. Tente novamente mais tarde.')
      } finally {
        setLoading(false)
      }
    }

    fetchAdds()
  }, [])

  if (loading) {
    return <p>Carregando anúncios...</p>
  }

  if (error) {
    return <p>{error}</p>
  }
  return (
    <div>
      <h2>Anúncios Disponíveis</h2>
      <ul>
        {Array.isArray(adds) ? (
          adds.map((add) => (
            <li key={add.id}>
              <h3>{add.title}</h3>
              {add.description && <p>{add.description}</p>}
              {add.price && <p>Preço: R$ {add.price}</p>}
              {add.address && <p>{add.address}</p>}
              {/* Adicione outras verificações conforme necessário */}
            </li>
          ))
        ) : (
          <p>Nenhum anúncio disponível.</p>
        )}
      </ul>
    </div>
  )
}
