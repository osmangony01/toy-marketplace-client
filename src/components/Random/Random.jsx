
import { useState } from "react";

import img1 from '../../../public/images/banner/b1.png';
import img2 from '../../../public/images/banner/b2.png';
import img3 from '../../../public/images/banner/b3.png';
import img4 from '../../../public/images/banner/b4.png';
import img5 from '../../../public/images/banner/b5.png';

const Random = () => {
    const [userControl, setUserControl] = useState(true);



    return (
        // <div className=="navbar bg-base-100">
        //     <div className=="flex-1">
        //         <a className=="btn btn-ghost normal-case text-xl">daisyUI</a>
        //     </div>
        //     <div className=="flex-none">

        //         {/* <div className=="dropdown dropdown-end">
        //             <label tabIndex={0} className=="btn btn-ghost btn-circle avatar">
        //                 <div className=="w-10 rounded-full">
        //                     <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        //                 </div>
        //             </label>
        //             <ul tabIndex={0} className=="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        //                 <li><span>asl;dfkjasdl;fk</span></li>
        //                 <li><a>Logout</a></li>
        //             </ul>
        //         </div> */}

        //         <div className=="relative" onClick={() => setUserControl(!userControl)}>
        //             <label className=="btn btn-ghost btn-circle avatar">
        //                 <div className=="w-10 rounded-full">
        //                     <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        //                 </div>
        //             </label>
        //             {
        //                 userControl && <div className=="absolute right-0 top-10"> 
        //                     <ul className=="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        //                         <li><span>asl;dfkjasdl;fk</span></li>
        //                         <li><a>Logout</a></li>
        //                     </ul>
        //                 </div>
        //             }
        //         </div>
        //     </div>
        // </div>

        <div id="default-carousel" className="relative w-full" data-carousel="slide">
           
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
               
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={img1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
               
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={img2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
               
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={img3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={img4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
               
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img src={img5} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            </div>
           
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
          
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

    );
};

export default Random;