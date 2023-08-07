import React from "react";
import { Route, Routes} from "react-router-dom";
// import { Login } from "../../pages/login/Login";
import Registration from "../../pages/register/Registration";
// import { RoutePaths } from "../utils/enum";
import Login from '../../pages/login/Login';
// import Registration from '../../pages/register/Registration';
// import { useAuth } from "../../service/AuthContext";

// function ProtectedRoute({ element }) {
//   const { loggedInUser } = useAuth();

//   if (!loggedInUser) {
//     return <Navigate to="/login" />;
//   }

//   return element;
// }
export const MainNavigation = () => {

  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />
    </Routes>
  );
};
