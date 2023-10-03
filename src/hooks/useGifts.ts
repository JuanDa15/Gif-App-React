import { useEffect, useState } from "react"
import { Gift } from "@interfaces/gift"
import getGifts from "@services/gifQuery"

export default function useGifts(
  category: string, 
  limit: number
) {
  const [gifts, setGifts] = useState<Gift[]>([])
  const [loading, setLoading] = useState(true)

  const fetchGifts = async (
    category: string,
    limit: number
  ) => {
    setLoading(true);
    const data = await getGifts(
      category,
      limit
    )
    setGifts(data)
    setLoading(false)
  }

  useEffect(() => { 
    fetchGifts(category, limit)
  }, [category, limit])

  return {
    gifts,
    fetchGifts,
    loading
  }
}