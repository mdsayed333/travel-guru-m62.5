import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Register = () => {
    const [wrongPassword, setWrongPassword] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    let signInError;
    const navigate = useNavigate();
    // let wrongPassword;
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        // console.log(name,email, password,confirmPassword);
        if(password === confirmPassword){
            createUserWithEmailAndPassword(email, password);
        }else{
            setWrongPassword(<p className='text-danger text-center'>Confirm Password did not match</p>);
        }
    }

    if(error){
        signInError = <p className='text-center text-danger'>{error?.message} </p>
    }
    if(user){
        navigate('/home');
    }

    return (
        <div className="container">
        <Header></Header>
        <form onSubmit={handleSubmit} className="w-50 mx-auto login-container">
          <h2> Create an account</h2>
          <div className="mb-1">
            <label className="form-label w-100">
              Name
            <input
              type="text"
              className="form-control "
              name='name'
              />
              </label>
          </div>
          <div className="mb-1">
            <label className="form-label w-100">
              Email address
            <input
              type="email"
              name='email'
              className="form-control"
              aria-describedby="emailHelp"
              />
              </label>
          </div>
          <div className="mb-1">
            <label className="form-label w-100">
              Password
            <input
              type="password"
              className="form-control"
              name='password'
              />
              </label>
          </div>
          {
              wrongPassword
          }
          <div className="mb-1">
            <label className="form-label w-100">
              Confirm Password
            <input
              type="password"
              className="form-control"
              name='confirmPassword'
              />
              </label>
          </div>
          {
              signInError
          }
          <button
            type="submit"
            className="btn btn-outline-primary d-block mt-4 w-50 mx-auto"
          >
            Register
          </button>
          <p className="mt-2 text-center">
            Already have an account?{" "}
            <span>
              <Link to="/login" className="text-danger">
                Login
              </Link>
            </span>
          </p>
        </form>
        <Footer></Footer>
      </div>
    );
};

export default Register;