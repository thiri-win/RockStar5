import React from 'react'
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import Profile from './Profile'

const App = props => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/profile/alice">Alice</Link>
      </div>
      <Route exact path="/">
        <h1>Home</h1>
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/profile/:name">
        <Profile />
      </Route>
    </Router>
  );
}

export default App