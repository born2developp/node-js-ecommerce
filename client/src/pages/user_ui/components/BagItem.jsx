import { useState } from "react";

const BagItem = ({ product }) => {
    let [price , setPrice] = useState(product.price);
    let [quantity , setQuantity] = useState(1);

    const origenPrice = product.price; 

    const increaseQuantity = () => {
        console.log(quantity);
        console.log(price);
        setQuantity(quantity++);
        setPrice(origenPrice * quantity);
        console.log(quantity);
        console.log(price);
    }

    const decreaseQuantity = () => {
        if(quantity > 1) setQuantity(quantity - 1);
    }
    
    return (
        <div className="  flex justify-between  items-center space-x-7 py-4">
            <img width="80px" className="rounded" src={product.image} alt="" />
            <h1 className="text-gray-800 text-xl flex-1">{product.title}</h1>
            <div className="flex items-center space-x-8">
                <svg onClick={increaseQuantity}xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                </svg>
                <p className="text-gray-800 text-xl">{quantity}</p>
                <svg onClick={decreaseQuantity} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" d="M3 12h18" />
                </svg>
            </div>
            <div>
                <h1 className="text-gray-800 text-xl">{price}</h1>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  cursor-pointer text-gray-900 hover:text-red-600 transition duration-500 ease-in-out">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </div>
        </div>
    );
}

export default BagItem;