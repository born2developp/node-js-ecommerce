import { useEffect, useState } from 'react'; 
import axios from 'axios';
import Category from './category';

const Categories = () => {
    const [categories , setCategories] = useState([]);
    const [loading , setLoading] = useState(false);

    const getCategories = async () => {
        try{
            setLoading(true);
            const request = await axios.get('http://localhost:7000/api/admin/read-all-categories');
            setCategories(request.data.message);
            setLoading(false);
        } catch(err){
            console.log(err);
        }
        
    }

    useEffect(()=> { getCategories() } , []);

    if (loading) return (
        <div className='flex flex-col items-center space-y-10 mt-12 mb-6'>
            <h1 className="text-3xl text-gray-800">Categories</h1>
            <h1 className='text-gary-800 text-base'>Loading...</h1>
        </div>
    );

    return(
        <div className="my-5 flex flex-col items-center my-12 space-y-5" id="#categories">
            <h1 className="text-3xl text-gray-800">Categories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-7 sm:mx-10 sm:gap-10">
                {
                    categories &&
                    categories.map( category => {
                        return(
                            <div className="">
                                <Category category={category} />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Categories;