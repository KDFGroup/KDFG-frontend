import React from "react"
import SignIn from "./SignIn"
import AuthBanner from "./AuthBanner"

const AuthPage = () => {
  return (
    <div className="relative flex w-full min-h-screen">
      {/* Left Section */}
      <AuthBanner />

      {/* Right Section */}
      <div className="w-[40%] flex items-center justify-center bg-white p-8">
        <SignIn />
      </div>
    </div>
  )
}

export default AuthPage
