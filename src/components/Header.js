import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LANG_OPTIONS, LOGO } from "../utils/constants";
import { ShowGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const ShowGptSearch = useSelector((store) => store.gpt.ShowGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGptSearch = () => {
    dispatch(ShowGptSearchView());
  };

  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscirbe will call when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black m-auto p-4 z-10 flex justify-between">
      <img className=" w-56" src={LOGO} alt="header logo" />
      {user && (
        <div className="flex gap-4 ">
          {ShowGptSearch && (
            <select
              onChange={handleLanguage}
              className="h-fit px-4 py-3 opacity-50"
            >
              {LANG_OPTIONS.map((lang) => (
                <option key={lang.indetifier} value={lang.indetifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearch}
            className="bg-white text-black px-8 py-3 h-fit rounded-md"
          >
            {ShowGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <button
            className="bg-white h-fit text-black px-8 py-3 rounded-md"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
