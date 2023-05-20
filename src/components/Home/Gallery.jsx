import img1 from '../../../public/images/banner/b1.png';
import img2 from '../../../public/images/banner/b2.png';
import img3 from '../../../public/images/banner/b3.png';
import img4 from '../../../public/images/banner/b4.png';
import img5 from '../../../public/images/banner/b5.png';

import img6 from '../../../public/toys/3D_DIY_DNA_Model.png'
import img7 from '../../../public/toys/Animal-and-Plant-Cell-Model.png';
import img8 from '../../../public/toys/atom_molecular_structure.jpg';
import img9 from '../../../public/toys/Balancing_Pendulumtoy.jpg';
import img10 from '../../../public/toys/chemistry-kids-set.png';
import img11 from '../../../public/toys/chemistry_activity_Wooden_set.png';
import img12 from '../../../public/toys/Digital_Music_Maker.png';
import img13 from '../../../public/toys/Electronic_Snap_Circuits_Kit.png';
import img14 from '../../../public/toys/geometry_shap.jpg';
import img15 from '../../../public/toys/letter.png';
import img16 from '../../../public/toys/magnetic-arithmetic-count.png';
import img17 from '../../../public/toys/MARBLE_MACHINE.png';
import img18 from '../../../public/toys/math-Counting-Frame.png';

// import img2 from '../../../public/images/banner/b2.png';
// import img3 from '../../../public/images/banner/b3.png';

import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";


const Gallery = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-20 text-orange-500 flex justify-center items-center gap-3'>
                <BiChevronsLeft color={'black'}></BiChevronsLeft>
                <span>Photo Gallery </span>
                <BiChevronsRight color={'black'}></BiChevronsRight>
            </h2>

            <div className="carousel mx-auto pt-10 pb-20">

                <div id="slide11" className="carousel-item relative w-full">
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 w-3/4 mx-auto'>
                        <div><img src={img1} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                        <div><img src={img2} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                        <div><img src={img3} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                        <div><img src={img4} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                        <div><img src={img5} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                        <div><img src={img6} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                    </div>
                    <div className="absolute flex justify-between  -bottom-16 left-[calc(50%-48px)] gap-4">
                        <a href="#slide33" className="btn btn-circle  border-0 bg-slate-300 hover:bg-slate-500">❮</a>
                        <a href="#slide22" className="btn btn-circle  border-0 bg-slate-300 hover:bg-slate-500">❯</a>
                    </div>
                </div>
                <div id="slide22" className="carousel-item relative w-full">
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 w-3/4 mx-auto'>
                        <div><img src={img7} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                        <div><img src={img8} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                        <div><img src={img9} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                        <div><img src={img10} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                        <div><img src={img11} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                        <div><img src={img12} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                    </div>
                    <div className="absolute flex justify-between  -bottom-16 left-[calc(50%-48px)] gap-4">
                        <a href="#slide11" className="btn btn-circle  border-0 bg-slate-300 hover:bg-slate-500">❮</a>
                        <a href="#slide33" className="btn btn-circle  border-0 bg-slate-300 hover:bg-slate-500">❯</a>
                    </div>
                </div>
                <div id="slide33" className="carousel-item relative w-full">
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 w-3/4 mx-auto'>
                        <div><img src={img13} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                        <div><img src={img14} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                        <div><img src={img15} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                        <div><img src={img16} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                        <div><img src={img17} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                        <div><img src={img18} className="w-full h-[240px] rounded-md drop-shadow-xl" /></div>
                    </div>
                    <div className="absolute flex justify-between  -bottom-16 left-[calc(50%-48px)] gap-4">
                        <a href="#slide22" className="btn btn-circle  border-0 bg-slate-300 hover:bg-slate-500">❮</a>
                        <a href="#slide11" className="btn btn-circle  border-0 bg-slate-300 hover:bg-slate-500">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;