import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './login.scss'

const Login = () => {
  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    login()
  }

  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <div className='headers'>
            <h1>Cultivate</h1>
          </div>
          <span>Don't have an account?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>

        <div className='right'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
