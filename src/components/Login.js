import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg logo"
        />
      </div>
      <form className="text-white absolute flex flex-col my-36 right-0 left-0 mx-auto w-3/12 p-12 gap-3 bg-opacity-75 bg-black rounded-md">
        <h1 className="text-3xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 rounded-md bg-transparent border-[1px]"
          />
        )}

        <input
          type="text"
          placeholder="Email"
          className="p-2 rounded-md bg-transparent border-[1px]"
        />
        <input
          type="Password"
          placeholder="Password"
          className="p-2 rounded-md bg-transparent border-[1px]"
        />
        <button
          type="submit"
          className="bg-red-600 font-semibold p-2 rounded-md mt-5"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex gap-1">
          <p>New to Netflix?</p>
          <p className="font-bold cursor-pointer" onClick={toggleSignIn}>
            Sign Up Now
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;
