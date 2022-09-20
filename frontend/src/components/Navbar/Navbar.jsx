import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

const Navbar = () => {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">A1Maths</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          { user && (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <div>
                <span className='p-2' >{user.email}</span>
                <button onClick={handleClick}>Log out</button>
              </div>
            </ul>
          )}
          { !user && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div>
                <Link className="nav-link active" to="login" style={{display: 'inline'}}>Teacher</Link>
                <Link className="nav-link" to="/login" style={{display: 'inline'}}>Student</Link>
              </div>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar