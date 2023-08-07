import React from 'react';
// import { BrowserRouter,Route } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import theme from '../theme';
import { Link } from "react-router-dom";
import './Navbar.css'
// import Registration from '../pages/register/Registration'
// import Login from '../pages/login/Login'
// import '../index.css';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{backgroundColor:theme.palette.primary.main}}>
      <Toolbar className='tool'>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:theme.palette.secondary.main }}>
          EbookStore
        </Typography>
        {/* <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/Registration" element={<Registration/>}></Route>
        </Routes>
        </BrowserRouter> */}
        <Link className='btn' to="/login">Login</Link>
        <Link className='btn' to="/Registration">Register</Link>
        {/* <Button className='btn'>Login</Button>
        <Button className='btn'>Register</Button> */}
        <IconButton color="inherit">
          <ShoppingCartOutlinedIcon sx={{color:theme.palette.secondary.main}}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
