import React from "react"
import SignIn from "./SignIn"
import AuthBanner from "./AuthBanner"
import LogIn from "./LogIn"
import EmailVerification from "./EmailVerification"

const AuthPage = () => {
  return (
    <div className="relative flex w-full h-full min-h-screen">
      {/* Left Section */}
      <div className="flex w-[60%] flex-grow relative">
        <AuthBanner />
      </div>

      {/* Right Section */}
      <div className="w-[40%] flex items-center justify-center bg-white p-8">
        {/* <SignIn /> */}
        {/* <LogIn /> */}
        <EmailVerification />
      </div>
    </div>
  )
}

export default AuthPage
