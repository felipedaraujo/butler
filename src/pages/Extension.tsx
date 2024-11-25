import { useEffect } from 'react'
import Spinner from '../common/Spinner'

const Extension = () => {
  useEffect(() => {
    window.location.href =
      'https://chrome.google.com/webstore/detail/leapfrog-for-linkedin/cebjkdeabhiafpmbhjlbnpkpclomjgko'
  }, [])

  return (
    <div className="flex justify-center items-center pt-8">
      <Spinner />
    </div>
  )
}

export default Extension
