import { Link } from "react-router-dom";


const ShopCard = ({ sc }) => {
    const { _id, toyName, price, rating, photoURL } = sc;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img src={photoURL} className="w-full h-[180px]" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p>Price: $ <span>{price}</span></p>
                <p>Rating: <span>{rating}</span></p>
                <div className="card-actions justify-end">
                    <Link to={`/toy/${_id}`}> <button className="btn  btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;