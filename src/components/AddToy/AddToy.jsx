import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const AddToy = () => {

    const [toyCategory, setToyCategory] = useState([]);
    const [toySubCategory, setToySubCategory] = useState([]);

    const [getSubitem, setGetSubitem] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');


    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch(`http://localhost:5000/toyCategory`)
            .then(res => res.json())
            .then(data => setToyCategory(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/toySubCategory`)
            .then(res => res.json())
            .then(data => setToySubCategory(data))
    }, [])

    console.log(toyCategory);
    console.log(toySubCategory);

    const handleSelectedCategory = (event) => {
        setSelectedCategory(event.target.value);
        const id = event.target.value;
        console.log(id)
        const url = `http://localhost:5000/toySubCategory/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setGetSubitem(data);
            })
    }
    // console.log(selectedOption);
    // console.log(getSubitem)


    const handleSelectedSubCategory = (event) => {
        setSelectedSubCategory(event.target.value);
    }

    const handleAddToy = (e) => {
        e.preventDefault();
        const from = e.target;
        const categoryId = selectedCategory;
        const subCategoryId = selectedSubCategory;
        const toyName = from.toyname.value;
        const price = from.price.value;
        const rating = from.rating.value;
        const quantity = from.quantity.value;
        const photoURL = from.photo_url.value;
        const sellerName = from.seller_name.value;
        const sellerEmail = from.seller_email.value;
        const details = from.details.value;
        
        const newToy = {categoryId, subCategoryId, toyName, price, rating, quantity, photoURL, sellerName, sellerEmail, details};
        console.log(newToy);
        fetch('http://localhost:5000/addtoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                from.reset();
            })

    }

    return (
        <div>
            <div className='w-full px-5 mx-auto md:w-3/4 lg:w-2/3 my-10'>
                <h2 className='text-center text-3xl text-orange-500 font-bold mb-10'>Add New Toy</h2>
                <form action="" onSubmit={handleAddToy}>
                    <div className='grid grid-cols-2 gap-5 mt-4'>
                        <div>
                            <label htmlFor="" className='pb-2 block'>Category</label>
                            <div>
                                <select className='input-control' value={selectedCategory} onChange={handleSelectedCategory} required>
                                    <option value="" disabled selected>Select a category</option>
                                    {
                                        toyCategory.map(c => <option
                                            key={c._id}
                                            value={c.categoryId}>
                                            {c.categoryName}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='pb-2 block'>Sub Category</label>
                            <div>
                                <select className='input-control' value={selectedSubCategory} onChange={handleSelectedSubCategory} required>
                                    <option value="" disabled selected>Select a sub category</option>
                                    {
                                        getSubitem.map(c => <option
                                            key={c._id}
                                            value={c.subCategoryId}>
                                            {c.subCategoryName}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5 mt-4'>
                        <div>
                            <label htmlFor="" className='pb-2 block'>Toy Name</label>
                            <div>
                                <input type="text" name='toyname' placeholder='Enter toy name' className='input-control' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='pb-2 block'>Price</label>
                            <div>
                                <input type="text" name="price" placeholder='Enter price' className='input-control' />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5 mt-4'>
                        <div>
                            <label htmlFor="" className='pb-2 block'>Rating</label>
                            <div>
                                <input type="text" name="rating" placeholder='Enter rating' className='input-control' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='pb-2 block'>Available quantity</label>
                            <div>
                                <input type="number" placeholder='Enter quantity' name="quantity" className='input-control' />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="" className='pb-2 block'>Photo URL</label>
                        <div>
                            <input type="text" placeholder='Enter photo url' name="photo_url" className='input-control' />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="" className='pb-2 block'>Details</label>
                        <div>
                            <textarea type="text" placeholder='Enter details' name="details" className='input-control' rows="4"></textarea>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5 mt-4'>
                        <div>
                            <label htmlFor="" className='pb-2 block'>Seller Name</label>
                            <div>
                                <input type="text" name="seller_name" placeholder='seller name' className='input-control' defaultValue={user?.displayName} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='pb-2 block'>Seller Email</label>
                            <div>
                                <input type="text" placeholder='seller email' name="seller_email" className='input-control' defaultValue={user?.email} disabled/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type='submit' className="btn btn-block my-4 bg-purple-500 hover:bg-purple-800 border-0">Add A Toy</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;