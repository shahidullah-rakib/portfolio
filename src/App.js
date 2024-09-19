// src/App.tsx
import React, { useState, useEffect } from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Work from './components/Work';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ProfileSection from './components/ProfileSection'; // Import ProfileSection
import Books from './components/Blogs/Books/Books';

const routeOrder = [
  '/',
  '/about',
  '/services',
  '/skills',
  '/education',
  '/experiences',
  '/work',
  '/blog',
  '/contact',
];

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <div className="h-[72px] z-10">
          <Navbar />
        </div>
        <div className="w-full flex flex-grow">
          {/* Fixed ProfileSection */}
          <div className="h-full w-1/4 hidden lg:block">
            <ProfileSection />
          </div>
          <div className="flex-grow w-3/4  bg-[#f2f3f7] dark:bg-gradient-to-tr dark:from-slate-800 dark:via-slate-600 dark:via-0% dark:to-black overflow-hidden">
            <RouteSwitch />
          </div>
        </div>
      </div>
    </Router>
  );
};

const RouteSwitch = () => {
  const location = useLocation();
  const [prevIndex, setPrevIndex] = useState(0); // Track the previous index

  useEffect(() => {
    const currentIndex = routeOrder.indexOf(location.pathname);
    setPrevIndex(currentIndex);
  }, [location]);

  const currentIndex = routeOrder.indexOf(location.pathname);
  const direction = currentIndex > prevIndex ? 'forward' : 'backward'; // Determine the transition direction

  return (
    <div className="flex-grow">
      {/* <CSSTransition key={location.key} timeout={500} classNames={direction}> */}
      <div className="transition-container">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/books" element={<Books />} />
        </Routes>
      </div>
      {/* </CSSTransition> */}
    </div>
  );
};

export default App;
