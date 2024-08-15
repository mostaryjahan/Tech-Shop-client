import { Outlet } from "react-router-dom";
import NavBer from "../shared/navBer/NavBer";
import Footer from "../shared/footer/Footer";
import useAuth from "../hooks/useAuth";

const Root = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="w-16 h-16 mx-auto mt-20 border-4 border-dashed rounded-full animate-spin border-blue-800"></div>
    );
  }

  return (
    <div className="w-full   mx-auto">
      <NavBer></NavBer>
      <div className="mx-auto max-w-6xl">
        <Outlet></Outlet>
      </div>

      <Footer />
    </div>
  );
};

export default Root;
