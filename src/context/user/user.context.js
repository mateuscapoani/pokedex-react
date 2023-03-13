import { createContext, useReducer, useContext } from 'react'
import { constants } from '../constant/constant'

const user = JSON.parse(localStorage.getItem(constants.localStorageKey)) || {}

const globalUserContext = createContext(user)
const dispatchGlobalUserStateContext = createContext(undefined)

export const GlobalUserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (_, newState) => {
      localStorage.setItem(constants.localStorageKey, JSON.stringify(newState))
      return { ...newState }
    },
    user
  )
  return (
    <globalUserContext.Provider value={state}>
      <dispatchGlobalUserStateContext.Provider value={dispatch}>
        {children}
      </dispatchGlobalUserStateContext.Provider>
    </globalUserContext.Provider>
  )
}

export const useGlobalUserState = () => [
  useContext(globalUserContext),
  useContext(dispatchGlobalUserStateContext)
]
