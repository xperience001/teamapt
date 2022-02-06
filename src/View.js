import './View.scss';
import first from './images/eeeee.jpg';
import second from './images/eeree.jpg';
import third from './images/f.jpg';
import fourth from './images/ff.jpg';
import fifth from './images/frrr.jpg';

import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <nav className='logo'>logo</nav>
                <div className='socio'>
                    <nav>Facebook</nav>
                    <nav>LinkedIn</nav>
                    <nav>YouTube</nav>
                </div>
                <span className='get'>
                    Get the full report
                </span>
            </header>
            <div className='cont'>
                <div className='left'>
                    <div className='x'>X</div>
                    <h2 className='xx'>02</h2>
                    <h1 className='xxx'>AX HOTELS</h1>
                    <h2 className='xxxx'>Emerging stronger</h2>
                </div>
                <div className='right'>
                    <img src={first} /></div>
            </div>


        </div >
    );
}

export default App;
