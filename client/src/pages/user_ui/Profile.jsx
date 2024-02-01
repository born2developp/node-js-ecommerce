import { useState , useEffect} from 'react';
import Header from "./components/Header";
import Me from './components/Me';
import MyCard from './components/MyCard';
import MyOrders from './components/MyOrders';

const Profile = () => {
    return (
        <>
            <Header />
            <div className="grid grid-cols-1 space-y-10 mx-5 lg:grid-cols-2 mt-28 py-10 space-x-5">
                <Me />
                <div className="w-full flex flex-col space-y-10">
                    <MyCard />
                    <MyOrders />
                </div>
            </div>
        </>
    )
}

export default Profile;