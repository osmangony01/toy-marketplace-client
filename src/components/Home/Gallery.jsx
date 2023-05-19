import img1 from '../../../public/images/banner/b1.png';
// import img2 from '../../../public/images/banner/b2.png';
// import img3 from '../../../public/images/banner/b3.png';



const Gallery = () => {
    return (
        <div className="carousel mx-auto my-10">
            <div id="slide11" className="carousel-item relative w-full">
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-3/4 mx-auto'>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-12 top-1/2">
                    <a href="#slide33" className="btn btn-circle  border-0 bg-slate-300 hover:bg-slate-500">❮</a>
                    <a href="#slide22" className="btn btn-circle  border-0 bg-slate-300 hover:bg-slate-500">❯</a>
                </div>
            </div>
            <div id="slide22" className="carousel-item relative w-full">
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-3/4 mx-auto'>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-12 top-1/2">
                    <a href="#slide11" className="btn btn-circle  border-0 bg-slate-300 hover:bg-slate-500">❮</a>
                    <a href="#slide33" className="btn btn-circle  border-0 bg-slate-300 hover:bg-slate-500">❯</a>
                </div>
            </div>
            <div id="slide33" className="carousel-item relative w-full">
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-3/4 mx-auto'>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                    <div><img src={img1} className="w-full h-[240px] rounded-md" /></div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-12 top-1/2">
                    <a href="#slide22" className="btn btn-circle  border-0 bg-slate-300 hover:bg-slate-500">❮</a>
                    <a href="#slide11" className="btn btn-circle  border-0 bg-slate-300 hover:bg-slate-500">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Gallery;