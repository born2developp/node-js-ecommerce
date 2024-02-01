import Header from "./components/Header";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Products from "./components/Products";
import OurFeatures from "./components/OurFeatures";
import Footer from "./components/Footer";
import { useEffect } from "react";
import axios from "axios";

const UserHome = () => {
    return (
        <>
            <Header />
            <Slider />
            <Categories />
            <Products />
            <OurFeatures />
            <Footer />
        </>
    );
}

export default UserHome;