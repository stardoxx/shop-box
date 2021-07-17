import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import { addUser } from '../../redux/actions/userActions';
const SignIn = () => {
    
    const [userName, setUser] = useState('');
    const [password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const dispatch = useDispatch();
   const handleSubmit = ()=> {
       dispatch(addUser({name: userName, email: email, password: password}))
   }
   
    return (
        <div className = 'sign-form'>
        <form >
           <input type = 'text' placeholder = 'user name' onChange = {(e)=>{setUser(e.target.value)}}/>
           <input type = 'email' placeholder = 'enter password' onChange = {(e)=>{setEmail(e.target.value)}}/>
           <input type = 'password' placeholder = 'confirm password' onChange = {(e)=>{setPassword(e.target.value)}}/>
            <button onClick = {handleSubmit()}>Submit</button>
        </form>
                
        </div>
    )
}

export default SignIn
