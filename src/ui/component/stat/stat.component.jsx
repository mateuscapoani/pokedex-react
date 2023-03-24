import { stats } from '../../../enum'
import './style.css'

export const Stat = ({ stat, value }) => {

  const pokemonStat = stats[stat]

  const styledStat = {
    backgroundColor: pokemonStat.color
  }

  return (
    <div className='stat__content' style={styledStat}>
      <span className='stat__name'>{pokemonStat.name}</span>
      <span className='stat__value'>{value}</span>
    </div>
  )
}
