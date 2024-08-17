'use client'

import { useEffect, useState } from 'react'

export const useHideState = () => {
  const [hide, setHide] = useState(() => window?.innerWidth <= 767)
  const [prevWidth, setPrevWidth] = useState(window?.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window?.innerWidth
      if (currentWidth <= 767 && prevWidth > 767) {
        setHide(true)
      }
      else if (currentWidth > 767 && prevWidth <= 767) {
        setHide(false)
      }
      setPrevWidth(currentWidth)
    }

    window?.addEventListener('resize', handleResize)
    return () => window?.removeEventListener('resize', handleResize)
  }, [prevWidth])

  return { hide, setHide }
}
