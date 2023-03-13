import { useState } from 'react'
import { Container, Form, Input, Button } from '../../component'
import { constants, useGlobalUserState } from '../../../context'
import { Link, useHistory } from 'react-router-dom'

export const RegisterScreen = () => {
  const history = useHistory()
  const [_, setUser] = useGlobalUserState()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const verifyPassword = () => {
    return password === confirmPassword
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (verifyPassword) {
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
        <Button type='submit'>Registrar</Button>
      </Form>
      <Link to={constants.routes.login}>Login</Link>
    </Container>
  )
}
