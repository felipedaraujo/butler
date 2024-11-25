import { useEffect } from 'react'
import Spinner from '../common/Spinner'

const Extension = () => {
  useEffect(() => {
    window.location.href =
      'https://wide-canopy.notion.site/Leapfrog-How-it-Works-96a9063426424c1e8f3275d196293138'
  }, [])

  return (
    <div className="flex justify-center items-center pt-8">
      <Spinner />
    </div>
  )
}

export default Extension
