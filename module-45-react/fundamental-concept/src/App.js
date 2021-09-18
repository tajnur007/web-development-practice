import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUser></LoadUser>
      <Student name='Ahsan Kabir' roll='23' batch='3rd'></Student>
      <Student name='Nasir Hossain' roll='21' batch='3rd'></Student>
      <Student name='Kazi Tajnur Islam' roll='28' batch='4th'></Student>
      <Student name='Riyad Hossain' roll='30' batch='4th'></Student>
    </div>
  );
}

function LoadUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div>
      <h1>User Loaded: {users.length}</h1>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}

function User(props) {
  return (
    <div className='userStyle'>
      <h2>Name: {props.name}</h2>
      <h4>Name: {props.email}</h4>
    </div>
  );
}

function Student(props) {
  const [points, setpoints] = useState(0);
  const increasePoint = () => setpoints(points + 1);
  const decreasePoint = () => setpoints(points - 1);
  const studentStyle = {
    backgroundColor: 'green',
    margin: '20px',
    padding: '15px',
    color: 'white',
    border: '2px solid red',
    borderRadius: '10px'
  };
  return (
    <div style={studentStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Roll: {props.roll}, Batch: {props.batch}</h4>
      <h4>Points: {points}</h4>
      <button onClick={increasePoint}>Increase Point</button>
      <button onClick={decreasePoint}>Decrease Point</button>
    </div>
  );
}

export default App;
