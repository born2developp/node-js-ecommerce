import { useState , useEffect } from 'react';
import axios from 'axios';

const Me = () => {
    const [user , serUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [hide, setHide] = useState(false);
    const [hideState, setHideState] = useState('Show');

    const getUserInfo = async () => {
        try{
            setLoading(true);
            const request = await axios.get("http://localhost:7000/api/admin/read-user/63300d4d8f009d1e5effee6d");
            serUser(request.data.message);
            setLoading(false);
        }catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUserInfo();
    } , []);

    const ShowPassword = (event) => {
        event.preventDefault();
        hide ? setHideState('Show') : setHideState('Hide');
        setHide(!hide);
    }

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
        <form className="bg-white shadow-xl w-full rounded-xl space-y-10 flex flex-col  py-5 h-fit ">
            <div className="px-5">
                <h1 className="text-gray-500 text-xl ">Personal Info</h1>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center w-full space-y-5 ">
                <div className="w-full flex justify-center">
                    <img class="inline-block h-56 w-56 rounded-full ring-2 ring-white" src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600" alt="{user.handle}" />
                </div>
                <div className="w-full space-y-3 flex flex-col">
                    <div className="space-y-1">
                        <h1 className='text-gray-400 text-xs font-normal'>Name</h1>
                        <input type="text"
                            className="border-2 border-gray-800 rounded py-1 w-5/6 px-2 text-gray-800 focus:border-gray-800"
                            value={user.name}
                        />
                    </div>
                    <div className="space-y-1">
                        <h1 className='text-gray-400 text-xs font-normal'>Username</h1>
                        <input type="text"
                            className="border-2 border-gray-800 rounded py-1 w-5/6 px-2 text-gray-800 focus:border-gray-800"
                            value={user.username}
                        />
                    </div>
                    <div className="space-y-1">
                        <h1 className='text-gray-400 text-xs font-normal'>Password</h1>
                        <input type={!hide ? "password" : "text"}
                            className="border-2 border-gray-800 rounded py-1 w-5/6 px-2 text-gray-800 focus:border-gray-800"
                            value={user.password}
                        />
                        <button className="text-gray-800 text-xs mx-1" onClick={ShowPassword}>{hideState}</button>
                    </div>
                    <div className="space-y-1">
                        <h1 className='text-gray-400 text-xs font-normal'>Status</h1>
                        <h1 className="text-gray-800">{user.status ? "True" : "False"}</h1>
                    </div>
                    <div className="pr-10">
                        <button className="sm:flex bg-gray-800 text-white w-full py-2 px-3 border border-2 border-gray-800 rounded hover:bg-gray-600 hover:border-gray-600  transition duration-500 ease-in-out flex justify-center items-center">Update</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Me;