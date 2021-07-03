import react from 'react';
import '../../App/Layout/App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';


function Home () {
    return (
        <>
        <div>
        <HeroSection />
        <Cards />
        <Footer/>
        
        </div>
        </>
    )
    
}

export default Home;