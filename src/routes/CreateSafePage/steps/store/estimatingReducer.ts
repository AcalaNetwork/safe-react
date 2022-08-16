export const initialState = { isEstimatingValue: true }
const estimatingReducer = (state, action) => {
  const { type } = action
  switch (type) {
    case 'SET_FALSE':
      //console.log('SET_FALSE', payload)
      return { ...state, isEstimatingValue: false }
    default:
      return { ...state }
  }
}
export default estimatingReducer
