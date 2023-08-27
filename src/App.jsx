import "./App.css"
import { BasicTable } from "./components/table/BasicTable"
import { useCoinGeckoFetch } from "./hooks/useCoinGeckoFetch"
import { API_URL } from "./assets/constants"
import { Header } from "./components/header/Header"
function App() {
  const { coins, setCoins, setRefresh, refresh } = useCoinGeckoFetch(API_URL)

  const refreshQuery = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoins(data))
    setRefresh(true)
    setTimeout(() => setRefresh(false), 8000)
  }
  return (
    <>
      <Header
        action={() => {
          refreshQuery(API_URL)
        }}
        refresh={refresh}
      />
      <BasicTable coins={coins} />
    </>
  )
}

export default App
