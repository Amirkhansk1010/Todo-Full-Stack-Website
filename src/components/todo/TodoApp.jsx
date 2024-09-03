import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./TodoApp.css";

import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import ListTodoComponent from "./ListTodoComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";

import AuthProvider, { useAuth } from './security/AuthContext'

function AuthenticateRoute({children}) {
  const authContext = useAuth()

  if(authContext.isAuthenticated) {
    return children
  }

  return <Navigate to="/" />

}

export default function TodoApp() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />

            <Route path="/welcome/:username" element={
              <AuthenticateRoute>
                <WelcomeComponent />
              </AuthenticateRoute>
            } />

            <Route path="/todos" element={
              <AuthenticateRoute>
                <ListTodoComponent />
              </AuthenticateRoute>
            } />

            <Route path="/logout" element={
              <AuthenticateRoute>
                <LogoutComponent />
              </AuthenticateRoute>
            } />

            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

