import { Route, Routes } from 'react-router-dom/dist/umd/react-router-dom.development';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContextProvider';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';


function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar/>  
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path = '/login'element ={<Login />}/>
          <Route path = '/signup'element ={<Signup />}/>
          <Route path = '/account'element ={<Account />}/>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
