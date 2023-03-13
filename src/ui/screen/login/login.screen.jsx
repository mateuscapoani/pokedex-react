import { useState } from 'react'
import { Container, Form, Input, Button } from '../../component'
import { constants, useGlobalUserState } from '../../../context'
import { Link, useHistory } from 'react-router-dom'

export const LoginScreen = () => {
  const history = useHistory()
  const [_, setUser] = useGlobalUserState()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setUser({
      loggedUser: true,
      username: username
    })
    history.push(constants.routes.main)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          name='username'
          label='Username ou E-mail'
          onChange={setUsername}
          value={username}
          type='text'
          required
        />
        <Input
          name='password'
          label='Password'
          onChange={setPassword}
          value={password}
          type='password'
          required
        />
        <Button type='submit'>Entrar</Button>
      </Form>
      <Link to={constants.routes.register}>Registre-se</Link>
    </Container>
  )
}
