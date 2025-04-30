import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 m-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Your Running Community
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Join local running groups or create your own. Run together, stay motivated!
        </p>
        <div className=" m-4 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/create-group"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Create a Group
          </Link>
          <Link
            to="/search"
            className="bg-white text-primary border border-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Find Groups
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 m-8">Featured Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example group cards - these would be replaced with real data */}
          {[1, 2, 3].map((group) => (
            <div key={group} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Morning Runners
              </h3>
              <p className="text-gray-600 mb-4">
                Join us for a refreshing morning run through the city park.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">6:00 AM • 5 members</span>
                <Link
                  to={`/group/${group}`}
                  className="text-primary hover:text-blue-600 flex items-center"
                >
                  View Details
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home; 