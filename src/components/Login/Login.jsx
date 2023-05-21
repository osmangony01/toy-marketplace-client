import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {

    useTitle('Login');

    const [passShow, setPassShow] = useState(true);
    const [error, setError] = useState("");

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError("")
        if(email === "" || password === ""){
            return;
        }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                //console.log(loggedUser);
                form.reset();
                // navigate("/", { replace: true });
                navigate(from, { replace: true });
            })
            .catch(error => {
                //console.log(error.message);
                setError("Incorrect Email or Password!");
            })
       // console.log(email, password);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                //console.log(loggedUser);
                // navigate("/", { replace: true });
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError("Incorrect Email or Password!");
                //console.log(error.message);
            })
    }

    

    return (
        <div className='pt-10 pb-16 bg-slate-100'>
            <div className='w-2/5 max-sm:w-11/12 max-md:w-3/4 max-lg:w-1/2 bg-white mx-auto py-10 px-12 max-sm:px-4 shadow-2xl rounded-lg'>
                <h3 className='text-center text-3xl font-semibold max-sm:text-2xl'>Login your account</h3>
                <hr className='my-8' />
                <p className='text-red-600 text-center text-sm mb-4'>{error}</p>
                <form action="" className='px-4' onSubmit={handleLogin}>
                    <div className='mb-3'>
                        <label htmlFor="" className='block mb-1.5'>Email</label>
                        <input type="email" name="email" className='input-control' placeholder='Enter your email' />
                    </div>
                    <div className='mb-3 relative'>
                        <label htmlFor="" className='block  mb-1.5'>Password</label>
                        <input type={passShow ? "password" : "text"} name="password" className='input-control' placeholder='Enter your password' />
                        <small onClick={() => setPassShow(!passShow)} className='absolute right-6 top-11 text-base text-slate-600'>
                            {passShow ? <span>{<FaEyeSlash></FaEyeSlash>}</span> : <span>{<FaEye></FaEye>}</span>}
                        </small>
                    </div>
                    <button type="submit" className='w-full py-1 mt-4 hover:bg-slate-800 text-lg font-semibold text-white bg-slate-600 rounded'>Login</button>
                    <p className='mt-2 text-sm  text-slate-600 text-end'>You don't have an account? <Link to="/register" className='text-orange-600'>Register</Link></p>
                    <div className='mt-4'>
                    <button type="submit" onClick={handleGoogleSignIn} className='other-login-btn'><FaGoogle></FaGoogle>Continue with Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;