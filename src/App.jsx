import { Header } from './ui/component'
import { LoginScreen, MainScreen, RegisterScreen, NotFoundScreen, PokemonScreen } from './ui/screen'
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
      <OnlyPublicRoute path={constants.routes.register} exact>
        <Header />
        <RegisterScreen />
      </OnlyPublicRoute>
      <PrivateRoute path={constants.routes.main} exact>
        <Header />
        <MainScreen />
      </PrivateRoute>
      <PrivateRoute path={constants.routes.pokemon + '/:idPokemon'} exact>
        <Header />
        <PokemonScreen />
      </PrivateRoute>
      <Route path={constants.routes.all}>
        <Header />
        <NotFoundScreen />
      </Route>
    </Switch>
  )
}
