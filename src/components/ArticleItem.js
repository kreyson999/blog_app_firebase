import FortniteArticleBg from '../assets/fortnite_article_bg.jpg'
import { Link } from 'react-router-dom'

const ArticleItem = () => {
  return (
    <Link to="">
      <div className="article-item">
        <div className="article-image">
          <img src={FortniteArticleBg} alt="" />
        </div>
        <div className="article-info">
          <div className="top-info">
            <h3>Super Post Ciekawy Mega</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rerum harum quas sunt incidunt nemo cumque dolorem voluptate officia ex!</p>
          </div>
          <div className="bottom-info">
            <p>7 minut temu</p>
            <div className="category-info">
              #Fortnite
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
 
export default ArticleItem;