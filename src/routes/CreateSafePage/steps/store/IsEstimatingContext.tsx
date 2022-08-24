import { createContext } from 'react'

export const initialState = {
  isEstimating: true,
  gasCostFormatted: '> 0.001',
  gasLimit: 0,
  gasPrice: '0',
  gasMaxPrioFee: 0,
  dispatch: (() => undefined) as any,
}

export const IsEstimatingContext = createContext(initialState)
