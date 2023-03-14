import { Link } from 'react-router-dom'
import './style.css'

export const LinkTo = ({ to, children }) => {
  return (
    <div className='link__content'>
      <Link to={to} className='link__link'>{children}</Link>
    </div>
  )
}
