import throttle from 'lodash.throttle'
import { useEffect, useState } from 'react'

const getDeviceConfig = () => {
  if (typeof window === 'undefined') return 'xl'
  const width = window.innerWidth

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
  const [brkPnt, setBrkPnt] = useState(getDeviceConfig)

  useEffect(() => {
    const calcInnerWidth = throttle(() => {
      setBrkPnt(getDeviceConfig())
    }, 200)
    window.addEventListener('resize', calcInnerWidth)
    return () => window.removeEventListener('resize', calcInnerWidth)
  }, [])

  return brkPnt
}
