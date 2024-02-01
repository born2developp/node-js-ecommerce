import { useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';

const NewProductModel = ({ setProducts }) => {
    const [showModal, setShowModal] = useState(false);
    const [categories, setCategories] = useState([]);

    let initialProductInfo = {
        title: "",
        price: "",
        category: "",
        image: "",
        description: "",
    };

    const [productInfo, setProductInfo] = useState(initialProductInfo);

    const hanledChange = (event) => {
        setProductInfo({ ...productInfo, [event.target.name]: event.target.value });
    }

    const getProducts = async () => {
        try {
            const request = await axios.get('http://localhost:7000/api/admin/read-all-products');
            setProducts(request.data.message);
        } catch (err) {
            console.log(err);
        }
        // productDispatch({ type : 'GET_ALL_PRODUCTS' , payload: request.data });
    }

    const getCategories = async () => {
        try {
            const request = await axios.get('http://localhost:7000/api/admin/read-all-categories');
            // console.log(request.data.message);
            setCategories(request.data.message);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    const registerProduct = async (productInfo) => {
        try {
            const request = await axios.post('http://localhost:7000/api/admin/register-product', productInfo);
            setProductInfo(initialProductInfo);
            toast.success('Registered Successfully!', { duration: 3000 });
            getProducts();
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        registerProduct(productInfo);
    }

    return (
        <>
            <button onClick={() => setShowModal(true)} className="bg-gray-800 text-white py-2 px-2 border border-2 border-gray-800 rounded hover:bg-transparent hover:text-gray-800 transition duration-500 ease-in-out">Add New Product</button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-2xl">
                                        New Product
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto ">
                                    <form>
                                        <div className="space-y-5">
                                            <div className="flex justify-between space-x-5">
                                                <div className="flex flex-col space-y-1 w-1/2">
                                                    <label htmlFor="" className="text-gray-800 text-lg">Title</label>
                                                    <input onChange={hanledChange} name="title" type="text" className="border-2 border-gray-800 rounded px-2 py-0.5" />
                                                </div>
                                                <div className="flex flex-col space-y-1 w-1/2">
                                                    <label htmlFor="" className="text-gray-800 text-lg">Price</label>
                                                    <input onChange={hanledChange} name="price" type="number" className="border-2 border-gray-800 rounded px-2 py-0.5" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <label htmlFor="">Category</label>
                                                <select onChange={hanledChange} name="category" className="border-2 border-gray-800 rounded px-2 py-0.5">
                                                    <option>Choose One</option>
                                                    {
                                                        categories &&
                                                        categories.map(category => {
                                                            return (
                                                                <option value={category.title}>{category.title}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div className="flex justify-between space-x-5">
                                                <div className="flex flex-col space-y-2">
                                                    <label htmlFor="">Image</label>
                                                    <textarea
                                                        cols={30}
                                                        rows={8}
                                                        onChange={hanledChange}
                                                        name="image" type="text"
                                                        className="border-2 border-gray-800 rounded px-2 py-0.5 no-drag"
                                                    />
                                                </div>
                                                <div className="flex flex-col space-y-2">
                                                    <label htmlFor="">Description</label>
                                                    <textarea
                                                        onChange={hanledChange} name="description"
                                                        cols={30}
                                                        rows={8}
                                                        className="border-2 border-gray-800 rounded px-2 py-0.5 no-drag"
                                                    >
                                                    </textarea>
                                                </div>
                                            </div>

                                            <div className="flex justify-end">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}>
                                                    Close
                                                </button>
                                                <button
                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => {
                                                        handleSubmit(event);
                                                        setShowModal(false);
                                                    }}>
                                                    Save Changes
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default NewProductModel;