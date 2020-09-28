import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './Firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://lh3.googleusercontent.com/proxy/WAWunn8dpfimkq6bXTLa5WKxvD7UrC-XW-7-Uhjzt4Jdf1tGNHOeJr7__77IdfMcDoa-8N4bAaByDu4NjrkYWuupiOaSGTcBrMeGRIcklzv9v45v8cU"
                    alt="" 
                />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign in with Google
                </Button>
            </div>
            
        </div>
    )
}

export default Login
