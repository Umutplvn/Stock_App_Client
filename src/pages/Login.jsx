import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/stock login.jpg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import useAuthCall from "../hooks/useAuthCall";
import { useSelector } from "react-redux";

const Login = () => {
  const { login } = useAuthCall();
  const { loading } = useSelector((state) => state?.auth);

  // Validation schema
  const loginSchema = object({
    email: string()
      .email("Lutfen valid bir email giriniz")
      .required("Bu alan zorunludur"),
    password: string()
      .required("Bu alan zorunludur")
      .min(8, "En az 8 karakter girilmelidir")
      .max(16, "En fazla 16 karakter girilmelidir")
      .matches(/\d+/, "En az bir rakam içermelidir.")
      .matches(/[a-z]/, "En az bir küçük harf içermelidir.")
      .matches(/[A-Z]/, "En az bir büyük harf içermelidir.")
      .matches(/[!,?{}><%&$#£+-.]+/, "En az bir özel karekter içermelidir."),
  });

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
    <Container
      maxWidth="lg"
      sx={{
        position: "relative",
        filter: loading ? "blur(5px)" : "none", 
      }}
    >
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} sx={{ pt: "3rem" }}>
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
            mb={4}
            color="secondary.light"
            sx={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "600" }}
          >
            Login
          </Typography>


          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, action) => {
              login(values);
              action.resetForm();
              action.setSubmitting(false);
            }}
          >
            {({ handleChange, handleBlur, values, touched, errors }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && Boolean(errors.email)}
                    helperText={errors.email}
                    disabled={loading} // Disable input when loading
                  />
                  <TextField
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={touched.password && Boolean(errors.password)}
                    helperText={errors.password}
                    disabled={loading} 
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={loading} 
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
  <Link
    to="/register"
    style={{
      pointerEvents: loading ? "none" : "auto", // Disable link interaction
      color: loading ? "#ccc" : "inherit", // Change color when loading
      textDecoration: "none", // Optional: Remove underline
    }}
  >
    Don't you have an account?
  </Link>
</Box>

          <Box
            sx={{
              position: "fixed",
              bottom: "0",
              left: "0",
              border: "5px",
              borderRadius: "1rem",
              padding: "0.5rem",
            }}
          >
            <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>
              You can use the credentials below
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>
              Email: stock@site.com
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>
              Password: 1a2b3c4D!
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" style={{ width: "90%" }} />
          </Container>
        </Grid>
      </Grid>
    </Container>
</>

  );
};

export default Login;
