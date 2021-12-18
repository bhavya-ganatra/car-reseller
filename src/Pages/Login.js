import React from 'react'
import { Button } from '@material-ui/core'
import db from '../Firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import { auth,provider } from '../Firebase'
import './Login.css'
function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then(res=>{
            console.log(res)
            dispatch({
                type:actionTypes.SET_USER,
                user:res.user
            })
            localStorage.setItem('curuser',JSON.stringify(res.user));
            db.collection('users')
            .doc(res.user.uid)
            .set({
                displayName:res.user.displayName,
                email:res.user.email,
                photoURL:res.user.photoURL,
                uid:res.user.uid                
            },{merge:true})
            .then(()=>{
                console.log('Logged in')
                window.location.replace("/");
            })
            .catch((error)=>console.log('Failed',error))
        })
        .catch(err=>alert('err occured:',err))
    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/1_rangerover_tracking.jpg" 
                alt="logo"/>
 
                <div className="login__text">
                    <h1>Sign In</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In/Register
                </Button>
            </div>
        </div>
    )
}

export default Login
