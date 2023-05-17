import { useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const [passShow, setPassShow] = useState(true);

    const handleLogin = () => {

    }

    return (
        <div className='py-10'>
            <div className='w-2/5 max-sm:w-11/12 max-md:w-3/4 max-lg:w-1/2 bg-white mx-auto py-10 px-12 max-sm:px-4 shadow-2xl rounded-lg'>
                <h3 className='text-center text-3xl font-semibold max-sm:text-2xl'>Login your account</h3>
                <hr className='my-8' />
                <form action="" className='px-4' onSubmit={handleLogin}>
                    <div className='mb-4'>
                        <label htmlFor="" className='block mb-2'>Email</label>
                        <input type="email" name="email" className='input-control' placeholder='Enter your email' />
                    </div>
                    <div className='mb-4 relative'>
                        <label htmlFor="" className='block  mb-2'>Password</label>
                        <input type={passShow ? "password" : "text"} name="password" className='input-control' placeholder='Enter your password' />
                        <small onClick={() => setPassShow(!passShow)} className='absolute right-6 top-11 text-base text-slate-600'>
                            {passShow ? <span>{<FaEyeSlash></FaEyeSlash>}</span> : <span>{<FaEye></FaEye>}</span>}
                        </small>
                    </div>
                    <button type="submit" className='w-full py-1 mt-5 hover:bg-slate-800 text-lg font-semibold text-white bg-slate-600 rounded'>Login</button>
                    <p className='mt-2 text-sm  text-slate-600 text-end'>You don't have an account? go to <Link to="/register" className='text-orange-600'>Register</Link></p>
                    <div className='mt-4'>
                    <button type="submit" className='other-login-btn'><FaGoogle></FaGoogle>Continue with Google</button>
                    <button type="submit" className='other-login-btn mt-2'><FaGithub></FaGithub>Continue with Github</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;