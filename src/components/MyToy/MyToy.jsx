import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const MyToy = () => {

    useTitle('MyToys');

    const [myToy, setMyToy] = useState([]);
    const [sortedToy, setSortedToy] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://toys-server-side.vercel.app/mytoy?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToy(data);
                setSortedToy(data);
            });

    }, [user])

    const handleSortedToyToPrice = () => {
        const url = `https://toys-server-side.vercel.app/toyToPrice?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToy(data))
    }

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
                fetch(`https://toys-server-side.vercel.app/toy/${id}`, {
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

    //console.log(myToy);
    return (
        <div className="w-3/4 mx-auto my-16">
            <h1 className="text-center text-3xl text-orange-500 font-bold">All My Toy</h1>
            <p className="text-end mb-5">
                <button className="btn btn-primary" onClick={handleSortedToyToPrice}>Sort By Price</button>
            </p>
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