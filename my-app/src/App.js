// //  import logo from './logo.svg';
// import "./App.css";

// //  function App() {
// //    return (
// //      <div className="App">
// //        <header className="App-header">
// //          <img src={logo} className="App-logo" alt="logo" />
// //          <p>
// //            Edit <code>src/App.js</code> and save to reload.
// //          </p>
// //          <a
// //            className="App-link"
// //            href="https://reactjs.org"
// //            target="_blank"
// //            rel="noopener noreferrer"
// //          >
// //            Learn React
// //          </a>
// //        </header>
// //      </div>
// //  );
// //  }
// // export default App;

// import React from "react";

// const App = (props) => {
//   return (
//     <table>
//       <tr>
//         <th>Name</th>
//         <td>{props.Name}</td>
//       </tr>

//       <tr>
//         <th>Reg no</th>
//         <td>{props.Reg_no}</td>
//       </tr>

//       <tr>
//         <th>Department</th>
//         <td>{props.Dept}</td>
//       </tr>
//     </table>

    
//   );
// };

// export default App;


import React from 'react';
import LoginForm from './LoginForm';

const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <LoginForm />
    </div>
  );
};

export default App;

