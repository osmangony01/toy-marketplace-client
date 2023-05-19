import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyRow from "./MyToyRow";


const MyToy = () => {

    const [myToy, setMyToy] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/mytoy?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToy(data));

    }, [user])

    console.log(myToy);
    return (
        <div className="w-3/4 mx-auto">
            <h1 className="text-center text-lg">All My Toy</h1>
            <div className="overflow-x-auto w-full my-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Photo</th>
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
                            myToy.map(toy => <MyToyRow key={toy._id} toy={toy}></MyToyRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToy;