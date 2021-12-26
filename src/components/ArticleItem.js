import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatDistanceToNow } from 'date-fns'

const StyledArticleItem = styled(Link)`
  display: flex;
  background-color: white;
  border-radius: var(--default-border-radius);
  margin-bottom: 0.5rem;
  text-decoration: none;
  color: black;
  .image-box {
    flex: 3;
    position: relative;
    img {
      object-fit: cover;
      border-radius: var(--default-border-radius);
      width: 100%;
      min-height: 100%;
      max-height: 15rem;
    }
  }
  .info-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
    flex: 4;
    font-size: 1rem;
    font-family: var(--font-bold);
    .top-info {
      h4 {
        font-size: 1.05rem;
      }
      p {
        display: none;
      }
    }
    .bottom-info {
      margin-top: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-family: var(--font-light);
      }
      .category-box {
        padding: 0.25rem 0.5rem;
        background-color: var(--primary-color);
      }
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 586px) {
    flex-direction: column;
    margin-bottom: 0;
    .info-box {
      .top-info {
        h4 {
          font-size: 1.2rem;
          margin-bottom: 0.25rem;
        }
        p {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-family: var(--font-light);
        }
      }
    }
  }
`

const ArticleItem = (props) => {
  const {title, image, date, body, category} = props.article
  const titleWithoutSpecialCharacters = title.toLowerCase().trim().replace(/[^a-zA-Z0-9 ]/g, '').split(' ').join('-');
  return (
    <StyledArticleItem to={`/a/${titleWithoutSpecialCharacters}`}>
      <div className="image-box">
        <img src={image} alt={title} />
      </div>
      <div className="info-box">
        <div className="top-info">
          <h4>{title}</h4>
          <p>{body.slice(0, 200)}</p>
        </div>
        <div className="bottom-info">
          <p>{formatDistanceToNow(Date.parse(date))} ago</p>
          <div className="category-box">
            #{category} 
          </div>
        </div>
      </div>
    </StyledArticleItem>
  )
}



export default ArticleItem