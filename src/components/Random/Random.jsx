
import { useState } from "react";

import img1 from '../../../public/images/banner/b1.png';
import img2 from '../../../public/images/banner/b2.png';
import img3 from '../../../public/images/banner/b3.png';
import img4 from '../../../public/images/banner/b4.png';
import img5 from '../../../public/images/banner/b5.png';
import { Carousel } from "flowbite-react";

const Random = () => {
    const [userControl, setUserControl] = useState(true);



    return (
        <div>



            <div>
                {/* <img src="https://i.ibb.co/nCSJ958/Toy-Wave.webp" alt="" /> */}
            </div>

            <div className="h-56 sm:h-[200px] md:h-[400px] xl:h-[500px]">
                <Carousel className="">
                    <div className="relative">
                        <img
                            src={img1}
                            alt="..."
                        />
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
                    </div>
                    <div className="relative">
                        <img
                            src={img2}
                            alt="..."
                        />
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
                    </div>
                    <div className="relative">
                        <img
                            src={img3}
                            alt="..."
                        />
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
                    </div>
                    <div className="relative">
                        <img
                            src={img4}
                            alt="..."
                        />
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
                    </div>
                    <div className="relative">
                        <img
                            src={img5}
                            alt="..."
                        />
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
                    </div>
                </Carousel>
            </div>

            
            
        </div>
    );
};

export default Random;