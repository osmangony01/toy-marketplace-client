import Banner from "./Banner";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Learning from "./Learning";
import ShopCategory from "./ShopCategory/ShopCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Learning></Learning>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <Contact></Contact>
        </div>
    );
};

export default Home;