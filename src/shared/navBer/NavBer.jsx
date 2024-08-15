import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import defaultImage from '../../assets/images/default_user.png'

const NavBer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user , logout } = useAuth()

  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-white text-lg font-semibold">Tech-Shop</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          {
            user ? 
            <button onClick={()=> logout()} className='text-white hover:text-gray-300'>Logout</button>
            :
          <Link to="/sign-in" className="text-white hover:text-gray-300">Sign In</Link>
          }
          <img
            src={user ? user.photoURL : defaultImage }
            alt="User"
            className="h-8 w-8 rounded-full border-2 border-gray-600 bg-white"
          />
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#home" className="block text-white py-2">Home</a>
          <a href="#login" className="block text-white py-2">Login</a>
          <img
            src="/path/to/user-photo.jpg"
            alt="User"
            className="h-8 w-8 rounded-full border-2 border-white"
          />
        </div>
      )}
    </nav>
  );
};

export default NavBer;
