import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageLayout from './pages/PageLayout'
import HomePage from './pages/HomePage'
import './styles/reset.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout/>}>
          <Route index element={<HomePage/>}/> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
