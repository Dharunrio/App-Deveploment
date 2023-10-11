import './Assets/CSS/App.css'
import Register from './Pages/Register';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './Pages/SearchPage';
import AddContact from './Pages/AddContact';
import EditContact from './Pages/EditContact';
import GroupContact from './Pages/GroupContact';
import FAQ from './Pages/FAQ';
import TermCondition from './Pages/TermCondition';
import ContactForm from './Pages/ContactForm';
import ContactList from './Components/ContactList';
import ImportContacts from './Components/ImportContacts';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />  
        <Route path='/signin' element={<Register />} />
        <Route path='home' element={<Home />} >
          <Route index element={<ContactList/>} />
          <Route path='search' element={<SearchPage/>} />
          <Route path='addcontact' element={<AddContact/>} />
          <Route path='editcontact' element={<EditContact/>} />
          <Route path='groupcontact' element={<GroupContact/>} />
        </Route>
        <Route path='/faq' element={<FAQ />} />
        <Route path='/t&c' element={<TermCondition />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
      {/* <ImportContacts/> */}
    </>
  );
}

export default App;
