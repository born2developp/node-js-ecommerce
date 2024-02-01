import { useContext } from "react";
import Footer from "../user_ui/components/Footer";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import SideBar from "./components/SideBar";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Login from "../Login";
import toast from "react-hot-toast";

const AdminHome = () => {
    let navigate = useNavigate();
    const { userState, userDispatch } = useContext(UserContext);
    
    if(userState.user.username != undefined) {
        console.log(userState.user.username);
    }
    else { 
        navigate("/login", { replace: true });
        return <Login />;
    }

    toast.success('welcome Ahmed', { duration: 3000 });

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <div className="h-full mt-20 flex mx-4 md:mx-2 md:space-x-5 py-5 bg-slate-50">
                <SideBar />
                <PageContent />
            </div>
            <Footer />
        </div>
    );
}

export default AdminHome;