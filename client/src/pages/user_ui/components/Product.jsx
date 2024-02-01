import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CardContext, wishListContext } from '../../../App';

const Product = ({ product }) => {
    const { cardState, cardDispatch } = useContext(CardContext);
    const { wishListState, wishListDispatch } = useContext(wishListContext);

    const AddToBag = () => {
        let isInBag = false;
        cardState.cards.map( item => {
            if(item._id == product._id) {
                isInBag = true;
            }
        });
        if(!isInBag) {
            cardDispatch({ type: 'ADD_PRODUCT_TO_BAG', payload: product });
        }
    }

    const AddToWishList = () => {
        let isInWashList = false;
        wishListState.wishlist.map( item => {
            if(item._id == product._id) {
                isInWashList = true;
            }
        });
        if(!isInWashList) {
            wishListDispatch({ type: 'ADD_PRODUCT_TO_WISHLIST', payload: product });
        } 
    }

    return (
        <div className="mx-2 flex flex-col items-center md:items-start justify-between space-y-5 sm:space-y-1 cursor-pointer">
            <Link to={`/product-details${product._id}`}>
                <img className="rounded" width="200px" src={product.image} alt="" />
            </Link>
            <div className="space-y-2 w-full">
                <div>
                    <Link to={`/product-details${product.id}`}>
                        <h1 className="text-md text-gray-800">{product.title}</h1>
                    </Link>
                    <p className="text-sm text-gray-400">{product.category}</p>
                </div>
                <div>
                    <p className="text-md text-gray-800">${product.price}</p>
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <button onClick={AddToBag} className="text-md text-gray-800 border border-gray-800 rounded-sm px-2 py-1 hover:bg-gray-800 hover:text-white transition duration-500 ease-in-out">Add to card</button>
                        <svg onClick={AddToWishList} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 cursor-pointer text-gray-900 hover:text-red-600 transition duration-500 ease-in-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Product;