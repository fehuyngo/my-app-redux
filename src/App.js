import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { getNews } from './sagas/news/newsSlice';
import HackerNews from './components/HackerNews'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  },[dispatch]);
  return (
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
