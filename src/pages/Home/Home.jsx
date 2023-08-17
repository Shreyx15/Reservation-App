import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/propertyList";
import "./home.css";

function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by Property Type</h1>
                <PropertyList />
            </div>
        </div>
    );
}

export default Home;