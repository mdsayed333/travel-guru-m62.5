import React, { useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Social from "../Social/Social";
import "./Locin.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const [sendPasswordResetEmail, sending, passwordREsetError] = useSendPasswordResetEmail(
        auth
      );
      let from = location.state?.from?.pathname || "/";
      

      let handleError;

      const loginHandle = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
      }

      if(error){
          handleError = <p className='text-center text-danger'>{error?.message} </p>
      }
      if(user){
        navigate(from, { replace: true });
      }

      const resetPassword = async() =>{
        console.log(email);
        await sendPasswordResetEmail(email);
        toast('Sent email');
      }

  return (
    <div className="container">
      <Header></Header>
      <form onSubmit={loginHandle} className="w-50 mx-auto login-container">
        <h2> Login</h2>
        <div className="mb-1">
          <label className="form-label w-100">
            Email address
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-1">
          <label className="form-label w-100">
            Password
            <input type="password" name="password" className="form-control" required />
          </label>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" />
              Remember Me
            </label>
          </div>
          <div>
            <button onClick={resetPassword} className="btn btn-link text-decoration-none">
              Forget Password
            </button>
          </div>
        </div>
        {
            handleError
        }
        <button
          type="submit"
          className="btn btn-outline-primary d-block mt-2 w-50 mx-auto"
        >
          Login
        </button>
        <p className="mt-2 text-center">
          Dont have any account?{" "}
          <span>
            <Link to="/register" className="text-danger">
              Create an account
            </Link>
          </span>
        </p>
      </form>
      <div className="">
        <Social></Social>
      </div>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
};

export default Login;
