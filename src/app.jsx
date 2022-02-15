import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './app.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/home/home';
import Loading from './pages/loading/loading';
import Projects from './pages/projects/projects';
import DetailPages from './pages/projects/detailPages/detailPages';
import Header from './header/header';
import ScrollToTop from './components/scrollToTop/scrollToTop';

function App({ blogService, projectsService }) {
  const routes = [
    { path: '/', name: 'Home', element: Home },
    { path: '/projects', name: 'Projects', element: Projects },
  ];
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2400);
  }, []);
  return (
    <Router>
      <ScrollToTop />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header routes={routes} />
          <TransitionGroup component={null}>
            <CSSTransition classNames="fade" timeout={300}>
              <Routes>
                <Route
                  path="/projects"
                  element={<Projects projectsService={projectsService} />}
                />
                <Route path="/projects/:id" element={<DetailPages />} />
                <Route
                  path="/"
                  element={
                    <Home
                      blogService={blogService}
                      projectsService={projectsService}
                    />
                  }
                />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </div>
      )}
    </Router>
  );
}

export default App;
