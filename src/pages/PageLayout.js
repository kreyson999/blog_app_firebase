import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from 'react-router-dom';

function PageLayout() {
  return (
    <>
      <Navbar/>
      <div className="page-body">
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}

export default PageLayout;