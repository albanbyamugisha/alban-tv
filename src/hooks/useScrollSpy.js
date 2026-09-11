import { useEffect, useState } from 'react'

function useScrollSpy(sectionIds, activeRatio = 0.7) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null)

  useEffect(() => {
    const top = Math.round(window.innerHeight * activeRatio)
    const rootMargin = `-${top}px 0px -${window.innerHeight - top}px 0px`

    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id)
      if (!element) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveId(id)
          })
        },
        { rootMargin, threshold: 0 },
      )
      observer.observe(element)
      return observer
    })

    return () => observers.forEach((observer) => observer && observer.disconnect())
  }, [sectionIds, activeRatio])

  return activeId
}

export default useScrollSpy