import { createContext, useReducer, useContext } from 'react'
import estimatingReducer, { initialState } from './estimatingReducer'

const IsEstimatingContext = createContext(initialState)

export const IsEstimatingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(estimatingReducer, initialState)
  const toggleEstimatingValue = () => {
    dispatch({ type: 'SET_FALSE' })
  }
  const isEstimating = { isEstimatingValue: state.value, toggleEstimatingValue }
  return <IsEstimatingContext.Provider value={isEstimating}>{children}</IsEstimatingContext.Provider>
}

const useEstimating = () => {
  const context = useContext(IsEstimatingContext)
  if (context === undefined) {
    throw new Error('Context is not defined')
  }
  return context
}

export default useEstimating
