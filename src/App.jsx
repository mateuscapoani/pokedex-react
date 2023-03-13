import { Header } from './ui/component'
import { LoginScreen, MainScreen, RegisterScreen, NotFoundScreen } from './ui/screen'
import { constants, useGlobalUserState } from './context'
import { Switch, Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ path, exact, children }) => {
  const [user] = useGlobalUserState()

  if (!user?.loggedUser) {
    return <Redirect to={constants.routes.login} />
  }

  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  )
}

const OnlyPublicRoute = ({ path, exact, children }) => {
  const [user] = useGlobalUserState()

  if (user?.loggedUser) {
    return <Redirect to={constants.routes.main} />
  }

  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  )
}

export const App = () => {
  return (
    <Switch>
      <OnlyPublicRoute path={constants.routes.login} exact>
        <Header />
        <LoginScreen />
      </OnlyPublicRoute>
      <PrivateRoute path={constants.routes.main} exact>
        <Header />
        <MainScreen />
      </PrivateRoute>
      <OnlyPublicRoute path={constants.routes.register}>
        <Header />
        <RegisterScreen />
      </OnlyPublicRoute>
      <Route path={constants.routes.all}>
        <Header />
        <NotFoundScreen />
      </Route>
    </Switch>
  )
}
