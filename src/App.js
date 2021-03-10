import './App.css';
import React from 'react';
import NextContent from './components/NextContent';
import BookContent from './components/BookContent';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App()
{
    return (
      <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/blogs/next-for-vercel" exact component={NextContent} />
        <Route path="/blogs/books-people-reread" exact component={BookContent} />
        </Switch>
      </div>
      </Router>
      
    );
  }

export default App;
