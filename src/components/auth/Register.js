import React, { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"
import logo from "../../assets/newreg.svg"

export const Register = () => {
  const firstName = useRef()
  const lastName = useRef()
  const username = useRef()
  const bio = useRef()
  const password = useRef()
  const verifyPassword = useRef()
  const passwordDialog = useRef()
  const image = useRef()
  const navigate = useNavigate()

  const [newUser, setNewUser] = useState({})

  const handleRegister = (e) => {
    e.preventDefault()
    if (password.current.value === verifyPassword.current.value) {
      registerUser(newUser).then((res) => {
        if ("token" in res) {
          localStorage.setItem("lu_token", res.token)
          navigate("/home")
        }
      })
    } else {
      passwordDialog.current.showModal()
    }
  }

  const getBase64 = (file, callback) => {
    const reader = new FileReader()
    reader.addEventListener("load", () => callback(reader.result))
    reader.readAsDataURL(file)
  }

  const createImgString = (event) => {
    getBase64(event.target.files[0], (base64imagestring) => {
      console.log("Base64 of file is", base64imagestring)

      // Update the newUser state variable with the value of base64imagestring
      setNewUser({
        username: username.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        bio: bio.current.value,
        password: password.current.value,
        image: base64imagestring,
      })
    })
  }

  return (
    <div className=" fixed bg-darkgrey h-screen w-screen text-white   ">
      <dialog ref={passwordDialog}>
        <div>Passwords do not match</div>
        <button onClick={(e) => passwordDialog.current.close()}>Close</button>
      </dialog>
      <section className="flex justify-center flex-col items-center">
        <div className="logo transform scale-[70%] my-[50px]">
          <img src={`${logo}`} alt="Logo" />
        </div>
        <form onSubmit={handleRegister}>
          <div className="flex justify-between">
            <fieldset>
              <input
                ref={firstName}
                type="text"
                name="firstName"
                className="pl-[10px]  w-[190px] h-[43px] mb-[15px] rounded text-black"
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
                className="pl-[10px]  w-[190px] h-[43px] mb-[15px] rounded text-black"
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
              className="pl-[10px]  w-[405px] h-[43px] mb-[15px] rounded text-black"
              placeholder="Username"
              required
            />
          </fieldset>
          <fieldset>
            <input
              ref={password}
              type="password"
              name="password"
              className="pl-[10px]  w-[405px] h-[43px] mb-[15px] rounded text-black"
              placeholder="Password"
              required
            />
          </fieldset>
          <fieldset>
            <input
              ref={verifyPassword}
              type="password"
              name="verifyPassword"
              className="pl-[10px]  w-[405px] h-[43px] mb-[15px] rounded text-black"
              placeholder="Verify password"
              required
            />
          </fieldset>
          <fieldset>
            <input
              ref={bio}
              type="text"
              name="bio"
              className="pl-[10px]  w-[405px] h-[86px] mb-[15px] rounded text-black"
              placeholder="Tell us about yourself!"
              required
            />
          </fieldset>

          <fieldset>
            <div className=" font-primary ">
              <input
                type="file"
                id="producer_image"
                onChange={createImgString}
              />
              <input type="hidden" name="producer_image" />
            </div>
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
    </div>
  )
}
