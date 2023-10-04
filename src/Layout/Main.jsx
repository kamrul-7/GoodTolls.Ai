
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Navbar from '../Component/Navbar/Navbar';

const Main = () => {
    return (
        <div className='max-w-screen-2xl mx-auto' >
           <Navbar></Navbar>
            <Home></Home>
        </div>
    );
};

export default Main;