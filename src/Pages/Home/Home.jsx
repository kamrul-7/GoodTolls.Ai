import React from 'react';
import Card from '../Card/Card';
import Hero from '../Hero/Hero';
import Footer from '../../Component/Footer/Footer';

const Home = () => {
    return (
        <div>
            <h1 className='text-2xl'>This is home and we working on it</h1>
            <Hero></Hero>
          <Card/>
            <Footer></Footer>
        </div>
    );
};

export default Home;

