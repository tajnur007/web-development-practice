import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Student name='Ahsan Kabir' roll='23' batch='3rd'></Student>
      <Student name='Nasir Hossain' roll='21' batch='3rd'></Student>
      <Student name='Kazi Tajnur Islam' roll='28' batch='4th'></Student>
      <Student name='Riyad Hossain' roll='30' batch='4th'></Student>
    </div>
  );
}

function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Roll: {props.roll}, Batch: {props.batch}</h4>
    </div>
  );
}

export default App;
