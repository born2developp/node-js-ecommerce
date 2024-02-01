import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../user_ui/components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import ProductItem from "./components/ProductItem";
import NewProductModel from "./components/NewProductModel";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const  request  = await axios.get('http://localhost:7000/api/admin/read-all-products');
                setProducts(request.data.message);
            }catch (err) {
                console.log(err);
            }
        }

        getProducts();
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <div className="h-full mt-20 flex mx-4 md:mx-2 md:space-x-5 py-5">
                <SideBar />
                <div className="w-full md:w-5/6 rounded bg-white shadow-xl space-y-10">
                    <div className="flex items-center justify-between mx-5 my-10">
                        <Link to={'/admin-products'}>
                            <h1 className="text-gray-800 text-2xl">Products</h1>
                        </Link>
                        <NewProductModel setProducts = {setProducts}  />
                    </div>
                    <div className="space-y-5 mx-5 divide-y space-y-5 py-10">
                        {
                            products &&
                            products.map(product => {
                                return (
                                    <ProductItem product={product}  setProducts={setProducts} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Products;