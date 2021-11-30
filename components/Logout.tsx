import React from 'react'
import { auth } from '../firebase';
import firebase from 'firebase';


const Logout = () => {
    firebase.auth().signOut()
    .then(() => {
        console.log("loged out");
        document.location.reload();
    })
    .catch((error) => {
        console.log(error.message);
    });
};


export default Logout

