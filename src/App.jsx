import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './components/RootLayout'
import Login from './pages/auth/login'
import Signup from './pages/auth/Signup'
import Dashboard from './pages/Dashboard'
import Cookies from "js-cookie"
import RequireAuth from './pages/auth/RequireAuth'
function App() {
  const accessToken = Cookies.get("accessToken");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<h1>Authentication app</h1>} />
        <Route path="auth">
          <Route
            path="login"
            element={
              accessToken ? <Navigate to="/dashboard" replace /> : <Login />
            }
          />
          <Route
            path="signup"
            element={
              accessToken ? <Navigate to="/dashboard" replace /> : <Signup />
            }
          />
        </Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router}/>
}

export default App
