import React from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Footer from '../Pages/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='font-poppins'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;