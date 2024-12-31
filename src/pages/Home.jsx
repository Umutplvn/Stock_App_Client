import { Typography } from "@mui/material"
import KpiCards from "../components/KpiCards"
import Charts from "../components/Charts"
import useStockCall from "../hooks/useStockCall"
import { useEffect } from "react"

const Home = () => {
  const { getStockData } = useStockCall()
  useEffect(() => {
    getStockData("sales")
    getStockData("purchases")
  }, [])

  return (
    <div>
      <Typography variant="h5" color="error" mb={2} sx={{fontWeight:"600"}}>
        Dashboard
      </Typography>

      <KpiCards />

      <Charts />
    </div>
  )
}

export default Home
