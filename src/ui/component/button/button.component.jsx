import './style.css'

export const Button = ({ type, onClick, primary, children }) => {

  const handleClick = (event) => {
    if (onClick)
      onClick(event)
    return
  }

  return (
    <button
      type={type ?? 'button'}
      className={`button__button button__${primary ? 'primary' : 'secondary'}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
