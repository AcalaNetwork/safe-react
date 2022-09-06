import { createAction } from 'redux-actions'
import { PROVIDER_ACTIONS } from 'src/logic/wallets/store/actions'
import { ProviderNewSafeGasLimitPayload } from 'src/logic/wallets/store/reducer'

const updateSafeGasLimit = createAction<ProviderNewSafeGasLimitPayload>(PROVIDER_ACTIONS.GAS_LIMIT)

export default updateSafeGasLimit
