import { Container, Image } from '../../component'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { usePokeapi } from '../../../hook'

export const PokemonScreen = () => {
  const { idPokemon } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const { getPokemon } = usePokeapi()

  useEffect(() => {
    const callAPI = async () => {
      const response = await getPokemon(idPokemon)
      setPokemon(response.data)
    }
    callAPI()
  }, [])
  return (
    <main>
      <Container>
        {pokemon &&
          <>
            <span>{pokemon.name}</span>
            <Image src={pokemon.sprites?.other['official-artwork']?.front_default} alt={pokemon.name} />
          </>}
      </Container>
    </main>
  )
}
