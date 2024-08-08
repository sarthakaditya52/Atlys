import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Containers/LoginPage';
import BlogsPage from './Containers/BlogsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
