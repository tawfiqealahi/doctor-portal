import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import './Home.css';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Services></Services>
        </div>
    );
};

export default Home;