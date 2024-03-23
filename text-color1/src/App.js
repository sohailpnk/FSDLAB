// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import ColorChanger from "./ColorChanger";

function App() {
  return (
    <div style={{ textAlign: 'center',marginTop: '10px'}}>
      <h1 style={{borderBottom: '2px solid blue',color:'red'}}>
        Text Effects</h1>
      <ColorChanger />
    </div>
  ); 
  
}

export default App;