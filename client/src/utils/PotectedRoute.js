import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PotectedRoute() {
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
