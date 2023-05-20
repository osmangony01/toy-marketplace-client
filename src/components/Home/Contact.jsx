

const Contact = () => {
    return (
       <div className="bg-[#e3e4e55c]">
         <div className='py-10 w-3/4 mx-auto '>
            <h2 className='mb-10 font-bold text-2xl text-center'>Contact Us</h2>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-12'>

                <div className='message-img'>
                    <div><img src="/images/contact-pages.png" className="rounded h-[250px] w-full" alt="" /></div>
                    <div className="pt-4"> We are dedicated to providing exceptional customer service, assisting you with any inquiries or concerns regarding our wide range of learning and engineering toys. Our team of experts is here to guide you through the selection process, offer recommendations, and ensure your educational journey is filled with excitement and growth. We value your feedback and are committed to creating an extraordinary experience for you. Get in touch with us today and let's embark on an educational adventure together!</div>
                </div>

                <div>
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
                        <button className='border-0 px-10 py-2 rounded bg-purple-500 hover:bg-purple-800 text-white'>Send</button>
                    </div>
                </div>

            </div>

        </div>
       </div>
    );
};

export default Contact;