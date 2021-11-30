import React, { useState, useEffect } from 'react'
import { auth } from "../firebase";
import { useRouter } from 'next/router'


const Login: React.FC = (props:any) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()

    useEffect(() => {
        const unSub = auth.onAuthStateChanged((user) => {
            user && router.push('/home');
        });
        return () => unSub();
    }, [router])
    
    return (
        <div>
            <h1>{isLogin ? "ログイン" : "アカウント登録" }</h1>
        <br/>
        <form>
        <label>E-mail</label>
            <input
                name="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value)
                }}
             />
        </form>
        <br/>
        <form>
        <label>password</label>
            <input
                name="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value)
                }}
            />
        </form>
        <br/>
        <button
            onClick={
                isLogin ? async () => {
                    try {
                        await auth.signInWithEmailAndPassword(email, password);
                        router.push('/');
                    } catch (error) {
                        alert(error.message);
                    }
                }
                         : async () => {
                             try {
                                 await auth.createUserWithEmailAndPassword(email, password);
                                 router.push('/'); 
                             } catch (error) {
                                 alert(error.message);
                             }
                         }
            }
        >
         {isLogin ? "ログイン" : "登録"}
        </button>
        <br/>
            <span onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "新しいアカウントを作成する" : "ログイン画面に戻る"}
            </span>
        </div>
    );
};

export default Login;
