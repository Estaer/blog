import './App.css';
import React from 'react';
import BlogContent from './components/BlogContent';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App()
{
    return (
      <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/blogs/next-for-vercel" exact component={BlogContent} />
        </Switch>
      </div>
      </Router>
      
    );
  }

export default App;
