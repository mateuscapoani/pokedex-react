import './style.css'

export const Button = ({ type, onClick, primary, big, small, disabled, children }) => {

  const handleClick = (event) => {
    if (onClick)
      onClick(event)
    return
  }

  return (
    <button
      type={type ?? 'button'}
      className={`button__button button__${primary ? 'primary' : 'secondary'} ${disabled ? 'button__disabled' : ''} button__${big ? 'big' : small ? 'small' : 'regular'}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
