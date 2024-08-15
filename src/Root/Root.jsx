import { Outlet } from "react-router-dom";
import NavBer from "../shared/navBer/NavBer";
import Footer from "../shared/footer/Footer";



const Root = () => {
    return (
        <div className="w-full   mx-auto">
            <NavBer></NavBer>
            <div className="mx-auto max-w-6xl">
            <Outlet></Outlet>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Root;



