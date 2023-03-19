import './style.css'

export const PokemonCard = ({ pokemonId, pokemonName, onClick }) => {

  const handleClick = () => {
    onClick(pokemonId)
  }

  return (
    <div onClick={handleClick} className='pokemon-card__content'>
      {pokemonName}
    </div>
  )
}
