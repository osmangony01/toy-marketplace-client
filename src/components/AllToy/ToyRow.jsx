import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ToyRow = ({ toy }) => {

    const [subCategory, setSubCategory] = useState('');
    const { _id, subCategoryId, toyName, price, quantity, sellerName } = toy

    useEffect(() => {
        const url = `http://localhost:5000/subCategory/${subCategoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSubCategory(data.subCategoryName))
    }, [])

    return (
        <tr>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td><Link to={`/toy/${_id}`}><button className="btn btn-sm bg-purple-500 hover:bg-purple-800 border-0 capitalize" >View Details</button></Link></td>
        </tr>
    );
};

export default ToyRow;