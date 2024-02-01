import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';

const Header = () => {
    const { userState, userDispatch } = useContext(UserContext);
    let navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleLogout = async () => {
        await userDispatch({type: 'LOGIN'});
        navigate("/login", { replace: true });
    }

    return (
        <div className="bg-white shadow-lg py-4 flex flex-col justify-between px-7 fixed z-50 top-0 w-full space-y-5">
            <div className="flex justify-between items-center">
                <div>
                    <Link to={'/admin-home'}>
                        <h1 className=" text-2xl font-bold">Manan Market</h1>
                    </Link>
                </div>
                {!show &&
                    <div className="flex lg:hidden">
                        <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-9 cursor-pointer hover:bg-gray-200/50 p-1 rounded-full transition duration-500 ease-in-out font-bold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                }
                {show &&
                    <div className="flex lg:hidden">
                        <svg onClick={() => setShow(!show)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-9 cursor-pointer hover:bg-gray-200/50 p-1 rounded-full transition duration-500 ease-in-out">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m-15 0l15 15" />
                        </svg>
                    </div>
                }
                <div className="hidden lg:flex space-x-7">
                    <div className='cursor-pointer flex flex-col item-center' onClick={handleLogout}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        <p className="text-sm">Logout</p>
                        {/* <Link className="flex flex-col items-center" to={'/'}>
                            
                        </Link> */}
                    </div>
                </div>
            </div>
            {show &&
                <div className="flex flex-col flex lg:hidden space-y-4 px-3 divide-y divide-solid">
                    <Link className="pt-1" to={'/admin-home'}>Home</Link>
                    <Link className="pt-1" to={'/admin-categories'}>Categories</Link>
                    <Link className="pt-1" to={'/admin-products'}>Products</Link>
                    <Link className="pt-1" to={'/admin-users'}>Users</Link>
                </div>
            }
        </div>
    );
}

export default Header;