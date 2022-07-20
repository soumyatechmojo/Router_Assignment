import './App.css';
import {BrowserRouetr as Router, Routes, Route} from "react-router-dom"
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog/>}></Route>
        <Route path="/" element={<Blog/>}></Route>
        <Route path="/" element={<Blog/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
