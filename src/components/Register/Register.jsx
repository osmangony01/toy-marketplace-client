import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister =()=>{

    }

    return (
        <div className='bg-slate-100  py-10'>
            <div className='w-2/5 max-sm:w-11/12 max-md:w-3/4 max-lg:w-1/2 bg-white mx-auto py-10 px-12 max-sm:px-4 shadow-2xl rounded-lg'>
                <h3 className='text-center text-3xl font-semibold'>Register your account</h3>
                <hr className='my-8' />
                <form action="" className='px-4' onSubmit={handleRegister}>
                    <div className='mb-4'>
                        <label htmlFor="" className='block  mb-2'>Name</label>
                        <input type="text" name="name" className='input-control' placeholder='Enter your name' required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block mb-2'>Email</label>
                        <input type="email" name="email" className='input-control' placeholder='Enter your email' required />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block  mb-2'>Password</label>
                        <input type="password" name="password" className='input-control' placeholder='Enter your password' required />
                        <small></small>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="" className='block  mb-2' >Photo URL</label>
                        <input type="text" name="photo" className='input-control' placeholder='Enter photo url' required />
                    </div>
                    <button className='w-full py-1 mt-5 hover:bg-slate-800 text-lg font-semibold text-white bg-slate-600 rounded' >Register</button>
                    <p className='mt-2 text-sm  text-slate-600 text-end'>Already have an account? <Link to="/login" className='text-orange-600'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;