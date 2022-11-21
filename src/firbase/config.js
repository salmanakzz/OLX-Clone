import firbase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIRBASE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIRBASE_SENDERID,
  appId: process.env.REACT_APP_FIRBASE_APPID,
  measurementId: process.env.REACT_APP_FIRBASE_MEASUREMENTID,
};
export default firbase.initializeApp(firebaseConfig);
