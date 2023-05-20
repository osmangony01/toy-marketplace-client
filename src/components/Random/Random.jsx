
import { useState } from "react";

import img1 from '../../../public/images/banner/b1.png';
import img2 from '../../../public/images/banner/b2.png';
import img3 from '../../../public/images/banner/b3.png';
import img4 from '../../../public/images/banner/b4.png';
import img5 from '../../../public/images/banner/b5.png';
import { Carousel } from "flowbite-react";

const Random = () => {
    const [userControl, setUserControl] = useState(true);
    // from-indigo-500 via-purple-500 to-pink-500
    // from-[#151515] via-[rgba(21, 21, 21, 0)]
    const bannerContent = <>
        <div className="absolute h-full left-0 top-0 right-0 bg-[#151515] bg-opacity-50">
            <div className=' absolute  w-[2/3] md:w-[2/4] text-white space-y-5 top-10 left-12 right-12 md:right-0  md:left-[calc(50%-300px)] md:top-[calc(50%-150px)]'>
                <h2 className='text-lg font-bold sm:text-2xl md:text-5xl' >Engaging Educational <br />Toys for Curious Minds</h2>
                <p className=''>Unleash curiosity and foster knowledge with interactive toys that inspire exploration and ignite a love for learning</p>
                <div>
                    <button className="btn btn-primary bg-orange-600 mr-4 border-0">Discover More</button>
                </div>
            </div>
        </div>
    </>

    return (
        <div>



            <div>
                {/* <img src="https://i.ibb.co/nCSJ958/Toy-Wave.webp" alt="" /> */}
            </div>

            <div className="h-[280px] sm:h-[300px] md:h-[400px] xl:h-[500px]">
                <Carousel className="">
                    <div className="relative">
                        <img src={img1} alt="..." className="h-[200px] sm:h-[300px] md:h-[400px] xl:h-[500px] w-full"/>
                        {bannerContent}
                    </div>
                    <div className="relative">
                    <img src={img2} alt="..." className="h-[280px] sm:h-[300px] md:h-[400px] xl:h-[500px] w-full"/>
                        {bannerContent}
                    </div>
                    <div className="relative">
                    <img src={img3} alt="..." className="h-[280px] sm:h-[300px] md:h-[400px] xl:h-[500px] w-full"/>
                        {bannerContent}
                    </div>
                    <div className="relative">
                    <img src={img4} alt="..." className="h-[280px] sm:h-[300px] md:h-[400px] xl:h-[500px] w-full"/>
                        {bannerContent}
                    </div>
                    <div className="relative">
                    <img src={img5} alt="..." className="h-[280px] sm:h-[300px] md:h-[400px] xl:h-[500px] w-full"/>
                        {bannerContent}
                    </div>
                </Carousel>
            </div>



            <div className="carousel w-full object-contain">
            <div id="slide1" className="carousel-item relative w-full ">
               
               
                <img src={img1} className="w-full" />
                     
                <div className="absolute h-full left-0 top-0 right-0 bg-gradient-to-r from-[#151515] via-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-5 pl-24 pt-24'>
                        <h2 className='text-5xl font-bold' >Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p className=''>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary bg-orange-600 mr-4">Discover More</button>
                            <button className="btn btn-outline border-white text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default Random;