import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'
import { AuthProvider } from '../auth/AuthProvider'
import { signInWithGoogle } from '../auth/GoogleAuthProvider'

export default function top() {
  return (
    <AuthProvider>
    <Login />
    <button onClick = {signInWithGoogle} >Googleでログイン</button>
    </AuthProvider>
  )
};





