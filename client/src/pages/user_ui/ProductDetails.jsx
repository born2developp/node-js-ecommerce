import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { CardContext, ProductContext, wishListContext } from '../../App';
import Header from './components/Header';
import Footer from './components/Footer';

const ProductDetails = () => {
    const { _id } = useParams();
    const { productState, productDispatch } = useContext(ProductContext);
    const { cardState, cardDispatch } = useContext(CardContext);
    const { wishListState, wishListDispatch } = useContext(wishListContext);

    const spacificProduct = productState.products.filter(product => product._id == _id);

    const AddToBag = () => {
        let isInBag = false;
        cardState.cards.map(item => {
            if (item._id == product._id) {
                isInBag = true;
            }
        });
        if (!isInBag) {
            cardDispatch({ type: 'ADD_PRODUCT_TO_BAG', payload: spacificProduct });
        }
    }

    const AddToWishList = () => {
        let isInWashList = false;
        wishListState.wishlist.map(item => {
            if (item.id == product.id) {
                isInWashList = true;
            }
        });
        if (!isInWashList) {
            wishListDispatch({ type: 'ADD_PRODUCT_TO_WISHLIST', payload: spacificProduct });
        }
    }

    return (
        <div className="h-screen flex flex-col justify-between">
            <Header />
            <div className='flex items-center md:w-3/4 mx-4 md:mx-auto my-24 lg:mt-16'>
                <div className='flex flex-col sm:flex-row items-start mt-10 space-y-5 md:space-y-0 space-x-5 sm:mt-20 pb-10 pd:pb-0'>
                    <div className='flex-1 p-10 sm:p-0'>
                        <img className="rounded" src={spacificProduct[0].image} alt="" />
                    </div>
                    <div className='flex-1  space-y-5'>
                        <div className='space-y-2'>
                            <div >
                                <h1 className='text-2xl text-gray-800'>{spacificProduct[0].title}</h1>
                                <p className='text-gray-400'>{spacificProduct[0].category}</p>
                            </div>
                            <p className='text-gray-600'>{spacificProduct[0].description}</p>
                        </div>
                        <div className='flex'>
                            <p className='text-xl text-gray-800'>${spacificProduct[0].price}</p>
                        </div>
                        <div className='flex justify-between'>
                            <button onClick={AddToBag} className="text-md text-gray-800 border border-gray-800 rounded-sm px-2 py-1 hover:bg-gray-800 hover:text-white transition duration-500 ease-in-out">Add to card</button>
                            <svg onClick={AddToWishList} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 cursor-pointer text-gray-900 hover:text-red-600 transition duration-500 ease-in-out">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetails;