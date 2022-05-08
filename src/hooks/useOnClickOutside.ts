import { RefObject, useEffect } from 'react'

type Handler = (evnet: MouseEvent) => void

export default function useOnClickOutside<T extends HTMLElement = HTMLElement>({
  ref,
  handler,
}: {
  ref: RefObject<T>
  handler: Handler
}) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.currentTarget as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}
