import { useState } from 'react'
import { Container, Form, Input, Button, LinkTo, Message } from '../../component'
import { constants, useGlobalUserState } from '../../../context'
import { useHistory } from 'react-router-dom'

export const RegisterScreen = () => {
  const history = useHistory()
  const [_, setUser] = useGlobalUserState()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [erroMessage, setErroMessage] = useState('')

  const verifyPassword = () => {
    if (password !== confirmPassword) {
      setShowError(true)
      setErroMessage('A senha e a confirmação de senha devem ser iguais')
      return false
    }
    return true
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (verifyPassword()) {
      setUser({
        loggedUser: true,
        username: username,
        email: email
      })
      history.push(constants.routes.main)
    }
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
          label='Username'
          onChange={setUsername}
          value={username}
          type='text'
          required
        />
        <Input
          name='email'
          label='E-mail'
          onChange={setEmail}
          value={email}
          type='email'
          required
        />
        <Input
          name='password'
          label='Senha'
          onChange={setPassword}
          value={password}
          type='password'
          required
        />
        <Input
          name='confirmPassword'
          label='Confirme sua Senha'
          onChange={setConfirmPassword}
          value={confirmPassword}
          type='password'
          required
        />
        <Button type='submit' primary big>Registrar</Button>
      </Form>
      <LinkTo to={constants.routes.login}>Login</LinkTo>
    </Container>
  )
}
