import './style.css'

export const Characteristics = ({ height, weight }) => {
  return (
    <div className='characteristics__content'>
      <div className='characteristics__column'>
        <span className='characteristics__name'>Height</span>
        <span className='characteristics__value'>{`${height} m`}</span>
      </div>
      <div className='characteristics__column'>
        <span className='characteristics__name'>Weight</span>
        <span className='characteristics__value'>{`${weight} kg`}</span>
      </div>
    </div>
  )
}
