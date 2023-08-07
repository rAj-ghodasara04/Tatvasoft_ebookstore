import Navbar from "./Components/Navbar";
// import Registration from "./Components/Registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Login from "./Components/Login";
import CircularProgress from '@mui/material/CircularProgress';
import { BrowserRouter } from "react-router-dom";
import { MainNavigation } from "./Components/MainNavigation/MainNavigation";




function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <BrowserRouter>
      <div className="loader-wrapper">
          <CircularProgress/>
      </div>
      <MainNavigation/>
      </BrowserRouter>
    </div>
  );
}

export default App;
