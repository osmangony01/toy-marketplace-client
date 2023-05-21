import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const UpdateToy = () => {
    useTitle('UpdateToy');

    const toy = useLoaderData();
    const { _id, categoryId, subCategoryId, toyName, price, rating, quantity, photoURL, sellerName, sellerEmail, details } = toy;

    const navigate = useNavigate();

    const handleUpdateToy = (e) => {
        e.preventDefault();
        const from = e.target;
        const toyName = from.toyname.value;
        const price = from.price.value;
        const rating = from.rating.value;
        const quantity = from.quantity.value;
        const details = from.details.value;

        const updateToy = { _id, categoryId, subCategoryId, toyName, price, rating, quantity, photoURL, sellerName, sellerEmail, details };
        //console.log(updateToy);

        fetch(`https://toys-server-side.vercel.app/updateToy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update Toy Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate("/mytoy", { replace: true });
                }

            })

    }
    //console.log(toy)
    return (
        <div className="bg-white mb-10">
            <div className='w-full px-5 mx-auto md:w-3/4 lg:w-2/3'>
                <h2 className='text-center text-3xl text-orange-500 font-bold my-10'>Update A Toy</h2>
                <form action="" onSubmit={handleUpdateToy}>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4'>
                        <div>
                            <label htmlFor="" className='pb-2 block'>Toy Name</label>
                            <div>
                                <input type="text" name='toyname' placeholder='Enter toy name' className='input-control' defaultValue={toyName} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='pb-2 block'>Price</label>
                            <div>
                                <input type="text" name="price" placeholder='Enter price' className='input-control' defaultValue={price} />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4'>
                        <div>
                            <label htmlFor="" className='pb-2 block'>Rating</label>
                            <div>
                                <input type="text" name="rating" placeholder='Enter rating' className='input-control' defaultValue={rating} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='pb-2 block'>Available quantity</label>
                            <div>
                                <input type="number" placeholder='Enter quantity' name="quantity" className='input-control' defaultValue={quantity} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="" className='pb-2 block'>Photo URL</label>
                        <div>
                            <input type="text" placeholder='Enter photo url' name="photo_url" className='input-control disabled:opacity-60' defaultValue={photoURL} disabled />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="" className='pb-2 block'>Details</label>
                        <div>
                            <textarea type="text" placeholder='Enter details' name="details" className='input-control' defaultValue={details} rows="4"></textarea>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4'>
                        <div>
                            <label htmlFor="" className='pb-2 block'>Seller Name</label>
                            <div>
                                <input type="text" name="seller_name" placeholder='seller name' className='input-control disabled:opacity-60' defaultValue={sellerName} disabled />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='pb-2 block'>Seller Email</label>
                            <div>
                                <input type="text" placeholder='seller email' name="seller_email" className='input-control disabled:opacity-60' defaultValue={sellerEmail} disabled />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type='submit' className="btn btn-block my-8 bg-purple-500 hover:bg-purple-800 border-0">Update Toy</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;