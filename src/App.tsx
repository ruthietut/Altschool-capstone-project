import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import Login from './component/Login';

// function App() {
//   return (
//     // <NavBar/>
//     <Home/>
//   );
// }



const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Login/>
    </>
  );
};
export default App;