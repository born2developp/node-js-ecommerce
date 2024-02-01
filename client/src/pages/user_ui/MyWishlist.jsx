import { useContext } from "react";
import { wishListContext } from "../../App";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WishlistItem from "./components/WishlistItem";

const MyWishlist = () => {
    const { wishListState, wishListDispatch } = useContext(wishListContext);
    console.log(wishListState);

    if (wishListState.wishlist.length == 0) return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <div className="h-screen flex justify-center items-center">
                <h1 className="text-gray-800 text-2xl md:text-3xl">No items in wishlist</h1>
            </div>
            <Footer />
        </div>
    )

    return (
        <div className="h-screen flex flex-col justify-between bg-slate-50">
            <Header />
            <div className="md:w-2/3 mx-10  md:mx-auto flex flex-col justify-center items-center mb-10 mt-32">
                {
                    wishListState.wishlist.map( product => {
                        return <WishlistItem product={product} />
                    })
                }
            </div>
            <Footer />
        </div>
    );
}

export default MyWishlist;