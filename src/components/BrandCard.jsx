import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardMedia from "@mui/material/CardMedia"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import { CardHeader } from "@mui/material"
import useStockCall from "../hooks/useStockCall"
import { btnStyle, flex } from "../styles/globalStyles"

const BrandCard = ({ brand, setOpen, setInfo }) => {
  const { deleteStockData } = useStockCall()

  return (
    <Card
      elevation={10}
      sx={{
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",  
        boxShadow: "1 6px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        mb:"2rem",
        cursor:"pointer",
        "&:hover": {
          transform: "translateY(-5px)", 
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)", 
        },
      }}
    >
      <CardHeader
        title={brand?.name}
        sx={{
          textAlign: "center", 
          fontWeight: 600,
          fontSize: "1.2rem",
          color: "text.primary",
        }}
      />

      <CardMedia
        image={brand?.image}
        sx={{
          p: 1,
          objectFit: "contain",
          height: "250px",
          borderRadius: "12px",  
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",  
        }}
        component="img"
        alt="brand-img"
      />

      <CardActions sx={flex}>
        <EditIcon
          sx={btnStyle}
          onClick={() => {
            setInfo(brand)
            setOpen(true)
          }}
        />
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteStockData("brands", brand.id)}
        />
      </CardActions>
    </Card>
  )
}

export default BrandCard
