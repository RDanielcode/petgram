import { useState, useEffect } from 'react'

const useData = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchCategories = async () => {
      // eslint-disable-next-line no-undef
      const response = await fetch('https://petgram-api-back.vercel.app/categories')
      const data = await response.json()
      setCategories(data)
      setLoading(false)
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const limitScroll = window.scrollY > 200
      if (limitScroll) {
        setShowFixed(true)
      } else {
        setShowFixed(false)
      }
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  return { categories, showFixed, loading }
}

export { useData }
