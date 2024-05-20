import { Link } from 'react-router-dom';
import './footer.css'

function Footer() {
    return (
        <div className="Footer">
            <footer>
                <div class="containerr">
                    <div class="footer-content">
                        <h3>Contact Us</h3>
                        <p><a href="mailto:l217517@lhr.nu.edu.pk">clothify@business.com</a></p>
                        <p><Link to="tel:+923210000000">+92 321 0000000</Link></p>
                        <p className='addr'>Lahore, Pakistan</p>
                    </div>
                    <div class="footer-content">
                        <h3>Quick Links</h3>
                        <ul class="list">
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Privacy">Privacy Policy</Link></li>
                            <li><Link to="/Terms">Terms & Conditions</Link></li>
                            
                        </ul>
                    </div>
                    <div class="footer-content">
                        <h3>Follow Us</h3>
                        <ul class="social-icons">
                        <li><Link to="https://www.facebook.com"><i class="fab fa-facebook"></i></Link></li>
                        <li><Link to="https://www.x.com"><i class="fab fa-twitter"></i></Link></li>
                        <li><Link to="https://www.instagram.com"><i class="fab fa-instagram"></i></Link></li>
                        <li><Link to="https://www.linked.com"><i class="fab fa-linkedin"></i></Link></li>
                        </ul>
                        </div>
                </div>
                <div className="bottom-bar">
                    <p>&copy; 2023 Clothify. All rights reserved</p>
                </div>
            </footer>
        </div>
    );
  }
  
  export default Footer;
