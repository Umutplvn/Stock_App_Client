import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import useStockCall from "../hooks/useStockCall"
import PurchaseModal from "../components/PurchaseModal"
import PurchaseTable from "../components/PurchaseTable"

const Purchases = () => {
  const { getStockData, getProdCatBrands } = useStockCall()
  const [open, setOpen] = useState(false)

  const [info, setInfo] = useState({
    brand_id: "",
    product_id: "",
    quantity: "",
    price: "",
  })

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setInfo({ brand_id: "", product_id: "", quantity: "", price: "" })
  }

  useEffect(() => {
    getProdCatBrands()
    getStockData("purchases")
    getStockData("firms")
  }, []) // eslint-disable-line

  return (
    <div>
      <Typography variant="h5" color="error" mb={2} sx={{fontWeight:"600"}}>
        Purchases
      </Typography>

      <Button variant="contained"  onClick={handleOpen} sx={{fontSize:"0.8rem", backgroundColor:"#303030", mb:"1rem"}}>
        New Purchase
      </Button>

      <PurchaseModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <PurchaseTable handleOpen={handleOpen} setInfo={setInfo} />
    </div>
  )
}

export default Purchases
