import { constants, useGlobalUserState } from '../../../context'
import { useHistory } from 'react-router-dom'

export const MainScreen = () => {
  const history = useHistory()
  const [user, setUser] = useGlobalUserState()

  const handleLogout = () => {
    setUser({})
    history.push(constants.routes.main)
  }

  return (
    <main>
      main screen{user?.username ? ` - ${user.username}` : ''}
      <button onClick={handleLogout}>Logout</button>
    </main>
  )
}
