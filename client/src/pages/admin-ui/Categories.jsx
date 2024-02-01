import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Footer from "../user_ui/components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import CategoryItem from './components/CategoryItem';
import NewCategoryModel from './components/NewCategoryModel';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const request = await axios.get('http://localhost:7000/api/admin/read-all-categories');
        setCategories(request.data.message);
    }

    useEffect(() => {
        getCategories();
    });

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <div className="h-full mt-20 flex mx-4 md:mx-2 md:space-x-5 py-5">
                <SideBar />
                <div className="w-full md:w-5/6 rounded bg-white shadow-xl space-y-10">
                    <div className="flex items-center justify-between mx-5 my-10">
                        <Link to={'/admin-categories'}>
                            <h1 className="text-gray-800 text-2xl">Categories</h1>
                        </Link>
                        <NewCategoryModel setCategories={setCategories} />
                    </div>
                    <div className="space-y-5 mx-5 divide-y space-y-5 py-10">
                        {
                            categories &&
                            categories.map(category => {
                                return (
                                    <CategoryItem category={category} setCategories={setCategories} />
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

export default Categories;