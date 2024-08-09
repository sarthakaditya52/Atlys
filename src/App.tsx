import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Containers/LoginPage';
import BlogsPage from './Containers/BlogsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
