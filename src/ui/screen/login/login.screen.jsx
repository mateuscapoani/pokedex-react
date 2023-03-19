import { useState } from 'react'
import { Container, Form, Input, Button, LinkTo, Message } from '../../component'
import { constants, useGlobalUserState } from '../../../context'
import { useHistory } from 'react-router-dom'

export const LoginScreen = () => {
  const history = useHistory()
  const [_, setUser] = useGlobalUserState()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [erroMessage, setErroMessage] = useState('')

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
      <Message
        show={showError}
        message={erroMessage}
        error
        blockSpace
      />
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
        <Button type='submit' primary>Entrar</Button>
      </Form>
      <LinkTo to={constants.routes.register}>Registre-se</LinkTo>
    </Container>
  )
}
