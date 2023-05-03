import {
  Routes, Route, Link, Outlet,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Quote from './components/Quote';
import Calculator from './components/calculator';

function App() {
  function Layout() {
    return (
      <>
        <nav>
          <div className="navbar">
            <h1 className="nav-logo">Math Magician</h1>
            <ul className="nav-lists">
              <li className="nav-list"><Link className="link" to="/">Home</Link></li>
              <li className="nav-list"><Link className="link" to="/calculator">Calculator</Link></li>
              <li className="nav-list"><Link className="link" to="/quote">Quote</Link></li>
            </ul>
          </div>
        </nav>
        <Outlet />
        <footer>
          <p>This app is Licensed cc</p>
        </footer>
      </>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
