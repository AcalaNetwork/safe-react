import { EthAdapterTransaction } from '@gnosis.pm/safe-core-sdk-types'
import { getWeb3ReadOnly, getSDKWeb3ReadOnly } from 'src/logic/wallets/getWeb3'
import { CodedException, Errors } from 'src/logic/exceptions/CodedException'

export const getAcalaGasParamsDefault = async (): Promise<any> => {
  try {
    const web3Extended = await getWeb3ReadOnly().eth.extend({
      methods: [
        {
          name: 'getEthGas',
          call: 'eth_getEthGas',
        },
      ],
    })
    const gasParams = await web3Extended.getEthGas()
    return gasParams
  } catch (err) {
    throw new CodedException(Errors._612, err.message)
  }
}

export const getAcalaGasParamsMin = async (): Promise<any> => {
  try {
    //const web3 = getWeb3()
    //const blockNumber = await web3.eth.getBlockNumber()

    const web3Extended = await getWeb3ReadOnly().eth.extend({
      methods: [
        {
          name: 'getEthGas',
          call: 'eth_getEthGas',
          params: 1,
        },
      ],
    })

    const params = {
      gasLimit: 560000,
      storageLimit: 12288,
      //validUntil: blockNumber + 100,
    }

    const gasParams = await web3Extended.getEthGas(params)
    return gasParams
  } catch (err) {
    throw new CodedException(Errors._612, err.message)
  }
}

export const getAcalaGasParams = async (txConfig: EthAdapterTransaction): Promise<any> => {
  try {
    const ethAdapter = getSDKWeb3ReadOnly()
    //const web3 = getWeb3()
    const txGasLimit = await ethAdapter.estimateGas(txConfig)
    //const blockNumber = await web3.eth.getBlockNumber()

    const web3Extended = await getWeb3ReadOnly().eth.extend({
      methods: [
        {
          name: 'getEthGas',
          call: 'eth_getEthGas',
          params: 1,
        },
      ],
    })

    const params = {
      gasLimit: txGasLimit,
      storageLimit: 64100,
      //validUntil: blockNumber + 100,
    }

    const gasParams = await web3Extended.getEthGas(params)
    return gasParams
  } catch (err) {
    throw new CodedException(Errors._612, err.message)
  }
}
