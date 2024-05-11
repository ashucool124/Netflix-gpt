import { useRef, useState } from "react";
import Header from "./Header";
import { validatedFormData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Background_IMG } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const Password = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmitButton = () => {
    const message = validatedFormData(
      email.current.value,
      Password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error + " " + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img className="absolute " src={Background_IMG} alt="bg logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white absolute flex flex-col my-36 right-0 left-0 mx-auto w-3/12 p-12 gap-3 bg-opacity-75 bg-black rounded-md"
      >
        <h1 className="text-3xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 rounded-md bg-transparent border-[1px]"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-2 rounded-md bg-transparent border-[1px]"
        />
        <input
          ref={Password}
          type="Password"
          placeholder="Password"
          className="p-2 rounded-md bg-transparent border-[1px]"
        />
        <p className="text-red-500 font-semibold">{errorMessage}</p>
        <button
          onClick={handleSubmitButton}
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
