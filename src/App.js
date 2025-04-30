import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateGroup from './pages/CreateGroup';
import SearchGroups from './pages/SearchGroups';
import GroupDetails from './pages/GroupDetails';

function App() {
  return (
    <Router>
      <div className="h-screen bg-gray-100">
        <Navbar />
        <main className="flex flex-col justify-between">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-group" element={<CreateGroup />} />
            <Route path="/search" element={<SearchGroups />} />
            <Route path="/group/:id" element={<GroupDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
