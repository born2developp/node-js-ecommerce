import { useContext } from "react";
import { CardContext, wishListContext } from "../../../App";

const WishlistItem = ({product}) => {
    const { cardState, cardDispatch } = useContext(CardContext);
    const { wishListState, wishListDispatch } = useContext(wishListContext);

    const AddToBag = () => {
        let isInBag = false;
        cardState.cards.map( item => {
            if(item.id == product.id) {
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
            if(item.id == product.id) {
                isInWashList = true;
            }
        });
        if(!isInWashList) {
            wishListDispatch({ type: 'ADD_PRODUCT_TO_WISHLIST', payload: product });
        } 
    }

    return (
        <div className='bg-white shadow-md flex flex-col md:flex-row items-center my-5 rounded space-y-10 md:space-y-0 md:space-x-10 px-5 md:px-10 py-3'>
            <div className=''>
                <img className='rounded h-60 md:h-60' src={product.image} alt="" />
            </div>
            <div className="flex-1 flex flex-col space-y-4">
                <div className="space-y-2">
                    <h1 className='text-2xl text-gray-800'>{product.title}</h1>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-gray-400 text-sm">{product.category}</p>
                </div>
                <div >
                    <h1 className="text-gray-800 text-xl">${product.price}</h1>
                </div>
                <div className="flex justify-between items-center">
                    <button onClick={AddToBag} className="text-md text-gray-800 border border-gray-800 rounded-sm px-2 py-1 hover:bg-gray-800 hover:text-white transition duration-500 ease-in-out">Add to card</button>
                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  cursor-pointer text-gray-900 hover:text-red-600 transition duration-500 ease-in-out">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>                  
                </div>
            </div>
        </div>
    );
}

export default WishlistItem;