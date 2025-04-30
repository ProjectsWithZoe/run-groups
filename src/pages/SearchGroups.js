import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, MapPinIcon, CalendarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

function SearchGroups() {
  const [filters, setFilters] = useState({
    location: '',
    date: '',
    maxMembers: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // This would be replaced with real data from your backend
  const groups = [
    {
      id: 1,
      name: 'Morning Runners',
      location: 'Central Park',
      date: '2024-03-15',
      time: '06:00',
      maxMembers: 10,
      currentMembers: 5,
      description: 'Join us for a refreshing morning run through Central Park.',
    },
    {
      id: 2,
      name: 'Evening Joggers',
      location: 'Riverside Park',
      date: '2024-03-16',
      time: '18:00',
      maxMembers: 8,
      currentMembers: 3,
      description: 'Evening jogging group for all levels.',
    },
  ];

  const filteredGroups = groups.filter(group => {
    return (
      (!filters.location || group.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (!filters.date || group.date === filters.date) &&
      (!filters.maxMembers || group.maxMembers <= parseInt(filters.maxMembers))
    );
  });

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Find Running Groups</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
              placeholder="Enter location"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={filters.date}
              onChange={handleFilterChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="maxMembers" className="block text-sm font-medium text-gray-700">
              Maximum Members
            </label>
            <input
              type="number"
              id="maxMembers"
              name="maxMembers"
              value={filters.maxMembers}
              onChange={handleFilterChange}
              placeholder="Enter max members"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGroups.map(group => (
          <div key={group.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{group.name}</h3>
            <p className="text-gray-600 mb-4">{group.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-600">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>{group.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>{group.date} at {group.time}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <UserGroupIcon className="h-5 w-5 mr-2" />
                <span>{group.currentMembers}/{group.maxMembers} members</span>
              </div>
            </div>

            <Link
              to={`/group/${group.id}`}
              className="text-primary hover:text-blue-600 flex items-center"
            >
              View Details
              <ArrowRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchGroups; 