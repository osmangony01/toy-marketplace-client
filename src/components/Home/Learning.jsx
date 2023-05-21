import { GoChevronRight } from "react-icons/go";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Learning = () => {
    
    useEffect(()=>{
        AOS.init();
    },[])

    return (
        <div className='bg-[#e3e4e55c] py-20 '>
            <div className='w-3/4 mx-auto'>
                <h2 className='text-center text-3xl font-bold mb-4 text-orange-500'>Hands-On Learning Fun</h2>
                <p className='text-center'> Immerse yourself in the world of hands-on learning fun with our educational toys. Through interactive experiences and engaging activities, children can explore, experiment, and discover while having a great time. Our toys promote active participation, critical thinking, and problem-solving skills, making learning an enjoyable adventure filled with creativity and excitement.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                    <div data-aos="fade-down-right" data-aos-duration="2000">
                        <img  src="/images/learning.jpg" alt="" className='w-full rounded'/>
                    </div>
                    <div className='' data-aos="fade-left" data-aos-duration="2000">
                        <h2 className='text-xl font-bold mb-1'>Features of Educational and Learning Toys</h2>
                        <p className='py-1 flex items-center '> <span className="mr-2"><GoChevronRight></GoChevronRight></span> Promotes Active Learning</p>
                        <p className='py-1 flex items-center '> <span className="mr-2"><GoChevronRight></GoChevronRight></span>Enhances Cognitive Development</p>
                        <p className='py-1 flex items-center '> <span className="mr-2"><GoChevronRight></GoChevronRight></span>Fosters Curiosity and Imagination</p>
                        <p className='py-1 flex items-center '> <span className="mr-2"><GoChevronRight></GoChevronRight></span>Adaptability and Progression</p>
                        <p className='py-1 flex items-center '> <span className="mr-2"><GoChevronRight></GoChevronRight></span>Feedback and Reinforcement</p>
                        <p className='py-1 flex items-center '> <span className="mr-2"><GoChevronRight></GoChevronRight></span>Parental Involvement</p>
                        <p className='py-1 flex items-center '> <span className="mr-2"><GoChevronRight></GoChevronRight></span>Durability and Safety</p>
                        <p className='py-1 flex items-center '> <span className="mr-2"><GoChevronRight></GoChevronRight></span>Open-Ended Play</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learning;