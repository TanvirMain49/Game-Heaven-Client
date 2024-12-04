import React from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Footer from '../Pages/Footer';

const MainLayout = () => {
    return (
        <div className='font-poppins'>
            <Header></Header>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;