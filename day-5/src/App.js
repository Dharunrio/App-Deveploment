import './Assets/CSS/App.css'
import Register from './Pages/Register';
import './Assets/CSS/App.css'
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import { Route, Routes } from 'react-router-dom';
import { userContext } from './Assets/Contexts/UserContext';
import { useState } from 'react';
import AddContact from './Pages/AddContact';
import Main from './Pages/Main';
import EditContact from './Pages/EditContact';
import SearchPage from './Pages/SearchPage';
function App() {

  const [user, setUser] = useState({});
  
  const contextValue = { user, setUser};

  return (
    <>
    <userContext.Provider value={contextValue} >
      <Routes>
          <Route exact path='/' element={<Register/>}/>
          <Route exact path='/home' element={<Home/>}>

            <Route index element={<Main/>}/>
            <Route path='addcontact' element={<AddContact/>}/>
            <Route path='editcontact' element={<EditContact/>}/>
            <Route path='search' element={<SearchPage/>}/>
          </Route>
          <Route exact path='/Register' element={<Register/>}/>
        </Routes>
    </userContext.Provider>
    </>
  );
}

export default App;
