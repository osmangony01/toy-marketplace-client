

const ShopCard = ({ c }) => {
    const {} = c;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img src="https://i.ibb.co/T8jQgpP/Robotic-Soccer-Set.jpg" className="w-full h-[180px]" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;