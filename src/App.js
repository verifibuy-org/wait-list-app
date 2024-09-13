import logo from './assets/Footer Logo.svg';
import './App.css';
import phoneImage from './assets/android-mobile.png'
// import { RiSecurePaymentLine } from "react-icons/ri";
// import { TbShoppingCartCog } from "react-icons/tb";
import { MdOutlineAddBusiness } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";

function App() {
    return (
        <div className="content-container">
            <div className="logo-container">
                <img src={logo} alt="Kokorko Logo" />
            </div>
            {/* <div class="ball b1"></div> */}
            <div className="content">
                <div className='text-container'>
                    <div className='top'>
                        <div className='top-text'>
                            <h1>Ready to shop and sell with zero stress?</h1>
                            <p>Kokorko is set to revolutionize the ecommerce 
                                space in Ghana and beyond.</p>
                        </div>
                        <div className='image-container'>
                            <img src={phoneImage} alt="Phone" />
                        </div>
                    </div>
                    <hr className='line'/>
                    <div className='bottom-text'>
                        <h2>What to expect</h2>
                        <div className='cards'>
                            <div className='card'>
                                {/* <RiSecurePaymentLine color='#ff0000' size='3rem'/> */}
                                <MdOutlinePayments color='#ff0000' size='3rem' />
                                <p>
                                    Payments stay secure until you're happy with what you get.
                                    We keep your money safe with VBuy.
                                </p>
                            </div>
                            <div className='card'>
                                {/* <TbShoppingCartCog color='#7575a3' size='3rem'/> */}
                                <MdOutlineAddShoppingCart color='#7575a3' size='3rem' />
                                <p> 
                                    Sellers can connect their social media channels to keep 
                                    things flowing smoothly across their online stores.
                                </p>
                            </div>
                            <div className='card'>
                                <MdOutlineAddBusiness color='#3333ff' size='3rem' />
                                <p>
                                    Easy to use, easy to scale. We're here to help you level up your hustle!
                                    With user friendly interface, built with you in mind.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='cta'>
                        <p>
                            Sign up now to be first in line for awesome deals, social selling, and a shopping experience that's all about fun, trust, and great finds!
                        </p>
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
