export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_FALSE':
      return {
        isEstimating: false,
        gasCostFormatted: state.gasCostFormatted,
        gasLimit: state.gasLimit,
        gasPrice: state.gasPrice,
        gasMaxPrioFee: state.gasMaxPrioFee,
      }
    case 'SET_TRUE':
      return {
        isEstimating: true,
      }
    default:
      return state
  }
}
