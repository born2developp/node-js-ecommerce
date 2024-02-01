import UpdateModel from "./UpdateModel";
import axios from "axios";
import { useEffect } from "react";
import toast from 'react-hot-toast';

const ProductItem = ({ product  , setProducts}) => {
    const getProducts = async () => {
        try {
            const request = await axios.get('http://localhost:7000/api/admin/read-all-products');
            setProducts(request.data.message);
        } catch (err) {
            console.log(err);
        }
    }

    const handleDelete = async () => {
        const {_id} = product;
        try{
            const request = await axios.delete(`http://localhost:7000/api/admin/delete-product/${_id}`);
            toast.success('Deleted Successfully!',{duration: 1000});
        }catch(err){
            console.log(err);   
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="flex items-center space-x-5 pt-3">
            <div>
                <img width="80px" className="rounded-sm" src={product.image} alt="" />
            </div>
            <div className="flex-1 space-y-1">
                <h1 className="text-gray-800">{product.title}</h1>
                <p className="text-gray-400 text-sm">{product.category}</p>
            </div>
            <div className="flex items-center space-x-10">
                <h1 className="text-gray-800">${product.price}</h1>
                <UpdateModel product={product} />
                <svg onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  cursor-pointer text-gray-900 hover:text-red-600 transition duration-500 ease-in-out">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </div>
        </div>
    );
}

export default ProductItem;