import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext/UserContext';
import './Register.css'


const Register = () => {
    const {signUpWithEmail} = useContext(AuthContext);
   const [result , setResult] = useState('');
  
    const handleRegisterBtn =(event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        const passConfirm = form.confirmPassword.value;
        if(pass < 6) {
            setResult('Passwords must be 6 characters long')
        }
        if(pass !== passConfirm) {
            setResult(`Password didn't matched`);
            return;
        }
        signUpWithEmail(email,pass)
        .then(result => {
           setResult ('succesfully signed up');
           form.reset();
        })
        .catch(
            (error) => {
                setResult(error.message);
               
            }
        )
      
       
    }
   

    
    return (
        <div className='form-container'>
            <h2 className='form-title'> Register</h2>
            <form onSubmit={handleRegisterBtn}>
                <div className="form-control">
                    <label htmlFor='Name'>Name</label>
                    <input type='text' name='name' required/>
                </div>
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' required/>
                </div>
                <div className="form-control">
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input type='password' name='confirmPassword' required/>
                </div>
                <button type='submit' className='btn-submit' >Register</button>
                
               
                <p>{result && result}</p>
            </form>
            <code className='new-Register'>Already registered? <Link to = '/login'>Login</Link></code>
        </div>
    );
};

export default Register;