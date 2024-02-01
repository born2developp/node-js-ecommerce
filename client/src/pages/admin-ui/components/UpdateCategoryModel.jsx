import { useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import { useEffect } from "react";

const UpdateCategoryModel = ({ category , setCategories }) => {
    const [showModal, setShowModal] = useState(false);

    let initialCategoryInfo = {
        _id: category._id,
        title: category.title,
        image: category.image
    }

    const [categoryInfo , setCategoryInfo] = useState(initialCategoryInfo);
    
    const handleChange = (event) => {
        setCategoryInfo({...categoryInfo , [event.target.name] : event.target.value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const request = await axios.post('http://localhost:7000/api/admin/update-category' , categoryInfo);
            toast.success('Updated Successfully!', { duration: 1000 });
        }catch(err) {
            console.log(err);
        }
    }

    const getCategories = async () => {
        try {
            const request = await axios.get('http://localhost:7000/api/admin/read-all-categories');
            setCategories(request.data.message);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCategories();
    },[]);

    return (
        <>
            <svg onClick={() => setShowModal(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 hover:text-indigo-600 transition duration-500 ease-in-out cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
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
                                        Category Details
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto ">
                                    <form  className="flex flex-col space-y-5">
                                        <div className="flex flex-col space-y-2">
                                            <label htmlFor="">Title</label>
                                            <input
                                                onChange={handleChange}
                                                name="title"
                                                type="text"
                                                className="border-2 border-gray-800 rounded py-0.5 px-1 text-gary-800"
                                                value={categoryInfo.title}
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <label htmlFor="">Image</label>
                                            <textarea
                                                rows={6}
                                                cols={50}
                                                name="image"
                                                onChange={handleChange}
                                                type="text"
                                                className="border-2 border-gray-800 rounded py-0.5 px-1 text-gary-800 no-drag"
                                                value={categoryInfo.image}
                                            />
                                        </div>
                                        <div className="flex items-center justify-end pt-5 border-t border-solid border-slate-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}>
                                                Close
                                            </button>
                                            <button
                                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit"
                                                onClick={() => {
                                                    handleSubmit(event);
                                                    setShowModal(false);
                                                }}>
                                                Save Changes
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

export default UpdateCategoryModel;