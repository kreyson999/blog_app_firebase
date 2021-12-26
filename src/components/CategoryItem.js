import styled from "styled-components";
import { Link } from 'react-router-dom';


const CategoryItem = styled(Link)`
  cursor: pointer;
  user-select: none;
  background-color: var(--grey-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  color: white;
  font-family: var(--font-bold);
  padding: 0.25rem 0.5rem;
  border-radius: var(--default-border-radius);
  white-space: nowrap;
  .icon-box {
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: circle();
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
    color: var(--dark-blue-color);
    margin-right: 0.5rem;
  }
  .icon-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:first-child {
    margin-left: 0.5rem;
  }
  @media screen and (min-width: 768px) {
    border-radius: var(--default-border-radius) 0 0 var(--default-border-radius);
    margin-right: 0;
    margin-top: 0.5rem;
    border-right: 0.5rem solid var(--grey-color);
    &.active {
      border-right: 0.5rem solid var(--primary-color);
    }
    &:first-child {
      margin-left: 0;
      margin-top: 0;
    }
  }
`
 
export default CategoryItem;