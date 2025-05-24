import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-white/90">
              Providing professional healthcare services for sexual and reproductive
              health in a confidential and comfortable environment.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/90 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/90 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/90 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/90 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/sti-testing" className="text-white/90 hover:text-white">
                  STI Testing
                </Link>
              </li>
              <li>
                <Link to="/services/period-tracking" className="text-white/90 hover:text-white">
                  Period Tracking
                </Link>
              </li>
              <li>
                <Link to="/services/consultation" className="text-white/90 hover:text-white">
                  Online Consultation
                </Link>
              </li>
              <li>
                <Link to="/services/advice" className="text-white/90 hover:text-white">
                  Expert Advice
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/90 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white/90 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white/90 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white/90 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-8">
          <p className="text-white/90 text-center">
            © {new Date().getFullYear()} Gender Healthcare Service. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 