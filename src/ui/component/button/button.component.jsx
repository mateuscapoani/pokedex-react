import './style.css'

export const Button = ({ type, onClick, primary, disabled, children }) => {

  const handleClick = (event) => {
    if (onClick)
      onClick(event)
    return
  }

  return (
    <button
      type={type ?? 'button'}
      className={`button__button button__${primary ? 'primary' : 'secondary'} ${disabled ? 'button__disabled' : ''}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
