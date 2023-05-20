import Banner from "./Banner";
import Contact from "./Contact";
import Gallery from "./Gallery";
import ShopCategory from "./ShopCategory/ShopCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopCategory></ShopCategory>
            <Contact></Contact>
        </div>
    );
};

export default Home;