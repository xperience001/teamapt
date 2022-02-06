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
            <div className='cont'>
                <div className='left'>
                    <Link to="first" style={{ textDecoration: 'none' }} to="/"><div className='x'>X</div></Link>
                    <h2 className='xx'>02</h2>
                    <div className='space`'>

                        <h1 className='xxx'>AX HOTELS</h1>
                        <div>

                            <h2 className='xxxx'>Emerging stronger</h2>
                            <Link to="first" style={{ textDecoration: 'none' }} to="/"><div className='slo'>
                                <div className='lo'>a</div>
                                <div className='lo'>b</div>
                                <div className='dis'><p>DISCOVER</p></div>
                            </div></Link>
                        </div>
                    </div>

                </div>
                <div className='right'>
                    <img src={second} /></div>
            </div>


        </div >
    );
}

export default App;
