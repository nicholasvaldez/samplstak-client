import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"
import "./auth.css"
import logo from "../../assets/register.svg"

export const Register = () => {
  const firstName = useRef()
  const lastName = useRef()
  const username = useRef()
  const bio = useRef()
  const password = useRef()
  const verifyPassword = useRef()
  const passwordDialog = useRef()
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()

    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        username: username.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        bio: bio.current.value,
        password: password.current.value,
      }

      registerUser(newUser).then((res) => {
        if ("token" in res) {
          localStorage.setItem("lu_token", res.token)
          navigate("/browse")
        }
      })
    } else {
      passwordDialog.current.showModal()
    }
  }

  return (
    <main
      style={{ textAlign: "center" }}
      className=" fixed container--login bg-darkgrey h-screen w-screen text-white"
    >
      <dialog className="dialog dialog--password" ref={passwordDialog}>
        <div>Passwords do not match</div>
        <button
          className="button--close"
          onClick={(e) => passwordDialog.current.close()}
        >
          Close
        </button>
      </dialog>
      <section className="flex justify-center flex-col items-center">
        <div className="logo transform scale-70">
          <img src={`${logo}`} alt="Logo" />
        </div>
        <form className="form--login" onSubmit={handleRegister}>
          <div className="flex justify-between">
            <fieldset>
              <input
                ref={firstName}
                type="text"
                name="firstName"
                className="form-control  w-[190px] h-[43px] mb-[15px] rounded text-black"
                placeholder="First name"
                required
                autoFocus
              />
            </fieldset>
            <fieldset>
              <input
                ref={lastName}
                type="text"
                name="lastName"
                className="form-control  w-[190px] h-[43px] mb-[15px] rounded text-black"
                placeholder="Last name"
                required
              />
            </fieldset>
          </div>
          <fieldset>
            <input
              ref={username}
              type="text"
              name="username"
              className="form-control  w-[405px] h-[43px] mb-[15px] rounded text-black"
              placeholder="Username"
              required
            />
          </fieldset>
          <fieldset>
            <input
              ref={password}
              type="password"
              name="password"
              className="form-control  w-[405px] h-[43px] mb-[15px] rounded text-black"
              placeholder="Password"
              required
            />
          </fieldset>
          <fieldset>
            <input
              ref={verifyPassword}
              type="password"
              name="verifyPassword"
              className="form-control  w-[405px] h-[43px] mb-[15px] rounded text-black"
              placeholder="Verify password"
              required
            />
          </fieldset>

          <fieldset
            style={{
              textAlign: "center",
            }}
          >
            <button
              type="submit"
              className="font-primary text-white font-bold bg-green rounded"
              style={{
                marginLeft: "00px",
                marginTop: "40px",
                height: "35px",
                width: "103px",
              }}
            >
              Register
            </button>
          </fieldset>
        </form>
        <section className="link--register mt-10">
          Already registered? <Link to="/login">Login</Link>
        </section>
      </section>
    </main>
  )
}
