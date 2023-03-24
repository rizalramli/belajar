import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import BlogDetail from './BlogDetail';
import Contact from './Contact';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <div className="app">
      <div className="brand">Website React</div>
      <nav className="nav">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="profile" className="nav-item">Profile</Link>
          <Link to="blog" className="nav-item">Blog</Link>
          <Link to="contact" className="nav-item">Contact</Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="blog/:id" element={<BlogDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
