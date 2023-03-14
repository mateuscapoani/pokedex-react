import { Button } from '../'
import './style.css'

export const UserInfo = ({ userLogged, username, handleLogout }) => {

  return (
    <div className='user-info__content'>
      {userLogged && <>
        <span className='user-info__username'>{username}</span>
        <Button onClick={handleLogout}>Sair</Button>
      </>}
    </div>
  )
}
