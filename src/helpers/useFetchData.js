import { useReducer, useEffect } from 'react' 
import { categories as categoriesData, articles as articlesData } from '../testData'
import CategoryItem from '../components/CategoryItem'
import StyledArticleItem from '../components/ArticleItem'


const fetchAsyncData = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))
}

const fetchCategories = async () => {
  await fetchAsyncData();
};

const fetchDataReducer = (state, action) => {
  switch (action.type) {
    case 'FETCHCATEGORIES':
      fetchCategories()
      return {
        categories: categoriesData,
        articles: state.articles,
        category: state.category,
      };
    case 'FETCHARTICLES':
      const fetchArticles = async () => {
        await fetchAsyncData();
      };
      fetchArticles()
      return {
        categories: state.categories,
        articles: articlesData,
        category: state.category,
      };
    case 'CHANGECATEGORY':
      fetchCategories()
      const articles = articlesData.filter(article => {
        if (article.category.toLowerCase().split(' ').join('-') === action.category || action.category === 'all') {
          return true
        } else {
          return false;
        }
      })
      return {
        categories: state.categories,
        articles: articles,
        category: action.category,
      };
    default:
      throw new Error('Błąd w state managmentcie')
  }
}

const useFetchData = () => {
  const [state, dispatch] = useReducer(fetchDataReducer, {categories: [], articles: [], category: 'all'})

  useEffect(() => {
    dispatch({type: 'FETCHCATEGORIES'})
    dispatch({type: 'FETCHARTICLES'})
  }, [])

  const handleChoosingCategory = (title) => dispatch({type: 'CHANGECATEGORY', category: title})

  const categories = state.categories.map(category => (
    <CategoryItem 
      key={category.id} 
      to={""} 
      className={category.title.toLowerCase().split(' ').join('-') === state.category.toLowerCase() ? 'active' : null}
      onClick={() => handleChoosingCategory(category.title.toLowerCase().split(' ').join('-'))}
    >
      <div className="icon-box">
        {category.image !== '' ? <img src={category.image} alt={category.title} /> : category.title.charAt(0)}
      </div>
      <p>{category.title}</p>
    </CategoryItem>
  ))

  const articles = state.articles.map(article => {
    return (<StyledArticleItem key={article.id} article={article}/>)
  })

  return [categories, articles, state.category ]
}

export default useFetchData
