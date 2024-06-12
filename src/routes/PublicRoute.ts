// src/routes/PublicRoute.tsx
import React from "react";

interface PublicRouteProps {
  component: React.ComponentType;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component }) => {
  const token = localStorage.getItem("token");

  return token ? <Navigate to="/dashboard" /> : <Component />;
};

export default PublicRoute;
