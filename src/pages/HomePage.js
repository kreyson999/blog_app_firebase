import CategoryItem from "../components/CategoryItem";
import { Container, StyledAside, StyledMain } from "../globalStyles";
import { categories, articles } from '../testData';
import IconButton from "../components/IconButton";
import StyledArticleItem from "../components/ArticleItem";
import { useState, useEffect } from "react";

function HomePage() {
  const [choosedCategory, setChoosedCategory] = useState('all');
  const [articlesView, setArticlesView] = useState(true);
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [articlesList, setArticlesList] = useState([])

  useEffect(() => {
    const loadArticles = (category) => {
      return articles.map(article => {
        if ((article.category.toLowerCase().split(' ').join('-') === category) || (category === 'all')) {
          return (<StyledArticleItem key={article.id} article={article}/>)
        }
        return false;
      })
    }
    const loadedArticles = loadArticles(choosedCategory.toLowerCase())
    setArticlesList(loadedArticles);
  }, [choosedCategory])
  const handleChangingView = () => {
    setArticlesView(!articlesView);
  }
  const handleChooseCategory = (title) => {
    setChoosedCategory(title);
  }
  const handleClosingSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
  }

  return (
    <Container directionColumn>
      <StyledAside scrollable className={isSidebarClosed ? 'closed' : null}>
        <div className="top-main">
          <h4>Categories</h4>
          <IconButton circle white onClick={handleClosingSidebar}>
            <span className="material-icons-outlined">
              {isSidebarClosed ? 'arrow_forward_ios' : 'arrow_back_ios'}
            </span>
          </IconButton>
        </div>
        <div className="bottom-main">
          {categories.map(category => (
            <CategoryItem 
              key={category.id} 
              to={""} 
              className={category.title.toLowerCase().split(' ').join('-') === choosedCategory.toLowerCase() ? 'active' : null}
              onClick={() => handleChooseCategory(category.title.toLowerCase().split(' ').join('-'))}
            >
              <div className="icon-box">
                {category.image !== '' ? <img src={category.image} alt={category.title} /> : category.title.charAt(0)}
              </div>
              <p>{category.title}</p>
            </CategoryItem>
            )
          )}
        </div>
      </StyledAside>
      <StyledMain rowView={articlesView ? true : false}>
        <div className="top-main">
          <h4>Articles: #{choosedCategory}</h4>
          <div className="right-side">
            <IconButton>
              <span className="material-icons-outlined">
                sort
              </span>
            </IconButton>
            <IconButton desktopOnly circle white onClick={handleChangingView} className={articlesView ? 'rotated' : null}>
              <span className="material-icons-outlined">
              view_week
              </span>
            </IconButton>
          </div>
        </div>
        <div className="bottom-main">
          {articlesList.length > 0 ? articlesList : (<h1>We have not found any articles is this categoy!</h1>)}
        </div>
      </StyledMain>
    </Container>
  );
}

export default HomePage;