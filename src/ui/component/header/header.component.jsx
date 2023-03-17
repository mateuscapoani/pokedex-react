import { Container, UserInfo, Image } from '../'
import { constants, useGlobalUserState } from '../../../context'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import './style.css'

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
        <div className='header__content'>
          <Link to={constants.routes.main}><Image src={logo} alt='Logo React Pokedex' size='100' /></Link>
          <UserInfo
            userLogged={user?.loggedUser}
            username={user.username}
            handleLogout={logout}
          />
        </div>
      </Container>
    </header>
  )
}
