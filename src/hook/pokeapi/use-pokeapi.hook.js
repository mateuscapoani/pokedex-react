import { useAxios } from '../'
import { constants } from '../../context/'

export const usePokeapi = () => {
  const axiosInstance = useAxios(constants.endpoints.pokeapi)
  const getPokemonList = (page) => {
    return axiosInstance.get(`pokemon${page?.limit ? `?offset=${page.offset}&limit=${page.limit}` : ''}`)
  }

  const getPokemon = (id) => {
    return axiosInstance.get(`pokemon/${id}`)
  }

  return {
    getPokemonList,
    getPokemon
  }
}
