import { Link } from 'react-router-dom';
import { HomeIcon, PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-gray-800">Run Club</span>
          </Link>
          
          <div className="flex space-x-4">
            <Link to="/create-group" className="flex items-center space-x-1 text-gray-600 hover:text-primary">
              <PlusIcon className="h-5 w-5" />
              <span className="hidden md:inline">Create Group</span>
            </Link>
            <Link to="/search" className="flex items-center space-x-1 text-gray-600 hover:text-primary">
              <MagnifyingGlassIcon className="h-5 w-5" />
              <span className="hidden md:inline">Search</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 