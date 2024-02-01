import { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileCardItem from './ProfileCardItem';

const MyCard = () => {
    const [products, setProducts] = useState([]);
    const [loading , setLoading] = useState(false);

    const getMycardList = async () => {
        try {
            setLoading(true);
            const request = await axios.post('http://localhost:7000/api/admin/get-limited-products', { counter: 5 });
            setProducts(request.data.message);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMycardList();
    }, []);

    if (loading) return (
        <div className="bg-white shadow-xl w-full rounded-xl space-y-10 flex flex-col  py-5 h-56 ">
            <div className="px-5">
                <h1 className="text-gray-500 text-xl ">Personal Info</h1>
                <div className="text-center h-36 flex justify-center items-center">
                    <h1>Loading...</h1>
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-h-max bg-white shadow-xl w-full rounded-xl space-y-5 flex flex-col py-10">
            <div className="px-5">
                <h1 className="text-gray-600 text-xl">Bag</h1>
            </div>
            <div className='divide-y divide-solid px-5 h-56 overflow-y-scroll'>
                {
                    products && 
                    products.map((product) => {
                        return(
                            <ProfileCardItem product={product} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default MyCard;