import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div className="App m-5">
      <h1 className="mb-4">Practicing React with Bootstrap</h1>

      <div className="user-container">
        {
          users.map(user => <User key={user.id} value={user}></User>)
        }
      </div>
    </div>
  );
}

export default App;
