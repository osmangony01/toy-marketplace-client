import { useLoaderData } from "react-router-dom";
import Banner from "../Home/Banner";
import useTitle from "../../hooks/useTitle";


const ViewToy = () => {

    useTitle('DetailToy');
    
    const getToy = useLoaderData();
    console.log(getToy)
    const { toyName, price, rating, quantity, photoURL, sellerName, sellerEmail, details } = getToy;


    return (
        <div>
            {/* <Banner></Banner> */}
            <div className="py-20 bg-base-200">
                <h2 className="text-4xl text-center mb-10 text-orange-500 font-bold">Toy Detail</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl w-3/4 mx-auto gap-8 p-10 rounded-md">
                    <div>
                        <img src={photoURL} alt=""  className="w-full"/>
                    </div>
                    <div>
                        <p className="py-1"><span className="font-bold">Toy Name: </span> {toyName}</p>
                        <p className="py-1"><span className="font-bold">Seller Name: </span> {sellerName}</p>
                        <p className="py-1"><span className="font-bold">Seller Email: </span> {sellerEmail}</p>
                        <p className="py-1"><span className="font-bold">Price: </span>$ {price}</p>
                        <p className="py-1"><span className="font-bold">Quantity: </span> {quantity}</p>
                        <p className="py-1"><span className="font-bold">Rating: </span> {rating}</p>
                        <p className="py-1"><span className="font-bold">Details: </span> {details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
            
};

            export default ViewToy;