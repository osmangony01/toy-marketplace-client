import { useEffect, useState } from "react";
import ToyRow from "./ToyRow";
import Banner from "../Home/Banner";
import useTitle from "../../hooks/useTitle";


const AllToy = () => {
    const [toys, setToys] = useState([]);
    const [duplicateToy, setDuplicateToy] = useState([]);
    const [selectedData, setSelectedData] = useState('')

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useTitle('AllToy');

    useEffect(() => {
        fetch(`https://toys-server-side.vercel.app/toys`)
            .then(res => res.json())
            .then(data => {
                setDuplicateToy(data)
                setToys(data);
                setSearchResults(data.slice(0, 20));
            })
    }, [])

    useEffect(() => {

        if (selectedData === "all") {
            setSearchResults(duplicateToy);
        }
        if (selectedData === 'limit20') {
            setSearchResults(duplicateToy.slice(0, 20));
        }




    }, [selectedData])

    console.log(toys);


    const handleInputChange = (e) => {
        const search = e.target.value
        setSearchQuery(search);
        if (search === "") {
            setSearchResults(toys);
        }
    };


    const handleSelectData = (e) => {
        setSelectedData(e.target.value);
        console.log(selectedData);
    }

    const handleSearch = () => {
        if (searchQuery === "") {
            setSearchResults(toys);
            return;
        }
        else {
            const filteredResults = toys.filter((toy) =>
                toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(filteredResults);
        }


    }




    return (
        <div>
            <Banner></Banner>
            <div className="w-3/4 mx-auto my-10">
                <h1 className="text-center text-3xl mb-8 font-bold text-orange-500">All Toy Here</h1>
                <div className="flex justify-between items-center">
                    <div>
                        <select className="select select-bordered w-full max-w-xs" value={selectedData} onChange={handleSelectData}>
                            <option value="" disabled selected>20</option>
                            <option value="limit20">20</option>
                            <option value="all">All</option>
                        </select>
                    </div>
                    <div>
                        <div className="input-group">
                            <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Search…" name="search" className="input input-bordered" />
                            <button className="btn btn-square" onClick={handleSearch}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
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
                            {searchResults.length > 0 ? <>
                                {
                                    searchResults.map(toy => <ToyRow
                                        key={toy._id}
                                        toy={toy}>
                                    </ToyRow>)
                                }
                            </>
                                : <p className="text-red-500 text-center py-2 font-bold">No results found</p>
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToy;