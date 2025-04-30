import { useParams } from 'react-router-dom';
import { MapPinIcon, CalendarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

function GroupDetails() {
  const { id } = useParams();

  // This would be replaced with real data from your backend
  const group = {
    id: 1,
    name: 'Morning Runners',
    location: 'Central Park',
    date: '2024-03-15',
    time: '06:00',
    maxMembers: 10,
    currentMembers: 5,
    description: 'Join us for a refreshing morning run through Central Park. We meet at the main entrance and run various routes through the park. All levels are welcome!',
    organizer: 'John Doe',
    organizerEmail: 'john@example.com',
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{group.name}</h1>
        
        <div className="space-y-4 mb-8">
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

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">About the Group</h2>
          <p className="text-gray-600">{group.description}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Organizer</h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-900 font-medium">{group.organizer}</p>
            <p className="text-gray-600">{group.organizerEmail}</p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            onClick={() => {
              // Here you would typically handle joining the group
              console.log('Joining group:', group.id);
            }}
          >
            Join Group
          </button>
        </div>
      </div>
    </div>
  );
}

export default GroupDetails; 