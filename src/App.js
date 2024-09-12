import logo from './assets/Footer Logo.svg';
import './App.css';
import phoneImage from './assets/android-mobile.png'

function App() {
    return (
        <div className="content-container">
            <div className="logo-container">
                <img src={logo} alt="Kokorko Logo" />
            </div>
            {/* <div class="ball b1"></div> */}
            <div className="content">
                <div className='text-container'>
                    <div className='text'>
                        <h1>Ready to shop and sell with zero stress?</h1>
                        <p></p>
                    </div>
                    <div className='image-container'>
                        <img src={phoneImage} alt="Phone" />
                    </div>
                </div>
                {/* <div class="ball b2"></div> */}
                <div className="button-container">
                    <a href="https://form.jotform.com/242534443859060" target="_blank" rel='noopener noreferrer' class="btn">I'm in</a>
                </div>
            </div>
        </div> 
    );
}

export default App;
