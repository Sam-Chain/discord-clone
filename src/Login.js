import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, povider} from './firebase'
function Login() {
    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .catch(error=>alert(error.message))
    }
    return (
        <div className='login'>
            {/* <div className="login__logo"> */}
                <img 
                    src="https://discord.com/assets/e4923594e694a21542a489471ecffa50.svg" 
                alt=""/>
            {/* </div> */}
            <Button onClick={signIn}>Sing In</Button>
        </div>
    )
}

export default Login
