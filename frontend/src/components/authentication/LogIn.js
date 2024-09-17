import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import logo from "../assets/Group .png"

const LogIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    const userData = {
      email: email,
      password: password,
    }

    // before the API, how do we handle form errors?

    // signInApi(userData)
    // if response is successful
    // add response data to local State -- how do we store the local state?
    // clear form
    setEmail("")
    setPassword("")
    navigate("/Home") // or email verification
  }

  const handleSignIn = () => {
    // navigate/render LogIn Page
  }

  return (
    <div className="w-max flex items-center justify-center bg-white p-8">
      <div className="w-[430px] h-[752px] flex flex-col ">
        <div className="flex justify-flex-start mb-8">
          <img src={logo} alt="K Logo" className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-semibold mb-2">Login</h2>
        <p className="mb-8 text-gray-500">Welcome back!</p>

        <p className="mb-1 font-semibold text-lg">Email*</p>
        <input
          type="text"
          value={email}
          placeholder="Enter your email"
          className="w-[430px] h-[52px] border rounded font-light border-color:#ABABB5 p-2 mb-3"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <p className="mb-1 font-semibold text-lg">Password*</p>
        <input
          type="password"
          value={password}
          placeholder="Create a password"
          className="w-[430px] h-[52px] border rounded font-light border-color:#ABABB5 p-2 mb-3"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <p className="mb-1 text-16 text-gray-500 font-light text-base mb-3">
          Must be at least 8 characters
        </p>
        <button
          onClick={handleSubmit}
          className="bg-purple-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none w-[430px] h-[52px] mt-16"
        >
          Login
        </button>

        <button
          onClick={handleSubmit}
          className="py-2 px-6 border rounded-md border-color:#ABABB5 w-[430px] h-[52px] mt-1 font-semibold hover:bg-purple-700 "
        >
          <FontAwesomeIcon icon={faGoogle} className="mr-2" />
          Sign in with Google
        </button>
        <p className="font-normal text-gray-500 mt-6 text-center">
          Don't have an account?{" "}
          <span
            className="text-purple-500 font-semibold hover:bg-purple-700"
            onClick={handleSignIn}
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  )
}

export default LogIn
