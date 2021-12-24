import { Link } from 'react-router-dom'

const CategoryItem = ({ active, logo, title }) => {
  return (
    <li className={active ? 'active' : null}>
      <Link to={''}>
        <img src={logo} alt="" />
        <div className="category-title">
          {title}
        </div>
      </Link>
    </li>
  );
}
 
export default CategoryItem;