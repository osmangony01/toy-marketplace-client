import { useEffect, useState } from "react";
import ToyRow from "./ToyRow";


const AllToy = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/toys`)
            .then(res => res.json())
            .then(data => setToys(data))
    },[])
    console.log(toys);

    return (
        <div className="w-3/4 mx-auto">
        <h1 className="text-center text-lg">All Toy Here</h1>
            <div className="overflow-x-auto w-full my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <ToyRow
                                key={toy._id}
                                toy={toy}>
                            </ToyRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToy;