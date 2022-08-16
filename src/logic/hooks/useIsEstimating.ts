import { useState } from 'react'

export function useIsEstimating(): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const isEstimating = useState(true)
  console.log('isEstimating0=', isEstimating)
  return isEstimating
}
