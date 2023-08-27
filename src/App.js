import { Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Header from './Layout/Header';
import './App.css'
import IdentificationPage from './Pages/IdentificationPage';
import { ContextState } from './context/configContext';
import FriendPage from './Pages/FriendPage';
import Sidbar from './Components/miscellaneous/Sidebar';

function App() {
  const { user, showMenu } = ContextState()
  return (
    <div className='App' >
      {user && <Header />}
      {showMenu && <Sidbar />}
      <Routes>
        <Route path='/' element={<IdentificationPage />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/friend' element={<FriendPage />} />
      </Routes>
    </div>
  );
}

export default App;
