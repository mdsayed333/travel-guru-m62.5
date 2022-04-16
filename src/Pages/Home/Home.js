import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div id="navbar-link" className='home-container'>
            <div className='container'>
            <Header></Header>
            <div className='row mt-5 pt-5'>
                <div className='col-12 col-md-6'>
                    <h3>COX'S BAZAR</h3>
                    <p>
                        Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy 
                        beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang 
                        monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical 
                        rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.
                    </p>
                </div>
                <div className='col-12 col-md-6'>
                    
                </div>
            </div>
            
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;