import { types } from '../../../enum'
import './style.css'

export const Type = ({ type }) => {

  const getPokemonType = (type) => {
    const pokemonType = types[type]
    if (pokemonType)
      return pokemonType
    return types.unknown
  }

  const pokemonType = getPokemonType(type)

  const styledType = {
    backgroundColor: pokemonType.color
  }

  return (
    <div className='type__content' style={styledType}>
      {pokemonType.name}
    </div>
  )
}
