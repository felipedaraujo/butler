import { useEffect } from 'react'
import Spinner from './common/Spinner'

function Home() {
  useEffect(() => {
    // window.location.href =
    //   'https://chrome.google.com/webstore/detail/leapfrog-for-linkedin/cebjkdeabhiafpmbhjlbnpkpclomjgko'
  }, [])

  return (
    <div>
      <Spinner />
    </div>
  )
}

export default Home
