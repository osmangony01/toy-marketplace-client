import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ToyRow = ({ toy, index }) => {

    const [subCategory, setSubCategory] = useState('');
    const { _id, subCategoryId, toyName, price, quantity, sellerName } = toy

    useEffect(() => {
        const url = `https://toys-server-side.vercel.app/subCategory/${subCategoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSubCategory(data.subCategoryName))
    }, [])
    //console.log(index);

    return (
        <tr>
            <td>{index+1}</td>
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