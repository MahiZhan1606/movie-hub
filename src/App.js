import logo from './logo.svg';
import './App.css';
import { MovieList } from './MovieList';
import { AddColor } from './AddColor';
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/colorgame">Color Game</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flim" element={<Navigate replace to="/movies" />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/colorgame" element={<AddColor />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>Welcome to MovieApp</h1>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>Thankyou For Visting this app</h1>
    </div>
  )
}

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found">404 Page NotFound😢</h1>
      <img
        src="https://techcrunch.com/wp-content/uploads/2016/05/jgithub.gif?w=700&crop=1 "
        alt="404 Page NotFound"
      />
    </div>
  )
}
export default App;
