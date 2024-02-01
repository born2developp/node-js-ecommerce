import { useContext, useEffect } from 'react';
import axios from 'axios';
import Product from "./Product";
import { ProductContext } from '../../../App';
import { useState } from 'react';

const Products = () => {
    const { productState, productDispatch } = useContext(ProductContext);
    const [filterProducts, setFilterProducts] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    let filter = [];

    const getCategories = async () => {
        try {
            const request = await axios.get('http://localhost:7000/api/admin/read-all-categories');
            setCategories(request.data.message);
        } catch (err) {
            console.log(err);
        }
    }

    const getProducts = async () => {
        try {
            setLoading(true);
            const request = await axios.get('http://localhost:7000/api/admin/read-all-products');
            productDispatch({ type: 'GET_ALL_PRODUCTS', payload: request.data.message });
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (event) => {
        setIsFiltered(true);
        setFilterProducts([]);
        productState.products.map((product) => {
            product.category == event.target.value && filter.push(product);
        });
        setFilterProducts(filter);
    }

    const options = {
        method: 'GET',
        url: 'https://job-listings.p.rapidapi.com/api/job/details/',
        params: {
            url: 'https://www.indeed.co.in/rc/clk?jk=8fd51fdef5282f41&fccid=a4e4e2eaf26690c9&vjs=3'
        },
        headers: {
            'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
            'X-RapidAPI-Host': 'job-listings.p.rapidapi.com'
        }
    };



    const getJobs = async () => {
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProducts();
        getCategories();
        getJobs();
    }, []);

    if (loading) return (
        <div className='flex flex-col items-center space-y-10 mt-12 mb-6'>
            <h1 className="text-3xl text-gray-800">Products</h1>
            <h1 className='text-gary-800 text-base'>Loading...</h1>
        </div>
    );

    return (
        <div className='flex flex-col items-center space-y-10 mt-12 mb-6' id="#products">
            <h1 className="text-3xl text-gray-800">Products</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-y-5 gap-x-4 md:gap-x-8 lg:gap-x-12 mx-2'>
                {
                    categories &&
                    categories.map((category) => {
                        return (
                            <button onClick={handleChange} className='bg-transparent text-gray-800 border border-1 border-gray-800 py-1 px-2 rounded-sm hover:bg-gray-800 hover:text-white transition duration-500 ease-in-out' value={category.title}>{category.title}</button>
                        );
                    })
                }
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-4 mx-6 my-2">
                {
                    productState && !isFiltered ?
                        productState.products.map(product => {
                            return (
                                <Product product={product} />
                            );
                        })
                        :
                        filterProducts.map((product) => {
                            return (
                                <Product product={product} />
                            )
                        })
                }
            </div>
        </div>
    );
}

export default Products;