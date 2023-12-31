import "./header.css"
import { refreshImgPath, coingeckoLogoPath } from "../../assets/imagePaths"

const Header = ({ action, refresh }) => {
  return (
    <header>
      <h1 className="title">
        Crypto Prices
        <span>
          Powered by
          <img src={coingeckoLogoPath} alt="coingecko logo" />
        </span>
      </h1>

      <button onClick={action} disabled={refresh}>
        <img src={refreshImgPath} alt="reload white icon" />
      </button>
    </header>
  )
}

export { Header }
