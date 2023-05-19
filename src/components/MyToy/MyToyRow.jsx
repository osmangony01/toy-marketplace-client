import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MyToyRow = ({ toy }) => {

    const [subCategory, setSubCategory] = useState('');
    const { _id, subCategoryId, toyName, price, quantity, sellerName, photoURL } = toy;

    useEffect(() => {
        const url = `http://localhost:5000/subCategory/${subCategoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSubCategory(data.subCategoryName))
    }, [])

    return (
        <tr>
            <td><img className="w-[200px] h-[150px] rounded-md" src={photoURL} alt="" /></td>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/updateMyToy/${_id}`}><button className="btn btn-sm bg-blue-500 hover:bg-blue-700 border-0 capitalize" >Update</button></Link>
                <Link><button className="btn btn-sm bg-purple-500 hover:bg-red-700 border-0 capitalize ml-2" >Delete</button></Link>
            </td>
        </tr>
    );
};

export default MyToyRow;