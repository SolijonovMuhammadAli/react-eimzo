// src/hooks/useToggle.ts
import { useState } from 'react'

export function useToggle(initialValue: boolean = false) {
  const [state, setState] = useState(initialValue)

  const toggle = () => setState(!state)

  return { state, toggle }
}
