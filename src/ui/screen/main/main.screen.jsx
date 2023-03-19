import { Container, Button, Box, PokemonCard, Loader } from '../../component'
import { usePokeapi, useQuery } from '../../../hook'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { constants } from '../../../context'

const handlePage = (pageNum) => {
  const offset = (pageNum - 1) * constants.page.size
  return {
    offset: offset <= 0 ? 0 : offset,
    limit: constants.page.size
  }
}

export const MainScreen = () => {
  const query = useQuery()
  const history = useHistory()
  const [loading, setLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])
  const [sizePokemons, setSizePokemons] = useState(0)
  const [page, setPage] = useState(query.get(constants.page.name) ? parseInt(query.get(constants.page.name)) : 1)
  const { getPokemonList } = usePokeapi()

  const prevPageButtonDisabled = page <= 1
  const nextPageButtonDisabled = page > sizePokemons / constants.page.size

  useEffect(() => {
    const callAPI = async () => {
      try {
        const { data } = await getPokemonList(handlePage(page))
        setLoading(false)
        setPokemons(data.results)
        setSizePokemons(data.count)
      } catch (err) {
        console.error(err)
      }
    }

    const lastPage = Math.ceil(sizePokemons / constants.page.size)

    if (page < 1) {
      setPage(1)
      setLoading(true)
    } else if (sizePokemons > 0 && page > lastPage) {
      setPage(lastPage)
      setLoading(true)
    } else {
      callAPI()
    }

    history.push(`?${constants.page.name}=${page}`)
  }, [page])

  const captalizeName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  const prevPage = () => {
    setPage(page - 1)
    setLoading(true)
  }

  const nextPage = () => {
    setPage(page + 1)
    setLoading(true)
  }

  const pokemonDetails = (pokemonId) => {
    history.push(constants.routes.pokemon + `/${pokemonId}`)
  }

  return (
    <main>
      <Container>
        <Box alignItens>
          <Button onClick={prevPage} disabled={prevPageButtonDisabled} primary>Página Anterior</Button>
          <Button onClick={nextPage} disabled={nextPageButtonDisabled} primary>Próxima Página</Button>
        </Box>
        {loading ? <Loader show={loading} /> :
          pokemons.map(pokemon => {
            const pokemonId = pokemon.url.replace(new RegExp('.*' + 'api/v2/pokemon/'), '').slice(0, -1)
            return <PokemonCard
              key={pokemonId}
              pokemonId={pokemonId}
              pokemonName={captalizeName(pokemon.name)}
              onClick={pokemonDetails}
            />
          })}
      </Container>
    </main >
  )
}
