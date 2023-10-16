import { useState } from 'react'

// It is quite common to see switches and checkboxes in web apps.

// Implement useToggle() to make things easier

// function App() {
//   const [on, toggle] = useToggle()
//   ...
// }

export function useToggle(on: boolean): [boolean, () => void] {
  const [isOn, setIsOn] = useState<boolean>(on)

  const toggleHandler = () => setIsOn((prevState) => !prevState)

  return [isOn, toggleHandler]
}