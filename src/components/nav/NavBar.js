// import "./navbar.css"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/STACKY.svg"

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-[#0b0101] fixed w-full z-10 h-[75px] flex justify-between items-center md:flex md:items-center md:justify-between shadow-xl ">
      <div className="logo ">
        <Link className="navbar__link text-white" to="/home">
          <img className="w-[280px] static" src={`${logo}`} alt="Logo" />
        </Link>
      </div>
      {localStorage.getItem("lu_token") !== null ? (
        <>
          <ul className="md:flex md:items-center">
            <li className="navbar__item mx-4 my-6 md:my-0">
              <Link className="navbar__link text-white" to="/browse">
                Browse
              </Link>
            </li>
            <li className="navbar__item mx-4 my-6 md:my-0">
              <Link className="navbar__link text-white" to="/collection">
                Collection
              </Link>
            </li>
            <li className="navbar__item mx-4 my-6 md:my-0">
              <Link className="navbar__link text-white" to="/drumkits">
                Drumkits
              </Link>
            </li>
            <li className="navbar__item mx-4 my-6 md:my-0 ">
              <Link className="navbar__link text-white " to="/mysounds">
                My Sounds
              </Link>
            </li>
            <li className="logout-item text-white font-bold  mx-10">
              <button
                className="nav-link fakeLink  px-6 py-2 rounded duration-500 hover:bg-[#170d0d]"
                onClick={() => {
                  localStorage.removeItem("lu_token")
                  navigate("/")
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul>
            <li className="login-item text-white font-bold">
              <Link className="nav-link mx-10" to="/login">
                Login
              </Link>
            </li>
            {/* <li className="nav-item text-white">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li> */}
          </ul>
        </>
      )}{" "}
    </div>
  )
}
