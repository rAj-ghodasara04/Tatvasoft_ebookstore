import React from 'react';
import { TextField, Button, Grid, Typography, Link } from '@mui/material';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik';
import {useNavigate} from 'react-router-dom';
// import { useAuth } from "../../service/AuthContext";
import { toast } from "react-toastify";
import theme from '../../theme';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const useStyles = makeStyles((theme) => ({
  container: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '300px',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  submitButton: {
    marginTop: '16px',
  },
  createAccountLink: {
    display: 'block',
    marginTop: '16px',
  },
}));

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  // const login = useAuth();

  const onSubmit = async(values) => {
    try {
      const response = await axios.post(
        "https://book-e-sell-node-api.vercel.app/api/user/login",
        {
          email: values.email,
          password: values.password,
        }
      );
      const userData = response.data.result;
      console.log(userData);
      toast.success("Login successfully!");
      // login(userData);
      // localStorage.setItem("user", JSON.stringify(userData));
      navigate("/home");
    } catch (error) {
      toast.error("Invalid credentials");
      console.error(error);
    }
  };


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <>
<div className={classes.container}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.submitButton}
              fullWidth
              variant="contained"
              sx={{backgroundColor:theme.palette.primary.main}}
              type="submit"
              onClick={formik.handleSubmit}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              Don't have an account?{' '}
              <Link onClick={()=>{navigate("/Registration")}} className={classes.createAccountLink}>
                Create Account
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
    </>
  );
};

export default Login;
