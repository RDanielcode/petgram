import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = window.localStorage.getItem(key)
    return item !== null ? JSON.parse(item) : initialValue
  })

  const setLocalStorage = like => {
    try {
      window.localStorage.setItem(key, JSON.stringify(like))
      setValue(like)
    } catch (e) {
      console.log(e)
    }
  }

  return [value, setLocalStorage]
}

export { useLocalStorage }
