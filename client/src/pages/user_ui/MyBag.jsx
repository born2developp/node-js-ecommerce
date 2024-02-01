import { useContext } from "react";
import { CardContext } from "../../App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BagItem from "./components/BagItem";

const MyBag = () => {
    const { cardState, cardDispatch } = useContext(CardContext);

    if (cardState.cards.length == 0) return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <div className="h-screen flex justify-center items-center">
                <h1 className="text-gray-800 text-2xl md:text-3xl">No items in bag</h1>
            </div>
            <Footer />
        </div>
    )

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <div className="h-full flex mb-10 mt-32 h-full px-5">
                <div className="w-2/3 px-5 space-y-5">
                    <div className="bg-white shadow rounded  px-5 py-5 space-y-5 ">
                        <h1 className="text-gray-800 text-4xl">Card</h1>
                        <div className="divide-y divide-solid">
                            {
                                cardState.cards.map(product => {
                                    return (
                                        <BagItem product={product} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='w-1/3 h-full space-y-5'>
                    <div className="bg-white shadow-md px-5 rounded py-2  space-y-5">
                        <h1 className="text-gray-800 text-4xl">Checkout</h1>
                        <div className="flex justify-between">
                            <h1 className="text-gray-800 text-xl">Total</h1>
                            <h1 className="text-gray-800 text-xl">$198</h1>
                        </div>
                        <button className="w-full bg-gray-800 text-md text-white border border-gray-800 rounded-sm px-2 py-1 hover:bg-transparent hover:text-gray-800 transition duration-500 ease-in-out">Checkout Process</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MyBag;