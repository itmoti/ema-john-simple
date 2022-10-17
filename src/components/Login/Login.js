import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext/UserContext';
import './Login.css'
const Login = () => {
    const auth = useContext(AuthContext);
    const {signInWithEmail} = auth;
    const [error,setError] = useState('')
  const Navigate = useNavigate();
   
    const handleFormSubmitBtn =(event) =>  {
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const pass = form.password.value;
        signInWithEmail(email , pass) 
        .then(result => {
            setError('succesfully logged in');
           
            form.reset();
            Navigate('/')
        })
        .catch((error) => {
           setError(error.message)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'> Login</h2>
            <form onSubmit={handleFormSubmitBtn}>
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' required/>
                </div>
                <button type='submit' className='btn-submit' >Login</button>
                <code>{error && error}</code>
            </form>
            <code className='new-Register'>New here?Create an <Link to = '/register'>account</Link></code>
        </div>
    );
};

export default Login;