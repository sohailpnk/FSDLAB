import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
/* node server1.js
Invoke-RestMethod -Method Post -Uri "http://localhost:5000/api/users" -ContentType "application/json" -Body '{"name": "John Doe", "email": "john@example.com", "age": 30}'
Invoke-RestMethod -Method Post -Uri "http://localhost:5000/api/users" -ContentType "application/json" -Body '{"name": "Alex", "email": "john@yahoo.com", "age": 35}'
Invoke-RestMethod -Method Get -Uri "http://localhost:5000/api/users"
Invoke-RestMethod -Method Put -Uri "http://localhost:5000/api/users/65cb829decab01d45546620b" -ContentType "application/json" -Body '{"name": "Siri", "email": "siri@in.com", "age": 25}'
Invoke-RestMethod -Method Delete -Uri "http://localhost:5000/api/users/65cb821aecab01d455466209"
*/
