import './App.css';
import Banner from './components/Banner';
import Form from './components/Form';
import List from './components/List';
import GetMovie from './MovieContext';
import React, {useState} from 'react';

function App() {
  const[theme, setTheme]=useState('dark')

  const setToogle = ()=>{
    setTheme(theme === 'dark'? 'light':'dark');
  }
  return (
 <div className={theme}>
     <GetMovie>
      <button onClick={setToogle}>{theme === 'dark' ?'light':'dark'}</button>
      <Form />
      <Banner />
      <List/>
     
    </GetMovie>
 </div>
  );
}

export default App;
