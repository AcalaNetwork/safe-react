import { createContext } from 'react'

export const initialState = {
  isEstimating: true,
  gasCostFormatted: '> 0.001',
  gasLimit: 0, //FIELD_NEW_SAFE_GAS_LIMIT
  gasPrice: '0', //FIELD_NEW_SAFE_GAS_PRICE
  gasMaxPrioFee: 0, //FIELD_NEW_SAFE_GAS_MAX_PRIO_FEE
  dispatch: (() => undefined) as any,
}

export const IsEstimatingContext = createContext(initialState)
