import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {CardContext, wishListContext} from '../../../App';

const Header = () => {
    // show or hide menu in mobile devices
    const [show, setShow] = useState(false);
    // card context
    const {cardState , cardDispatch} = useContext(CardContext);
    // wish list context
    const {wishListState , wishListDispatch} = useContext(wishListContext);
    
    return (
        <div className="bg-white shadow-lg py-4 flex flex-col justify-between px-7 fixed z-50 top-0 w-full space-y-5">
            <div className="flex justify-between items-center">
                <div>
                    <Link to={'/user-home'}>
                        <h1 className=" text-2xl font-bold">Aisha  Market</h1>
                    </Link>
                </div>
                {!show &&
                    <div className="flex lg:hidden">
                        <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-9 cursor-pointer hover:bg-gray-200/50 p-1 rounded-full transition duration-500 ease-in-out font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                }
                {show &&
                    <div className="flex lg:hidden">
                        <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-9 cursor-pointer hover:bg-gray-200/50 p-1 rounded-full transition duration-500 ease-in-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m-15 0l15 15" />
                        </svg>
                    </div>
                }
                <div className="hidden lg:flex space-x-6">
                    <Link className="hover:text-gray-700" to={'/'}>Home</Link>
                    <Link className="hover:text-gray-700" to={''}>Categories</Link>
                    <Link className="hover:text-gray-700" to={''}>Products</Link>
                    <Link className="hover:text-gray-700" to={'/signin'}>Register</Link>
                    <Link className="hover:text-gray-700" to={'/login'}>Sign in</Link>
                </div>
                <div className="hidden lg:flex space-x-7">
                    <div>
                        <Link className="flex flex-col items-center" to={'/my-profile'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            <p className="text-sm">Profile</p>
                        </Link>
                    </div>
                    <div>
                        <Link className="flex flex-col items-center relative" to={'/my-bag'}>
                            <p className="text-xs font-bold absolute -top-3 left-5 bg-gray-800 text-white rounded-full px-2 py-1">{cardState.cards.length}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <p className="text-sm">Bag</p>
                        </Link>
                    </div>
                    <div>
                        <Link className="flex flex-col items-center relative" to={'/my-wishlist'}>
                            <p className="text-xs font-bold absolute -top-3 left-8 bg-gray-800 text-white rounded-full px-2 py-1">{wishListState.wishlist.length}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                            </svg>
                            <p className="text-sm">Wishlist</p>
                        </Link>
                    </div>
                </div>
            </div>
            {show &&
                <div className="flex flex-col flex lg:hidden space-y-2 px-3 divide-y divide-solid">
                    <Link className="pt-1" to={'user_home'}>Home</Link>
                    <Link className="pt-1" to={'signin'}>Categories</Link>
                    <Link className="pt-1" to={'/'}>Products</Link>
                    <Link className="pt-1" to={'/'}>Profile</Link>
                    <Link className="pt-1" to={''}>Card</Link>
                    <Link className="pt-1" to={''}>Wishlist</Link>
                    <Link className="pt-1" to={''}>Register</Link>
                    <Link className="pt-1" to={'/login'}>Sign in</Link>
                </div>
            }
        </div>
    );
}

export default Header;