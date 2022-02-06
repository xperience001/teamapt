import './App.scss';
import first from './images/eeeee.jpg';
import second from './images/eeree.jpg';
import third from './images/f.jpg';
import fourth from './images/ff.jpg';
import fifth from './images/frrr.jpg';

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="Apps">
      <header className="App-header">
        <Link to="first" style={{ textDecoration: 'none' }} to="/"><nav className='logo'><img style={{ height: '3rem', width: '3rem', marginLeft: '2rem', marginTop: '2rem' }} src={second} /></nav></Link>
        <div className='socio'>
          <nav>Facebook</nav>
          <nav>LinkedIn</nav>
          <nav>YouTube</nav>
        </div>
        <span className='get'>
          Get the full report
        </span>
      </header>
      <h1 className='sectors'>OUR SECTORS</h1>
      <div className='frames' style={{ marginTop: '-2rem' }}>
        <Link to="first" style={{ textDecoration: 'none' }} to="/view"><div className='imgdiv'>
          <span className='num'>
            <h1 className='numnum'>01</h1>
            <h2 className='numword'>AX CARE</h2>
          </span>
          <img src={first} /></div></Link>
        <Link to="first" style={{ textDecoration: 'none' }} to="/view"><div className='imgdiv'><span className='num'>           <h1 className='numnum'>02</h1>
          <h2 className='numword'>AX HOTELS</h2></span><img src={second} /></div></Link>
        <Link to="first" style={{ textDecoration: 'none' }} to="/view"><div className='imgdiv'><span className='num'>           <h1 className='numnum'>03</h1>
          <h2 className='numword'>AX LOUNGE</h2></span><img src={third} /></div></Link>
        <Link to="first" style={{ textDecoration: 'none' }} to="/view"><div className='imgdiv'><span className='num'>           <h1 className='numnum'>04</h1>
          <h2 className='numword'>AX SUITES</h2></span><img src={first} /></div></Link>
        <Link to="first" style={{ textDecoration: 'none' }} to="/view"><div className='imgdiv'><span className='num'>           <h1 className='numnum'>05</h1>
          <h2 className='numword'>AX GUESTS</h2></span><img src={fourth} /></div></Link>
        <Link to="first" style={{ textDecoration: 'none' }} to="/view"><div className='imgdiv'><span className='num'>           <h1 className='numnum'>06</h1>
          <h2 className='numword'>AX LAND</h2></span><img src={fifth} /></div></Link >
      </div>
    </div>
  );
}

export default App;
