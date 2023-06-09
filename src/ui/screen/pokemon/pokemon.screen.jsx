import { Container, Image, Button, Loader, Type, Box, Name, Stat, Characteristics } from '../../component'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { usePokeapi } from '../../../hook'
import { captalize, parseHeight, parseWeight } from '../../../service'

export const PokemonScreen = () => {
  const { idPokemon } = useParams()
  const history = useHistory()
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState(null)
  const { getPokemon } = usePokeapi()

  useEffect(() => {
    const callAPI = async () => {
      const response = await getPokemon(idPokemon)
      setPokemon(response.data)
      setLoading(false)
    }
    callAPI()
  }, [])

  const goBack = () => {
    history.goBack()
  }

  return (
    <main>
      <Container>
        <Button
          primary
          onClick={goBack}
        >
          Voltar
        </Button>
        {loading ? <Loader show={loading} /> :
          pokemon &&
          <>
            <Box alignItens><Name>{captalize(pokemon.name)}</Name></Box>
            <Box alignItens><Image src={pokemon.sprites?.other['official-artwork']?.front_default} alt={pokemon.name} size='300' /></Box>
            <Box alignItens>{pokemon.types.map(type => <Type key={type.slot} type={type.type.name} />)}</Box>
            <Box alignItens><Characteristics height={parseHeight(pokemon.height)} weight={parseWeight(pokemon.weight)} /></Box>
            <Box alignItens>{pokemon.stats.map((stat, index) => <Stat key={index} stat={stat.stat.name} value={stat.base_stat} />)}</Box>
          </>}
      </Container>
    </main >
  )
}
