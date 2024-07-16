import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartChatBot from './pages/StartChatBot';
import Main from './pages/Main';
import ChatBot from './pages/ChatBot';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartChatBot />}/>
          <Route path='/main' element={<Main />}/>
          <Route path='/chatBot' element={<ChatBot />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
