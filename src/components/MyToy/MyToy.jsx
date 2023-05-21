import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";


const MyToy = () => {

    const [myToy, setMyToy] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/mytoy?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToy(data));

    }, [user])

    const handleDeleteToy = (id) => {
        console.log('delete');
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toy/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your data has been deleted.',
                                'success'
                            )
                            const remaining = myToy.filter(toy => toy._id !== id);
                            setMyToy(remaining);
                        }
                    })
            }
        })
    }

    console.log(myToy);
    return (
        <div className="w-3/4 mx-auto">
            <h1 className="text-center text-lg">All My Toy</h1>
            <div className="overflow-x-auto w-full my-10">
                <table className="table  table-compact w-full">
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
                            myToy.map(toy => <MyToyRow 
                            key={toy._id} 
                            toy={toy}
                            handleDeleteToy={handleDeleteToy}
                            >
                            </MyToyRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToy;