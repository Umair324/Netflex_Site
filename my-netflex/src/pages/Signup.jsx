import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-screen object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/7d6db5f6-834f-47bc-ae74-340282d7083b/PK-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'> </div>
        <div className='fixed w-full  px-4 py-24 z-50'>
          <div  className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form onClick={handleSubmit} className='w-full flex flex-col py-3'>
                        <input  className='p-3 my-2 bg-gray-700 rounded outline-none ' type="email" placeholder='Email' autoComplete='email' />
                        <input 
                         className='p-3 my-2 bg-gray-700 rounded outline-none' type="password" placeholder='Password' autoComplete='current-password'/>
                        <button className='bg-[red] py-3 my-8 rounded font-bold'>Sign Up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input className='mr-1' type="checkbox"/>Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-8'><span className='text-gray-600 mr-1'>New to Netflix?</span>
                        {''}
                        <Link to = '/login'>
                         Sign up now.
                         </Link>
                         </p> 
                    </form>
                </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Signup