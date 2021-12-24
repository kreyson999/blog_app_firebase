import React, { useState, useEffect } from 'react';

function Navbar() {
  const [searchInputValue, setSearchInputValue] = useState(''); 
  const [isSearching, setIsSearching] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [isDarkMode, setIsDarkMode] = useState(false);
  
  const handleWindowResize = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })


  const mobileNav = (
    <nav>
      <div className="container">
        {isSearching ? 
        <>
          <form>
            <input 
              placeholder="Szukaj..."
              type="text" 
              value={searchInputValue} 
              onChange={(e) => setSearchInputValue(e.target.value)} 
            />
            <button>
              <span className="material-icons-outlined">
                search
              </span>
            </button>
          </form>
          <button onClick={() => setIsSearching(!isSearching)}>
            <span className="material-icons-outlined">
              close
            </span>
          </button>
        </> :
        <>
          <div className="logo">
            <h1>KJMM.PL</h1>
          </div>
          <div className="right-side">
            <button onClick={() => setIsSearching(!isSearching)}>
              <span className="material-icons-outlined">
              search
              </span>
            </button>
            <button>
              <span className="material-icons-outlined">
              dark_mode
              </span>
            </button>
          </div>
        </>
        }
      </div>
    </nav>
  )
  const desktopNav = (
    <nav>
      <div className="container">
        <div className="logo">
          <h1>KJMM.PL</h1>
        </div>
        <div className="right-side">
          <form action="">
            <input 
              placeholder="Szukaj..."
              type="text" 
              value={searchInputValue} 
              onChange={(e) => setSearchInputValue(e.target.value)} 
            />
            <button>
              <span className="material-icons-outlined">
                search
              </span>
            </button>
          </form>
          <button>
            <span className="material-icons-outlined">
            dark_mode
            </span>
          </button>
        </div>
      </div>
    </nav>
  )

  return (windowWidth < 768 ? mobileNav : desktopNav);
}

export default Navbar;