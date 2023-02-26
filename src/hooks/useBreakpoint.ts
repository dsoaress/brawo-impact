import throttle from 'lodash.throttle'
import { useEffect, useState } from 'react'

const getDeviceConfig = (width: number) => {
  if (width < 768) {
    return 'sm'
  } else if (width >= 768 && width < 976) {
    return 'md'
  } else if (width >= 976 && width < 1440) {
    return 'lg'
  } else if (width >= 1440) {
    return 'xl'
  }
}

export const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth))

  useEffect(() => {
    const calcInnerWidth = throttle(() => {
      setBrkPnt(getDeviceConfig(window.innerWidth))
    }, 200)
    window.addEventListener('resize', calcInnerWidth)
    return () => window.removeEventListener('resize', calcInnerWidth)
  }, [])

  return brkPnt
}
