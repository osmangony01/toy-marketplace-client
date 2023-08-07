import useTitle from "../../hooks/useTitle";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Learning from "./Learning";
import ShopCategory from "./ShopCategory/ShopCategory";


const Home = () => {

    useTitle('Home');
    
    return (
        <div>
            <Banner></Banner>
            <Learning></Learning>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;