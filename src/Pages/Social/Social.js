import React from 'react';
import google from '../../images/icons/google.png';
import facebook from '../../images/icons/fb.png';
import './Social.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';


const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let showError;
    const loginWithGoogle = () =>{
        signInWithGoogle();
    }
    if(error){
        showError = <p className='text-center text-danger'>{error?.message} </p>
    }
    if(user){
        navigate('/home');
    }
    

    return (
        <div>
            <div className='w-50 mx-auto mt-3 d-flex align-items-center'>
                <div className='orDiv'></div>
                <div><p className='m-0 px-2'>or</p></div>
                <div className='orDiv'></div>
            </div>
            {
                showError
            }
            <div className='w-50 mx-auto m-3'>
                <div className='mx-auto mb-3'>
                    <button onClick={loginWithGoogle} className='social-button mx-auto btn btn-outline-primary'>
                        <img height='30' src={google} alt="" />
                        <div className='text-center w-100'>
                            <p className='m-0 text-center'>Continue with Google</p>
                        </div>
                    </button>
                </div>

                <div className='mx-auto mb-3'>
                    <button className='social-button mx-auto btn btn-outline-primary'>
                        <img height='30' src={facebook} alt="" />
                        <div className='text-center w-100'>
                            <p className='m-0 text-center'>Continue with Facebook</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Social;