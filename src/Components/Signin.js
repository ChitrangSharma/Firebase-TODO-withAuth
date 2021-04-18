import { Button } from '@material-ui/core';
import React,{useState} from 'react'
import './Signin.css'
import {auth} from '../firebase'
// import M from "materialize-css";
import {useHistory} from 'react-router-dom';
function Signin() {
    const[password,setPassword]= useState('');
    const[email,setEmail]= useState('');
    const history = useHistory();
    const  handleSubmit =async(e)=>{
        e.preventDefault()
        console.log(email, password)
        try{
            const result =await auth.createUserWithEmailAndPassword(email, password)
            window.M.toast({html: `welcome ${result.user.email}`})
            // console.log("resuling working", email,password)
            history.push('/')
        }
        catch(err){
            window.M.toast({html:err})
            console.log(err)
        }
    }
    return (
        <div className=" center container signup__main" style={{maxWidth:"500px"}}>
        <div className="signup__style">
       <h3>Please Signup</h3>
       <form onSubmit={(e)=>handleSubmit(e)}>
       <div className="input-field col s6">
           <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
           <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
       </div>
       <Button type="submit" >Signup</Button>
        </form>
        </div>
        </div>
    )
}

export default Signin
