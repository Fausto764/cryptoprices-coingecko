import { useState, useEffect } from "react"

export const useCoinGeckoFetch = (url) => {
  const [coins, setCoins] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoins(data))
      .then(() => console.log(coins))
  }, [])

  return {
    coins,
    setCoins,
    refresh,
    setRefresh,
  }
}
