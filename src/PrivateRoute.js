import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.login);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; 
  }
  return children //|| <Outlet />;

};

export default PrivateRoute;