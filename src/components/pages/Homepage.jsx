import Banner from "../Banner";
import Services from "../Services";
import AboutUs from "../AboutUs";
import RecommendedProduct from "../RecommendProduct";
import News from "../News";
import Partner from "../Partner";

const Homepage = () => {
    return (
        <div>
            <Banner />
            <Services />
            <AboutUs />
            <RecommendedProduct />
            <News />
            <Partner />
        </div>
    );
};

export default Homepage;