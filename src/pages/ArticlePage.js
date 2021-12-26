import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, StyledAside, StyledMain } from "../globalStyles";
import { articles, categories } from "../testData";
import { formatDistanceToNow } from 'date-fns'
import StyledArticleItem from '../components/ArticleItem'
import CategoryItem from "../components/CategoryItem";

function ArticlePage() {
  const { articleTitle } = useParams()
  const [article, setArticle] = useState(false);
  const [categoryArticles, setCategoryArticles] = useState(false);
  

  useEffect(() => {
    const fetchedArticle = articles.find(item => {
      if (item.title.toLowerCase().trim().replace(/[^a-zA-Z0-9 ]/g, '').split(' ').join('-') === articleTitle) {
        return true;
      }
      return false;
    })
    setArticle(fetchedArticle)
  }, [articleTitle])

  useEffect(() => {
    const fetchedCategoryArticles = articles.filter(item => {
      if (item.category === article.category) {
        return true;
      }
      return false;
    }).slice(0, 4);
    setCategoryArticles(fetchedCategoryArticles);
  }, [article])


  return ( 
    <Container directionColumn>
      <StyledMain flexColumnMain>
        <div className="top-main">
          <p style={{textAlign: 'left'}}>Autor: {article.author}</p>
          <p style={{textAlign: 'right'}}>Opublikowano: {article ? formatDistanceToNow(Date.parse(article.date)) : 'x'} temu</p>
        </div>
        <div className="bottom-main">
          <h1 style={{color: 'white', fontFamily: 'var(--font-bold)'}}>{article.title}</h1>
          <img src={article.bodyImg} alt={article.title} />
          <h2 style={{fontFamily: 'var(--font-bold)'}}>Nagłowek posta 1</h2>
          <p style={{color: 'white'}}>{article.body}</p>
          <h2 style={{fontFamily: 'var(--font-bold)'}}>Nagłowek posta 2</h2>
          <p style={{color: 'white'}}>{article.body}</p>
        </div>
      </StyledMain>
      <StyledAside showDesktopView directionColumn>
        <div className="top-main">
          <h4>Inne z #{article ? article.category : 'x'}</h4>
        </div>
        <div className="bottom-main">
          {article ? categoryArticles.map(item => {
            return <StyledArticleItem key={item.id} article={item}/>
          }) : 'Loading...'}
        </div>
      </StyledAside>
    </Container>
  );
}

export default ArticlePage;