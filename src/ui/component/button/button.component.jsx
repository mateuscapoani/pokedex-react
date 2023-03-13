export const Button = ({ type, onClick, children }) => {

  const handleClick = (event) => {
    if (onClick)
      onClick(event)
    return
  }

  return (
    <button
      type={type ?? 'button'}
      className='button__button'
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
