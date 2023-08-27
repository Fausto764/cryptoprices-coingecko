import { TableCell, TableRow } from "@mui/material"
import { coinName } from "../../assets/style"
const TableRows = ({ coins }) => {
  if (!coins || !Array.isArray(coins) || coins.length === 0) {
    return <p>No hay datos disponibles.</p>
  }
  return coins.map((coin, index) => (
    <TableRow
      key={coin.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row" width={"0.1%"}>
        {index + 1}
      </TableCell>
      <TableCell align="left" width={"2%"}>
        <img src={coin.image} width={"30px"} />
      </TableCell>
      <TableCell align="left" style={{ fontSize: "1.1rem" }}>
        {coin.name}
        <span style={coinName}>{coin.symbol.toUpperCase()}</span>
      </TableCell>
      <TableCell align="left" width={"12%"}>
        {"$ " + coin.current_price}
      </TableCell>
      <TableCell align="left" width={"14%"}>
        {coin.last_updated.slice(0, -5).replace("T", " ")}
      </TableCell>
      <TableCell align="left" width={"12%"}>
        {"$ " + coin.market_cap}
      </TableCell>
      <TableCell align="left" width={"12%"}>
        {coin.circulating_supply}
      </TableCell>
    </TableRow>
  ))
}
export { TableRows }
