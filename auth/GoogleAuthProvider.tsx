import { auth } from "../firebase";
import firebase from "firebase/";
import { GoogleAuthProvider } from "@firebase/auth-types";

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(googleProvider)
     .then((res) => {
         console.log(res.user);
     })
     .catch((error) => {
         console.log(error.message);
     });

     return (
        <div>
          <button onClick = {signInWithGoogle} >Googleでログイン</button>
        </div>
     );
};

