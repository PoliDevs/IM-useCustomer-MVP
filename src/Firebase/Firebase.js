// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//! guardar en archivo .env
const firebaseConfig = {
  apiKey: "AIzaSyDrbABqktEQ1RGNi51bxT60UwyQjgVdpDw",
  authDomain: "imenu-login.firebaseapp.com",
  projectId: "imenu-login",
  storageBucket: "imenu-login.appspot.com",
  messagingSenderId: "48426542221",
  appId: "1:48426542221:web:70d994f07e5e6274f7eec4",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function useFirebase(setError) {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {

    try {
      const result = await signInWithPopup(auth, provider);
      const user = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL
      }
      dispatch(setUser(user))
    } catch (error) {
      console.error(error);
      setError(true)
    }
  
  }


  return {signInWithGoogle}
}


