import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import  { Header } from "./Header";
import { MainContent } from './MainContent';

function App() {
 const [employee] = useState({
   name: "Joe Brown",
   salary: 28938
 }); 
  return (
    <div className="App">
      <Header></Header>
      <MainContent emp = {employee}></MainContent>
     App
    </div>
  );
}

export default App;
