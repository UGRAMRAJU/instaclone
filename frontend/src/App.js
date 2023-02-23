import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import PostView from "./components/PostView/PostView";
import Form from "./components/Form/Form"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/PostView" element={<PostView/>} />
        <Route path="/Form" element={<Form/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
