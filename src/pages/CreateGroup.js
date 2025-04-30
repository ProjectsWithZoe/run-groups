import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateGroup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    date: '',
    time: '',
    maxMembers: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Group created:', formData);
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-4">
      <h1 className="text-xl font-bold text-gray-900 my-4">Create your Running Group</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Group Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="maxMembers" className="block text-sm font-medium text-gray-700">
            Maximum Number of Members
          </label>
          <select
  name="maxMembers"
  value={formData.maxMembers}
  onChange={handleChange}
  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
</select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Run Details
          </label>
          <textarea
            id="description"
            name="description"
            placeholder='e.g SE16 3TA, opposite the big Asda. 10 minute warm up. Potentially a post-run pint?'
            value={formData.description}
            onChange={handleChange}
            rows="2"
            className="mt-1 block italic w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        

        <div className="flex justify-between">
        <button
            onClick={()=>{navigate('/')}}
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Create Group
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateGroup; 