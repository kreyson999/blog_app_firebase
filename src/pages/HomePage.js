import '../styles/Homepage/Homepage.css';
import ArticleItem from '../components/ArticleItem';
import Sidebar from '../components/Sidebar'
import ArticlesList from '../components/ArticlesList';

function HomePage() {
  return (
    <div className="homepage container">
      <Sidebar />
      <ArticlesList/>
    </div>
  );
}

export default HomePage;