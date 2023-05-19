import { useLoaderData } from "react-router-dom";


const ViewToy = () => {

    const getToy = useLoaderData();
    console.log(getToy)

    return (
        <div>
            this is a toy details
        </div>
    );
};

export default ViewToy;