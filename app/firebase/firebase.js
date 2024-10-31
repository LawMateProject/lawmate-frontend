
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {

   apiKey: "AIzaSyAXzpDgJOEm-qa3ttX8vRs8ME9WFirGM38",
   authDomain: "lawmate-24be9.firebaseapp.com",
   projectId: "lawmate-24be9",
   storageBucket: "lawmate-24be9.appspot.com",
   messagingSenderId: "130410585647",
   appId: "1:130410585647:web:ff9e51befb597ce7c9b0da",
   measurementId: "G-X66M9X5PHF"


};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);


export { auth, app };
