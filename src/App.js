import React, { Suspense, useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Navbar from './components/NavBar';
import ProfileSection from './components/ProfileSection';

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Services = React.lazy(() => import('./components/Services'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Experiences = React.lazy(() => import('./components/Experiences'));
const Work = React.lazy(() => import('./components/Work'));
const Projects = React.lazy(() => import('./components/Projects'));
const Blog = React.lazy(() => import('./components/Blog'));
const Contact = React.lazy(() => import('./components/Contact'));

// Blog
const Books = React.lazy(() => import('./components/Blogs/Books/Books'));

// Projects
const JavaScriptProject = React.lazy(
  () => import('./components/JavaScriptProject')
);
const TextToSpeech = React.lazy(
  () => import('./components/Projects/JavaScript/TextToSpeech/TextToSpeech')
);
const FileToText = React.lazy(
  () => import('./components/Projects/JavaScript/FileToText/FileToText')
);

// --------------------
// Route order (for direction-aware animation)
// --------------------
const routeOrder = [
  '/',
  '/about',
  '/services',
  '/skills',
  '/education',
  '/experiences',
  '/work',
  '/projects',
  '/blog',
  '/blog/books',
  '/contact',
];

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/* Navbar */}
        <div className="h-[72px] z-10 relative">
          <Navbar />
        </div>

        <div className="w-full flex flex-grow">
          {/* Sidebar */}
          <aside className="h-full w-1/4 hidden lg:block">
            <ProfileSection />
          </aside>

          {/* Main content */}
          <main className="flex-grow w-3/4 bg-[#f2f3f7] dark:bg-gradient-to-tr dark:from-slate-800 dark:via-slate-600 dark:to-black overflow-hidden">
            <RouteSwitch />
          </main>
        </div>
      </div>
    </Router>
  );
};

// --------------------
// Animated route switch
// --------------------
const RouteSwitch = () => {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  const currentIndex = routeOrder.indexOf(location.pathname);
  const prevIndex = routeOrder.indexOf(prevPathRef.current);

  const direction = currentIndex >= prevIndex ? 'slide-forward' : 'slide-backward';

  useEffect(() => {
    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-full text-lg">
          Loading...
        </div>
      }
    >
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.pathname}
          timeout={400}
          classNames={direction}
        >
          <div className="h-full">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/portfolio" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/work" element={<Work />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/books" element={<Books />} />
              <Route path="/contact" element={<Contact />} />

              <Route
                path="/projects/java-script-project"
                element={<JavaScriptProject />}
              />
              <Route
                path="/projects/java-script-project/text-to-speech"
                element={<TextToSpeech />}
              />
              <Route
                path="/projects/java-script-project/file-to-text"
                element={<FileToText />}
              />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Suspense>
  );
};

export default App;


