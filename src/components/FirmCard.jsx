import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import { btnStyle } from "../styles/globalStyles"
import useStockCall from "../hooks/useStockCall"

export default function FirmCard({ firm, handleOpen, info, setInfo }) {
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
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: 600,
            fontSize: "1.2rem",
            color: "text.primary",
          }}
        >
          {firm.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1, fontSize: "0.9rem" }}
        >
          {firm.address}
        </Typography>
      </CardContent>

      <CardMedia
        sx={{
          p: 1,
          objectFit: "contain",
          height: "140px",
          borderRadius: "12px",  
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",  
        }}
        image={firm.image}
        title={firm.name}
        component="img"
      />

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          textAlign: "center",
          mt: 1,
          fontSize: "0.9rem",
        }}
      >
        {firm.phone}
      </Typography>

      <CardActions
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          mt: 2,
        }}
      >
        <EditIcon
          sx={btnStyle}
          onClick={() => {
            handleOpen()
            setInfo(firm)
          }}
        />
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteStockData("firms", firm.id)}
        />
      </CardActions>
    </Card>
  )
}
