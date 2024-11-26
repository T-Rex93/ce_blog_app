import './App.css';
import Login from './Login';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './PostList';
import CreatePost from './CreatePost';
import EditPost from './EditPost';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PostList />} />
        <Route path='/create' element={<CreatePost />} />
        <Route path='/edit/:id' element={<EditPost />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
