import { useEffect, useState } from "react";
import axios from "axios";

const PreviewUser = ({ _id }) => {
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState();

    useEffect(() => {
        const getUser = async () => {
            try {
                const request = await axios.get(`http://localhost:7000/api/admin/read-user/${_id}`);
                setUser(request.data.message);
            } catch (err) {
                console.log(err);
            }
        }

        getUser();
    }, []);

    return (
        <>
            <svg onClick={() => setShowModal(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer text-gray-900 hover:text-zinc-500 transition duration-500 ease-in-out">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-2xl">
                                        User Details
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto ">
                                    <form className="flex flex-col space-y-5">
                                        <div className="flex flex-col space-y-2">
                                            <label htmlFor="">Name</label>
                                            <input
                                                readOnly
                                                name="title"
                                                type="text"
                                                className="border-2 border-gray-800 rounded py-0.5 px-1 text-gary-800"
                                                value={user.name}
                                            />
                                        </div>
                                        <div className="flex space-x-5 justify-between">
                                            <div className="flex flex-col space-y-2">
                                                <label htmlFor="">Username</label>
                                                <input
                                                    readOnly
                                                    name="title"
                                                    type="text"
                                                    className="border-2 border-gray-800 rounded py-0.5 px-1 text-gary-800"
                                                    value={user.username}
                                                />
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <label htmlFor="">Password</label>
                                                <input
                                                    readOnly
                                                    name="title"
                                                    type="text"
                                                    className="border-2 border-gray-800 rounded py-0.5 px-1 text-gary-800"
                                                    value={user.password}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <label htmlFor="">Status</label>
                                            <input
                                                readOnly
                                                name="title"
                                                type="text"
                                                className="border-2 border-gray-800 rounded py-0.5 px-1 text-gary-800"
                                                value={user.status ? 'Active' : 'InActive'}
                                            />
                                        </div>
                                        <div className="flex items-center justify-end pt-5 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}>
                                                Close
                                            </button>
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default PreviewUser;