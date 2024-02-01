import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsList from './ProductsList';
import UsersList from './UsersList';

const PageContent = () => {
    const [numberOfProducts, setNumberOfProducts] = useState(0);
    const [numberOfCategory, setNumberOfCategory] = useState(0);
    const [numberOfUsers , setNumberOfUsers] = useState(0);

    useEffect(() => {
        const getTotalNumberOfProducts = async () => {
            try {
                const request = await axios.get('http://localhost:7000/api/admin//read-total-number-of-product');
                setNumberOfProducts(request.data.message);
            } catch (err) {
                console.log(err);
            }

        }

        const getTotalNumberOfCategory = async () => {
            try{
                const request = await axios.get('http://localhost:7000/api/admin//read-total-number-of-categories');
                setNumberOfCategory(request.data.message);
            }catch(err) {
                console.log(err);
            }
        }

        const getTotalNumberOfUsers = async () => {
            try{
                const request = await axios.get("http://localhost:7000/api/admin/read-total-number-of-users");
                setNumberOfUsers(request.data.message);
            }catch(err) {
                console.log(err);
            }
        }

        getTotalNumberOfCategory();
        getTotalNumberOfProducts();
        getTotalNumberOfUsers();
    }, []);

    return (
        <div className="w-full md:w-5/6 rounded bg-white shadow-xl space-y-5">
            <div className="flex justify-center py-5">
                <h1 className="text-gray-800 text-2xl">Admin Dashboard</h1>
            </div>
            <div className="flex flex-col mx-4 space-y-5">
                <div className="flex justify-around">
                    <div className="flex items-center space-x-5 bg-violet-100 py-5 px-5 rounded hover:shadow hover:bg-violet-200 cursor-pointer transition duration-500 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <div>
                            <p className="text-gray-800">Categories</p>
                            <h1 className="text-gray-800 text-3xl">{numberOfCategory}</h1>
                        </div>
                    </div>
                    <div className="flex items-center space-x-5 bg-violet-100 py-5 px-5 rounded hover:shadow hover:bg-violet-200 cursor-pointer transition duration-500 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                        </svg>
                        <div>
                            <p className="text-gray-800">Products</p>
                            <h1 className="text-gray-800 text-3xl">{numberOfProducts}</h1>
                        </div>
                    </div>
                    <div className="flex items-center space-x-5 bg-violet-100 py-5 px-5 rounded hover:shadow hover:bg-violet-200 cursor-pointer transition duration-500 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                        <div>
                            <p className="text-gray-800">Users</p>
                            <h1 className="text-gray-800 text-3xl">{numberOfUsers}</h1>
                        </div>
                    </div>
                </div>
                <ProductsList />
                <UsersList />
            </div>
        </div>
    );
}
export default PageContent;