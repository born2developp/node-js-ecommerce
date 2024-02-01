import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';
import { UserContext } from "../App";

const Login = () => {
    const { userState, userDispatch } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    // const { user } = userState;
    // const { username , password } = user;

    let intialUserData = {
        username: '',
        password: ''
    }

    const [userData, setUserData] = useState(intialUserData);
    let navigate = useNavigate();

    const login = async () => {
        setLoading(true);
        try {
            const request = await axios.post('http://localhost:7000/api/admin/read-user-by-username-and-password', userData);
            setLoading(false);
            if (request.data.message) {
                if (request.data.message.status == true) {
                    await userDispatch(
                        {
                            type: 'LOGIN',
                            payload: {
                                name: request.data.message.name,
                                username: request.data.message.username,
                                email: request.data.message.email,
                                phone: request.data.message.phone,
                                orders: request.data.message.orders,
                                card: request.data.message.card
                            }
                        }
                    );
                    navigate("/admin-home", { replace: true });
                }
                else {
                    // setLoading(!loading);
                    toast.error('user is blocked', { duration: 3000 });
                }
            }
            else {
                // setLoading(!loading);
                toast.error('username or password is incorrect...', { duration: 3000 });
            }
        } catch (err) {
            console.log(err);
        }
        // setLoading(!loading);
    }

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // setLoading(!loading);
        login();
    }

    useEffect(() => {

    }, [loading]);

    return (
        <div className="bg-slate-100 flex flex-col justify-center h-screen">
            <form onSubmit={handleSubmit}>
                <div className="mx-auto flex flex-col items-center space-y-5 mx-8 md:mx-16">
                    <h1 className="text-4xl font-bold text-gray-800">Manan Market</h1>
                    <div className="w-full sm:w-1/2 lg:w-1/3  bg-white shadow flex flex-col space-y-5 px-8 py-10 rounded">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="" className="text-gray-600 text-sm font-medium">Username</label>
                            <input name="username" onChange={handleChange} required className="border border-2 border-gray-500 rounded px-2 py-1 text-gray-900 transition duration-500 ease-in-out" type="text" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="" className="text-gray-600 text-sm font-medium">Password</label>
                            <input name="password" onChange={handleChange} required className="border border-2 border-gray-500 rounded px-2 py-1 text-gray-900 transition duration-500 ease-in-out" type="password" />
                        </div>
                        <div className="flex justify-end">
                            <Link to={'/forget-password'}>
                                <p className="text-sm text-indigo-500 text-xs cursor-pointer">Forgot your password</p>
                            </Link>
                        </div>
                        <div>
                            <button className="w-full bg-indigo-600 py-1 rounded text-white text-base hover:bg-indigo-500 transition duration-200 ease-in-out">
                                {
                                    loading ? 'Loading...' : 'Login'
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;