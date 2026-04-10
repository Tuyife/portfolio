import React from 'react';
import './App.css';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import Project from './components/Project.jsx';
import Skills from "./components/Skills.jsx";
import Home from './components/Home.jsx';
import WhatsappFloat from './components/WhatsappFloat.jsx';
import HireMe from './components/HireMe.jsx';
import Navbar from './components/Navbar.jsx';
import Service from './components/Service.jsx';
import Testimonials from './components/Testimonials.jsx';
function App(){
    return(
        <div className="App">
            <h1>Welcome to my portfolio</h1>
            <Navbar />
            <Home/>
            <WhatsappFloat />
            <About />
            <Project /> 
            <Service />
            <Testimonials />
            <Skills />
            <Contact />
            <HireMe />
             <Footer />
        </div>
    );
}
export default App;
