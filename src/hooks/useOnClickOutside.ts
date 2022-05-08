import { RefObject, useEffect } from 'react'

type Handler<T> = (evnet: React.MouseEvent<T, MouseEvent> | MouseEvent) => void

export default function useOnClickOutside<T extends HTMLElement = HTMLElement>({
  ref,
  handler,
}: {
  ref: RefObject<T>
  handler: Handler<T>
}) {
  useEffect(() => {
    const listener = (event: React.MouseEvent<T, MouseEvent> | MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', (e: MouseEvent) => listener(e))

    return () => {
      document.removeEventListener('mousedown', (e: MouseEvent) => listener(e))
    }
  }, [ref, handler])
}
