import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const EmailVerification = () => {
  const [code, setCode] = useState(new Array(6).fill(""));
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleVerify = () => {
    setIsVerified(true);
  };
  const handleGoHome = () => {
    navigate('/Home');
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-[60%] relative bg-cover bg-center" style={{ backgroundImage: `url('/bg-image.svg')` }}>
        <div className="absolute inset-0 bg-purple-700 bg-opacity-70 flex flex-col items-flex-start justify-center text-white p-8">
          <h1 className="text-5xl mb-4 text-left w-60 leading-[70px]">Experience the best of K-dramas with fellow K-drama lovers!</h1>
          <p className="text-left text-xl">Connect with fellow K-Drama Enthusiasts and dive deep into your favorite shows.</p>
        </div>
      </div>
      <div className="w-[40%] flex items-center justify-center bg-white p-8">
        {!isVerified ? (
          <div className="w-full max-w-lg">
            <div className="flex justify-flex-start mb-8">
              <img src="/logo.svg" alt="K Logo" className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-semibold mb-6">Verify your e-mail</h2>
            <p className="mb-8 text-center">Please check your mail and enter the 6 digit code that was sent to <span className="font-medium">abcd@gmail.com</span> below.</p>
            <div className="flex justify-center my-8">
              {code.map((data, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="w-10 h-10 mx-1 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={handleVerify}
                className="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none w-full mx-12"
              >
                Verify
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-lg">
            <div className="flex justify-flex-start mb-4">
                <img src="/logo.svg" alt="K Logo" className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-semibold mb-8">Verify your e-mail</h2>
            <p className="mb-4">Your e-mail verification was successful. This will enable you:</p>
            <ul className="text-left mb-6">
              <li className="mb-2 flex items-center">
                <span className="w-3 h-3 mr-2 bg-purple-500 rounded-full"></span>
                Reset your password at any time.
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 mr-2 bg-purple-500 rounded-full"></span>
                Get updates on latest gists on your favorite shows.
              </li>
            </ul>
            <div className="flex justify-center">
              <button
                onClick={handleGoHome}
                className="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none w-full mx-12"
              >
                Go to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
