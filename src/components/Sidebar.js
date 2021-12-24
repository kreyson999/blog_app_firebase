import { useState } from 'react';
import CategoryItem from './CategoryItem';
import FortniteLogo from '../assets/fortnite_logo.png';



const Sidebar = () => {

  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const handleClosingSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
  }


  return (
    <aside className={isSidebarClosed ? 'closed' : null}>
      <div className="sticky-container">
        <div className="top-aside desktop-only">
        <h4>Kategorie</h4>
        <button onClick={handleClosingSidebar} className="circle-btn">
          <span className="material-icons-outlined">
            {isSidebarClosed ? 'arrow_forward_ios' : 'arrow_back_ios'}
          </span>
        </button>
      </div>
      <ul className="bottom-aside">
        <CategoryItem 
          active={true} 
          logo={FortniteLogo} 
          title="Wszystkie"
        />
        <CategoryItem 
          active={false} 
          logo={FortniteLogo} 
          title="Fortnite"
        />
        <CategoryItem 
          active={false} 
          logo={FortniteLogo} 
          title="Minecraft"
        />
        <CategoryItem 
          active={false} 
          logo={FortniteLogo} 
          title="CS:GO"
        />
        <CategoryItem 
          active={false} 
          logo={FortniteLogo} 
          title="League Of Legends"
        />
        <CategoryItem 
          active={false} 
          logo={FortniteLogo} 
          title="Rozrywka"
        />
        <CategoryItem 
          active={false} 
          logo={FortniteLogo} 
          title="Pieniądze"
        />
      </ul>
      </div>
    </aside>
  );
}
 
export default Sidebar;