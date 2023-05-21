
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

        <div>
            {/* <Tabs forceRenderTabPanel defaultIndex={1} >
                    <TabList>
                        <Tab>The Simpsons</Tab>
                        <Tab>Futurama</Tab>
                    </TabList>

                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList>
                                <Tab>Homer Simpson</Tab>
                                <Tab>Marge Simpson</Tab>
                                <Tab>Bart Simpson</Tab>
                                <Tab>Lisa Simpson</Tab>
                                <Tab>Maggie Simpson</Tab>
                            </TabList>
                            <TabPanel>
                                <p>Husband of Marge; father of Bart, Lisa, and Maggie.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Homer_Simpson_2006.png/212px-Homer_Simpson_2006.png" alt="Homer Simpson" />
                            </TabPanel>
                            <TabPanel>
                                <p>Wife of Homer; mother of Bart, Lisa, and Maggie.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Marge_Simpson.png/220px-Marge_Simpson.png" alt="Marge Simpson" />
                            </TabPanel>
                            <TabPanel>
                                <p>Oldest child and only son of Homer and Marge; brother of Lisa and Maggie.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png" alt="Bart Simpson" />
                            </TabPanel>
                            <TabPanel>
                                <p>Middle child and eldest daughter of Homer and Marge; sister of Bart and Maggie.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Lisa_Simpson.png/200px-Lisa_Simpson.png" alt="Lisa Simpson" />
                            </TabPanel>
                            <TabPanel>
                                <p>Youngest child and daughter of Homer and Marge; sister of Bart and Lisa.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Maggie_Simpson.png/223px-Maggie_Simpson.png" alt="Maggie Simpson" />
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                    <TabPanel>
                        <Tabs forceRenderTabPanel>
                            <TabList>
                                <Tab>Philip J. Fry</Tab>
                                <Tab>Turanga Leela</Tab>
                                <Tab>Bender Bending Rodriguez</Tab>
                                <Tab>Amy Wong</Tab>
                                <Tab>Professor Hubert J. Farnsworth</Tab>
                                <Tab>Doctor John Zoidberg</Tab>
                            </TabList>
                            <TabPanel>
                                 <p>Protagonist, from the 20th Century. Delivery boy. Many times great-uncle to Professor Hubert Farnsworth. Suitor of Leela.</p>
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png" alt="Philip J. Fry" /> 
                            </TabPanel> 
                            <TabPanel>
                                <p>Mutant cyclops. Captain of the Planet Express Ship. Love interest of Fry.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Turanga_Leela.png/150px-Turanga_Leela.png" alt="Turanga Leela" />
                            </TabPanel>
                            <TabPanel>
                                <p>A kleptomaniacal, lazy, cigar-smoking, heavy-drinking robot who is Fry's best friend. Built in Tijuana, Mexico, he is the Planet Express Ship's cook.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png" alt="Bender Bending Rodriguez" />
                            </TabPanel>
                            <TabPanel>
                                <p>Chinese-Martian intern at Planet Express. Fonfon Ru of Kif Kroker.</p>
                            </TabPanel>
                            <TabPanel>
                                <p>Many times great-nephew of Fry. CEO and owner of Planet Express delivery company. Tenured professor of Mars University.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/FuturamaProfessorFarnsworth.png/175px-FuturamaProfessorFarnsworth.png" alt="Professor Hubert J. Farnsworth" />
                            </TabPanel>
                            <TabPanel>
                                <p>Alien from Decapod 10. Planet Express' staff doctor and steward. Has a medical degree and Ph.D in art history.</p>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png" alt="Doctor John Zoidberg" />
                            </TabPanel>
                        </Tabs>
                    </TabPanel>
                </Tabs> */}
        </div>
        </div>
    );
};

export default Random;