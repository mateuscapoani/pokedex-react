import { Container, Button } from '../'
import { constants, useGlobalUserState } from '../../../context'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'

export const Header = () => {
  const history = useHistory()
  const [user, setUser] = useGlobalUserState()

  const logout = (event) => {
    event.preventDefault()
    setUser({})
    history.push(constants.routes.login)
  }

  return (
    <header>
      <Container>
        <Link to={constants.routes.main}><img className='header__logo' src={logo} alt='Logo React Pokedex' /></Link>
        {user?.loggedUser && <span>{user.username}</span>}
        {user?.loggedUser && <Button onClick={logout}>Sair</Button>}
      </Container>
    </header>
  )
}
