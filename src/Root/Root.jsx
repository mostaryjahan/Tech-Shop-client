import { Outlet } from "react-router-dom";
import NavBer from "../shared/navBer/NavBer";
import Footer from "../shared/footer/Footer";



const Root = () => {
    return (
        <div className="w-full px-2 lg:px-4">
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;



