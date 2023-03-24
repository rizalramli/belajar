// import Welcome, {Welcomeh2} from './1';
// import Button from './2';
// import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import AboutTeam from './AboutTeam';
import Blog from './Blog';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';
import Login from './Login';
import Dashboard from './Dashboard';
function App() {
  return (
    <div className="App">
        {/* <Welcome />
        <Welcomeh2 children="Welcome Children" />
        <Welcomeh2>Welcome html styling syntax</Welcomeh2>

        <Button>Button styling</Button> */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}>
            <Route path="team" element={<AboutTeam />}></Route>
          </Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="blog/:slug" element={<BlogDetail />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </div>
  );
}

export default App;
