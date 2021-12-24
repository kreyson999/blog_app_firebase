import ArticleItem from "./ArticleItem";
import { useState } from 'react'
const ArticlesList = () => {
  const [isColumnView, setIsColumnView] = useState(false);

  const handleChangeView = () => setIsColumnView(!isColumnView)
  return (
    <main>
      <div className="top-main">
        <h4>Artykuły</h4>
        <div className="right-side">
          <button>
            <span className="material-icons-outlined">
              sort
            </span>
          </button>
          <button onClick={handleChangeView} className="circle-btn desktop-only">
            <span className={isColumnView ? 'material-icons-outlined rotate90' : 'material-icons-outlined'}>
              view_week
            </span>
          </button>
        </div>
      </div>
      <div className={isColumnView ? 'bottom-main col-view' : 'bottom-main'}>
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </div>
    </main>
  );
}
export default ArticlesList;