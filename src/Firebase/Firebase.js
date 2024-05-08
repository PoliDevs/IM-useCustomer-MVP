// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Logo  from "../assets/logo imenu orange.svg";
// import { initialize } from "../utils/Firebase_inicialize";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDERID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app = initialize(firebaseConfig, initializeApp);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function useFirebase(setError) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInWithGoogle = async () => {

    try {
      const result = await signInWithPopup(auth, provider);
      const user = {
        name: result.user.displayName,
        email: result.user.email,
        email_verified: result.user.emailVerified,
        photo: result.user.photoURL,
        phone: result.user.phoneNumber,
        meta: result.user.metadata.lastSignInTime,
        googleId: result.user.uid
      }
      dispatch(setUser(user))
      navigate("/welcome")
    } catch (error) {
       const user = {
         name: null,
       };
        localStorage.setItem("user", JSON.stringify(user));
      console.error(error);
      setError(true)
    }
  
  }


  return {signInWithGoogle}
}

export const storage = getStorage(app);

export async function uploadFile(file, name) {
  const storageRef = ref(storage, name);
  return await uploadBytes(storageRef, file);
}

export async function getFileDownloadURL(fileName) {
  const fileRef = ref(storage,fileName);
  
  try {
    const url = await getDownloadURL(fileRef);
    return url;
  } catch (error) {
    // Manejar el error (puede ser que el archivo no exista)
    console.error('Error al obtener una imagen');
    return Logo;
  }
}