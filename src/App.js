import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartChatBot from './pages/StartChatBot';
import Main from './pages/Main';
import ChatBot from './pages/ChatBot';
import CreateChat from './pages/CreateChat';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/chatBot' element={<StartChatBot />}/>
          <Route path='/createChat' element={<CreateChat />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
