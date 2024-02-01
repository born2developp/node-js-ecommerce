import { Link } from 'react-router-dom';

const CarouselItem = ({ product }) => {
    return (
        <div className="flex flex-col md:flex-row p-16 space-y-12 md:space-x-6">
            <div className="flex-1 flex justify-center">
                <img className="rounded" width="350px" src={product.image} alt="" />
            </div>
            <div className="flex-1 flex flex-col md:items-start md:justify-around  space-y-10">
                <div className="space-y-5 flex sm:flex-col justify-center">
                    <div className="text-center sm:text-start space-y-3 sm:space-y-0">
                        <h1 className="text-4xl text-gray-800">{product.title}</h1>
                        <p className="text-gray-400">{product.category}</p>
                    </div>
                    <p className="hidden sm:flex text-gray-700">{product.description}</p>
                </div>
                <Link to={`/product-details${product._id}`}>
                    <button className="w-full  sm:flex bg-gray-800 text-white py-3 px-4 border border-2 border-gray-800 rounded hover:bg-transparent hover:text-gray-800 hover:-translate-y-3 transition duration-500 ease-in-out">Buy Now</button>
                </Link>
            </div>
        </div>
    );
}

export default CarouselItem;