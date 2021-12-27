import { Container, StyledAside, StyledMain } from "../globalStyles";
import IconButton from "../components/IconButton";
import { useState } from "react";
import useFetchData from "../helpers/useFetchData";

function HomePage() {
  const [articlesView, setArticlesView] = useState(true);
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const [ categories, articles, category ] = useFetchData();

  const handleChangingView = () => {
    setArticlesView(!articlesView);
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
          {categories}
        </div>
      </StyledAside>
      <StyledMain rowView={articlesView ? true : false}>
        <div className="top-main">
          <h4>Articles: #{category}</h4>
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
          {articles}
        </div>
      </StyledMain>
    </Container>
  );
}

export default HomePage;