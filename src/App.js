import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import {Container, Navbar , Nav} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume';

const routes = [
  {path: '/', name:'Home', Component:Home},
  {path: '/about', name:'About', Component: About},
  {path: '/resume', name:'Resume', Component: Resume},
  {path: '/contact', name:'Contact', Component: Contact}

]

      class App extends React.Component{
        render() {
          return (
            <div className="App">
              <header className="App-header">
                <Router>
                <>
                  <Navbar bg='light'>
                    <Nav className='mx-auto'>
                      {routes.map(route => (
                        <Nav.Link
                        key={route.path}
                        as={NavLink}
                        to={route.path}
                        activeClassName='active'
                        exact
                        >
                          {route.name}
                        </Nav.Link>
                      ))}
                    </Nav>
                  </Navbar>
                  <Container className='container'>
                    {routes.map(({path, Component }) =>(
                      <Route key={path} exact path={path}>
                        {({ match }) => (
                          <CSSTransition
                            in={match != null}
                            timeout={300}
                            classNames='page'
                            unmountOnExit
                          >
                          <div className='page'>
                            <Component/>
                          </div>
                        </CSSTransition>
                    )}
                    </Route>
                    ))}
                  </Container>
                  </>
                </Router>
              </header>
            </div>
           );
      }
      }
export default App;
