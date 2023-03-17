import "./navbar.css"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/STACKY.png"

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <ul className="navbar">
      <div className="logo">
        <img src={`${logo}`} alt="Logo" />
      </div>
      <li className="navbar__item">
        <Link className="navbar__link text-white" to="/">
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
      {localStorage.getItem("lu_token") !== null ? (
        <li className="nav-item text-white">
          <button
            className="nav-link fakeLink"
            onClick={() => {
              localStorage.removeItem("lu_token")
              navigate("/login")
            }}
          >
            Logout
          </button>
        </li>
      ) : (
        <>
          <li className="nav-item text-white">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item text-white">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </>
      )}{" "}
    </ul>
  )
}
