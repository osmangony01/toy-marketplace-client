import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="bg-[#e3e4e55c] py-16">
            <div className='w-3/4 mx-auto'>
                <h2 className='mb-10 font-bold text-2xl text-center'>Contact Us</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>

                    <div>
                        <div className='message-img' data-aos="fade-up" data-aos-duration="2000">
                            <div>
                                <img src="/images/contact-pages.png" className="rounded h-[250px] w-full" alt="" />
                            </div>
                        </div>
                        <div className="pt-4">

                            <div className='flex items-center gap-2 py-2'>
                                <FaPhoneAlt color='red'></FaPhoneAlt> <span><span className='font-semibold'>Phone:</span> +880123456789</span>
                            </div>
                            <div className='flex items-center gap-2 py-2'>
                                <MdEmail color='red'></MdEmail> <span><span className='font-semibold'>Email:</span> info123@gmail.com</span>
                            </div>
                            <div className='flex items-center gap-2 py-2'>
                                <IoLocationOutline color='red'></IoLocationOutline> <span><span className='font-semibold'>Address: </span>Chattogram, Bangladesh</span>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="2000">
                        <h2 className='text-lg font-bold mb-5'>Send Us A Message</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            <input type="text" placeholder='First Name' className='w-full px-3 py-2 border-slate-300 rounded mb-5' />
                            <input type="text" placeholder='Last Name' className='w-full px-3 py-2 border-slate-300 rounded mb-5' />
                        </div>
                        <div>
                            <input type="text" placeholder='Email' className='w-full px-3 py-2 border-slate-300 rounded mb-5' />
                        </div>
                        <div>
                            <textarea name="" id="" rows="8" placeholder='Message' className='w-full px-3 py-2 border-slate-300 rounded mb-5'></textarea>
                        </div>
                        <div>
                            <button className='border-0 px-10 py-2 rounded bg-purple-500 hover:bg-purple-800 text-white mb-10'>Send</button>
                        </div>
                    </div>

                </div>
            </div>


        </div>

    );
};

export default Contact;