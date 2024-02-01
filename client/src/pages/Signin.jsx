import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';

const Signin = () => {
    let initailUserData = {
        name: '',
        gender: '',
        phone: '',
        email: '',
        username: '',
        password: '',
        status: true,
        card: [],
        orders: [],
    }

    let navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(initailUserData);

    const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    }

    const singin = async (userInfo) => {
        try {
            const { username } = userInfo;
            const request = await axios.post('http://localhost:7000/api/admin/read-user-by-username', { username });
            console.log(request.data.message);
            if (!request.data.message) {
                try {
                    const request = await axios.post('http://localhost:7000/api/admin/register-user', userInfo);
                    console.log(request.data);
                    toast.success(`Registerd Successfuly`, { duration: 3000 });
                    navigate("/", { replace: true });
                } catch (err) {
                    console.log(err);
                }
            }
            else {
                let message = request.data.data;
                toast.error(`${message}`, { duration: 3000 });
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        singin(userInfo);
    }

    return (
        <div className="bg-slate-100 flex flex-col justify-center h-screen">
            <form onSubmit={handleSubmit}>
                <div className="mx-auto flex flex-col items-center space-y-5  mx-8 md:mx-16">
                    <h1 className="text-4xl text-gray-800 font-bold">Sign in</h1>
                    <div className="w-full w-3/5  bg-white shadow flex flex-col space-y-5 px-8 py-10 rounded">
                        <div className="flex flex-col md:flex-row justify-between space-x-5">
                            <div className="flex flex-col space-y-2 w-full">
                                <label htmlFor="" className="text-gray-600 text-sm font-medium">Full Name</label>
                                <input name="name" onChange={handleChange} className="border border-2 border-gray-500 rounded px-2 py-1 text-gray-900 transition duration-500 ease-in-out" type="text" />
                            </div>
                            <div className="flex flex-col space-y-2 w-full">
                                <label htmlFor="" className="text-gray-600 text-sm font-medium">Email Address</label>
                                <input name="email" onChange={handleChange} className="border border-2 border-gray-500 rounded px-2 py-1 text-gray-900 transition duration-500 ease-in-out" type="email" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between space-x-5">
                            <div className="flex flex-col space-y-2 w-full">
                                <label htmlFor="" className="text-gray-600 text-sm font-medium">Gender</label>
                                <select name="gender" onChange={handleChange} className="border-2 border-gray-600 rounded px-2 py-1">
                                    <option disabled selected>Choose One</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div className="flex flex-col space-y-2 w-full">
                                <label htmlFor="" className="text-gray-600 text-sm font-medium">Phone Number</label>
                                <input name="phone" onChange={handleChange} className="border border-2 border-gray-500 rounded px-2 py-1 text-gray-900 transition duration-500 ease-in-out" type="text" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between space-x-5">
                            <div className="flex flex-col space-y-2 w-full">
                                <label htmlFor="" className="text-gray-600 text-sm font-medium">Username</label>
                                <input name="username" onChange={handleChange} className="border border-2 border-gray-500 rounded px-2 py-1 text-gray-900 transition duration-500 ease-in-out" type="text" />
                            </div>
                            <div className="flex flex-col space-y-2 w-full">
                                <label htmlFor="" className="text-gray-600 text-sm font-medium">Password</label>
                                <input name="password" onChange={handleChange} className="border border-2 border-gray-500 rounded px-2 py-1 text-gray-900 transition duration-500 ease-in-out" type="password" />
                            </div>
                        </div>
                        <div>
                            <button className="w-full bg-indigo-600 py-1 rounded text-white text-base hover:bg-indigo-500 transition duration-200 ease-in-out">Signin</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signin;