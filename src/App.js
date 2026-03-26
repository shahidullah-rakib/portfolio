import React, { Suspense, useState, useCallback, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

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
const MemoryGame = React.lazy(
  () => import('./components/Projects/JavaScript/MemoryGame/MemoryGame')
);

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
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = useCallback(() => setIsResizing(true), []);
  const stopResizing = useCallback(() => setIsResizing(false), []);

  const resize = useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        setSidebarWidth(Math.max(250, Math.min(600, mouseMoveEvent.clientX)));
        // Prevent text selection during resize
        document.body.style.userSelect = 'none';
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    if (!isResizing) document.body.style.userSelect = 'auto';
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing, isResizing]);

  return (
    <Router>
      <div className="flex flex-col h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Navbar */}
        <div className="h-[72px] shrink-0 z-50 shadow-sm relative w-full">
          <Navbar />
        </div>

        <div className="flex-grow flex overflow-hidden relative w-full">
          {/* Sidebar */}
          <aside
            style={{ width: `${sidebarWidth}px` }}
            className={`hidden lg:flex flex-col h-full bg-white dark:bg-slate-800 shadow-[2px_0_8px_-4px_rgba(0,0,0,0.1)] transition-colors duration-300 relative z-20 ${
              isResizing ? 'pointer-events-none' : ''
            }`}
          >
            <div className="flex-1 overflow-y-auto no-scrollbar">
              <ProfileSection />
            </div>
          </aside>

          {/* Resizer Handle */}
          <div
            className="hidden lg:flex flex-col justify-center items-center w-1.5 cursor-col-resize hover:bg-blue-500/50 hover:w-2 transition-all active:bg-blue-600 bg-gray-200 dark:bg-gray-700 z-30"
            onMouseDown={startResizing}
          >
            <div className="w-0.5 h-10 rounded-full bg-gray-400 dark:bg-gray-500 pointer-events-none" />
          </div>

          {/* Main Content */}
          <main className="flex-1 h-full overflow-hidden bg-gray-50 dark:bg-gray-900 relative z-10 transition-colors duration-300">
            <RouteSwitch />
          </main>
        </div>
      </div>
    </Router>
  );
};

const RouteSwitch = () => {
  const location = useLocation();

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-full text-lg dark:text-gray-300">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
          Loading...
        </div>
      }
    >
      <div className="w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
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
              <Route
                path="/projects/java-script-project/memory-game"
                element={<MemoryGame />}
              />
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;


