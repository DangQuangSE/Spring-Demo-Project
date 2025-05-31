import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import logo from "../../assets/SHealth.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white rounded-full shadow-xl mt-4 mx-auto max-w-7xl border-none"
          : "bg-white border-b border-gray-200"
      }`}
      style={scrolled ? {padding: '0 2rem'} : {}}
    >
      <div className="w-full flex justify-between items-center h-16 px-4">
        <Link
          to="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <img
            src={logo}
            alt="Gender Healthcare Logo"
            className="h-16 w-auto"
          />
          <span className="text-xl font-semibold text-primary">
            Gender Healthcare
          </span>
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-800 hover:text-primary font-medium transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-800 hover:text-primary font-medium transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            to="/blog"
            className="text-gray-800 hover:text-primary font-medium transition-colors duration-200"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-primary font-medium transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-gray-800 hover:text-primary font-medium transition-colors duration-200"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="bg-gradient-primary hover:bg-gradient-primary-hover text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-800 hover:text-primary font-medium transition-colors duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-gradient-primary hover:bg-gradient-primary-hover text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
