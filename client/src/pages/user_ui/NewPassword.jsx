import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';

const NewPassword = () => {
    const { _email } = useParams();
    let email = _email.split(',');
    email = email[0] + "." + email[1];

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        if (password != confirmPassword) {
            toast.error("Password and confirm password must be same...", { duration: 3000 });
        }
        else {
            try {
                const request = await axios.post('http://localhost:7000/api/admin/update-user-password', { email, password });
                if (request.data.status == false) {
                    toast.error(request.data.message, { duration: 3000 });
                    setLoading(false);
                }
                else {
                    toast.success(request.data.message, { duration: 3000 });
                    setLoading(false);
                    navigate("/login", { replace: true });
                }
            }
            catch (err) {
                toast.success(err, { duration: 3000 });
                setLoading(false);
            }
        }
    }


    return (
        <div className="bg-slate-100 flex flex-col justify-center h-screen">
            <form onSubmit={handleSubmit}>
                <div className="mx-auto flex flex-col items-center space-y-5 md:mx-16">
                    <h1 className="text-4xl text-gray-800">Set New Password</h1>
                    <div className="w-full sm:w-1/2 lg:w-1/3  bg-white shadow flex flex-col space-y-5 px-8 py-10 rounded">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="" className="text-gray-600 text-sm font-medium">Password</label>
                            <input name="password" onChange={(event) => setPassword(event.target.value)} required className="border-2 border-gray-500 rounded px-2 py-1 text-gray-900 transition duration-500 ease-in-out" type="text" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="" className="text-gray-600 text-sm font-medium">Confirm Password</label>
                            <input name="confirmPassword" onChange={(event) => setConfirmPassword(event.target.value)} required className="border-2 border-gray-500 rounded px-2 py-1 text-gray-900 transition duration-500 ease-in-out" type="text" />
                        </div>
                        <div>
                            <button className="w-full bg-indigo-600 py-1 rounded text-white text-base hover:bg-indigo-500 transition duration-200 ease-in-out">
                                {
                                    loading ? 'Loading...' : 'Set New Password'
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewPassword;