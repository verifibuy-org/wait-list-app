import logo from './Logo-white.svg';
import './App.css';

function App() {
  return (
    <div className="content-container">
          <div className="logo-container">
              <img src={logo} alt="Kokorko Logo" />
          </div>
          <div className="content">
              <div className="text-container">
                  <h1>Kokorko Marketplace is Launching Soon</h1>
                  <p>
                      Be the first to experience Kokorko Marketplace! <br/> Sign up now with your phone number or email to stay updated and get exclusive early access
                  </p>
              </div>
              <div className="button-container">
                  <a href="https://form.jotform.com/242534443859060" target="_blank" rel='noopener noreferrer' class="btn">I'm in</a>
              </div>
          </div>
      </div>
  );
}

export default App;
