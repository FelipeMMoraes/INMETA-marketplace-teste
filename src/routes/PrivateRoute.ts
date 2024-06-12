import React from "react";

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const token = localStorage.getItem("token");

  return token ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
