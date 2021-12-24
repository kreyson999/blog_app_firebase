import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import '../styles/Layout/Layout.css'

function PageLayout() {
  return (
    <>
      <Navbar/>
      <div className="page-body">
        <Outlet/>
      </div>
      <footer>
        <div className="container">
          <div className="footer-info">
            <h4>MLYNEK.XYZ - największy portal informacyjny o grach oraz social mediach!</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates itaque aliquid dolores quia facere nostrum quisquam illo, nulla autem, esse eaque vitae commodi, repudiandae necessitatibus quo doloribus ullam doloremque eligendi.</p>
          </div>
          <div className="footer-bottom">
            <div className="footer-buttons">
              <button>FAQ</button>
              <button>Zarejestruj się</button>
              <button>Zostaw feedback</button>
              <button>Zaproponuj kategorię</button>
            </div>
            <div className="footer-company-info">
              <button>Polityka prywatności</button>
              <button>Regulamin</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default PageLayout;