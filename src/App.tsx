import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import GetInTouch from './pages/GetInTouch';
import DynamicPage from './pages/DynamicPage';

import { AuthContextProvider } from './Context/AuthProvider';


function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contact' element={<GetInTouch />} />
        <Route path="/:id" element={<DynamicPage />} />
      </Routes>
    </AuthContextProvider>

  );
}

export default App;