import { Link } from 'react-router-dom'
import './style.css'

export const LinkTo = ({ to, children }) => {
  return (
    <Link to={to} className='link__link'>{children}</Link>
  )
}
