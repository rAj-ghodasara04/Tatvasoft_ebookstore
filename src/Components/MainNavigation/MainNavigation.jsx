import {React} from "react";
import { Route, Routes,Navigate} from "react-router-dom";
import Registration from "../../pages/register/Registration";
import Login from '../../pages/login/Login';
import { RoutePaths } from "../../utils/enum";
import { useAuthContext } from "../../context/auth";
import  BookListing  from "../../pages/book-listing/BookListing";
import Book from "../../pages/book/Book";
import EditBook from "../../pages/book/editBook/EditBook";
import EditUser from "../../pages/users/editUser/EditUser";
import User from "../../pages/users/User";

export const MainNavigation = () => {
  const authContext = useAuthContext();
  const Redirect = <Navigate to={RoutePaths.Login} />;
  return (
    <Routes>
      <Route exact path={RoutePaths.Login} element={<Login />} />
      <Route exact path={RoutePaths.Registration} element={<Registration />} />
      <Route
        exact
        path={RoutePaths.BookListing}
        element={authContext.user.id ? <BookListing /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.Book}
        element={authContext.user.id ? <Book /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.EditBook}
        element={authContext.user.id ? <EditBook /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.AddBook}
        element={authContext.user.id ? <EditBook /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.User}
        element={authContext.user.id ? <User /> : Redirect}
      />
      <Route
        exact
        path={RoutePaths.EditUser}
        element={authContext.user.id ? <EditUser /> : Redirect}
      />
    </Routes>
  );
};
