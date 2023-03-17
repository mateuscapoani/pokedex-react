import './style.css'

export const Text = ({ big, small, children }) => {
  return (
    <span className={`text__${big ? 'big' : small ? 'small' : 'regular'}`}>
      {children}
    </span>
  )
}
