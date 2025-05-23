import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import LockIcon from "@mui/icons-material/Lock"
import image from "../assets/stock login.jpg"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Link } from "react-router-dom"
import RegisterForm, { registerSchema } from "../components/RegisterForm"
import { Formik } from "formik"
import useAuthCall from "../hooks/useAuthCall"
import { useSelector } from "react-redux"

const Register = () => {
  const { register } = useAuthCall()
  const { loading } = useSelector((state) => state.auth)
  const style={
    width:"7rem",
    position: "absolute",
  }
  return (

    <>
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2233,
    }}
  >
              {loading && (
                <img
                  src="https://i.gifer.com/ZKZg.gif"
                  alt="loading"
                  style={{
                    width: "5rem",
                    height:"5rem",
                    zIndex:2233
                  }}
                />
              )}
            </Box>
    <Container maxWidth="lg"
    sx={{
      position: "relative",
      filter: loading ? "blur(5px)" : "none", // Apply blur effect when loading
    }}
    >
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
        <Typography
            sx={{
              fontWeight: 700,
              fontFamily: "'Montserrat', sans-serif",
            }}
            variant="h3"
            color="primary"
            align="center"
          >
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>
     

          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register({ ...values, password2: values.password })
              actions.resetForm()
              actions.setSubmitting(false)
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>

          <Box     sx={{
      pointerEvents: loading ? "none" : "auto", // Disable link interaction
      color: loading ? "#ccc" : "inherit", // Change color when loading
      textDecoration: "none", // Optional: Remove underline
    }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}  sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Container>
            <img src={image} alt="" style={{width:"90%"}} />
          </Container>
        </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default Register
