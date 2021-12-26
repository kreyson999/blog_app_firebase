import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageLayout from './pages/PageLayout'
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<PageLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/a/:articleTitle" element={<ArticlePage/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
