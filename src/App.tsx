import React from "react";
import "./App.css";
import { AppRoutes } from "./AppRoute";
import { useAuth } from "./hooks/useAuth";

const App: React.FC = () => {
  useAuth()
  return <AppRoutes />
}

export default App;
