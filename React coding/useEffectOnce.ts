
import { EffectCallback, useRef, useEffect } from 'react'

// Here is a simple problem, implement useEffectOnce() as the name says itself, it runs an effect only once.
export function useEffectOnce(effect: EffectCallback) {
  useEffect(effect, [])
}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }