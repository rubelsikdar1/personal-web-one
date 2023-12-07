
import Navbar from './../Component/Navbar/Navbar';
import Footer from './../Component/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className="header">
                <Navbar/>
            </div>
            <div className="outlet-aria">
                <Outlet/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;