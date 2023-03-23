import "./navbar.css"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/STACKY.svg"

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <ul className="navbar flex font-primary">
      <li className="logo ">
        <Link className="navbar__link text-white" to="/home">
          <img src={`${logo}`} alt="Logo" />
        </Link>
      </li>
      {localStorage.getItem("lu_token") !== null ? (
        <>
          <li className="navbar__item">
            <Link className="navbar__link text-white" to="/browse">
              Browse
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link text-white" to="/collection">
              Collection
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link text-white" to="/mysounds">
              My Sounds
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link text-white" to="/drumkits">
              Drumkits
            </Link>
          </li>
          <li className="logout-item text-white font-bold ">
            <button
              className="nav-link fakeLink"
              onClick={() => {
                localStorage.removeItem("lu_token")
                navigate("/")
              }}
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li className="login-item text-white font-bold">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          {/* <li className="nav-item text-white">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li> */}
        </>
      )}{" "}
    </ul>
  )
}
