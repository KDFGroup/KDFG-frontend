import React from "react"

const AuthBanner = () => {
  return (
    <div
      className="w-[60%] relative bg-cover bg-center "
      style={{ backgroundImage: `url('/bg-image.svg')` }}
    >
      <div className="absolute inset-0 bg-purple-700 bg-opacity-70 flex flex-col  justify-center text-white p-8">
        <h1 className="text-5xl mb-4 text-left w-60 leading-[70px]">
          Experience the best of K-dramas with fellow K-drama lovers!
        </h1>
        <p className="text-left text-xl">
          Connect with fellow K-Drama Enthusiasts and dive deep into your favorite shows.
        </p>
      </div>
    </div>
  )
}

export default AuthBanner
