import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../user_ui/components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import UserItem from "./components/UserItme";

const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const request = await axios.get('http://localhost:7000/api/admin/read-all-users');
            setUsers(request.data.message);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);



    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <div className="h-full mt-20 flex mx-4 md:mx-2 md:space-x-5 py-5">
                <SideBar />
                <div className="w-full md:w-5/6 rounded bg-white shadow-xl space-y-5">
                    <Link to={'/admin-users'}>
                        <h1 className="text-gray-800 text-2xl ml-5 mt-10">Users</h1>
                    </Link>
                    <div className="space-y-5 mx-5 divide-y space-y-5 py-10 px-3">
                        {
                            users &&
                            users.map((user) => {
                                return (
                                    <UserItem user={user} getUsers={getUsers} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Users;