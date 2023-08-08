import aboutImg from '../../../public/images/about-us.jpg';

const About = () => {
    return (
        <div className="py-16">
            <div className="w-3/4 mx-auto">
                <h2 className="text-3xl font-bold text-center">About US</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-10">
                    <div>
                        <h2 className='text-xl font-semibold pb-2'>Who we are</h2>
                        <p>
                            Welcome to PlaySmart, where the world of play comes alive! We are more than just an online marketplace; we are a gateway to joy, imagination, and endless possibilities. Our platform is built on the foundation of creating memorable moments for both young and young-at-heart individuals who cherish the magic of toys.
                        </p>
                        <br/>
                        <p className=''>We are dedicated to providing exceptional customer service, assisting you with any inquiries or concerns regarding our wide range of learning and engineering toys. Our team of experts is here to guide you through the selection process, offer recommendations, and ensure your educational journey is filled with excitement and growth. We value your feedback and are committed to creating an extraordinary experience for you. Get in touch with us today and let's embark on an educational adventure together!</p>
                    </div>
                    <div className='flex items-center'>
                        <img className='rounded ' src={aboutImg} alt="about" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;