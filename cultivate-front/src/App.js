import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  createBrowserRouter,
  Outlet,
  Navigate,
  RouterProvider,
} from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import './style.scss'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
import { DarkMode } from '@mui/icons-material'
import { AuthContext } from './context/authContext'

function App() {
  const { currentUser } = useContext(AuthContext)
  const { darkMode } = useContext(DarkModeContext)

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <div>
          <NavBar />
          <div style={{ display: 'flex' }}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },

    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App