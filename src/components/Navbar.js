import styled from "styled-components"
import { Container } from "../globalStyles"
import IconButton from "./IconButton"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';


const StyledNavbar = styled.nav`
  div.container {
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;
  }
  div.container .nav-right {
    justify-content: flex-end;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-family: var(--font-bold);
  color: var(--primary-color);
`;

const StyledSearchInput = styled.input`
  background-color: transparent;
  color: white;
  border: none;
  width: ${(props) => props.full ? '100%' : '100%'};
  font-size: 1rem;
  margin-right: 0.5rem;
  &:focus {
    outline: none;
  }
`
const StyledForm = styled.form`
  border-radius: var(--default-border-radius);
  padding: 0.25rem 0.5rem;
  display: flex;
  width: ${(props) => props.full ? '100%' : '30%'};
  background-color: var(--dark-blue-color);
  :focus-within {
    outline: 2px solid var(--primary-color);
  }
`

const Navbar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleSearchClick = () => {
    setIsSearching(!isSearching)
  };
  const handleResizeNav = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResizeNav);
    return () => {
      window.removeEventListener('resize', handleResizeNav)
    }
  })

  const mobileNav = (
    <>
    {isSearching ? null : <Logo to="/">KJMM.PL</Logo>} 
      <div className="nav-right">
        {isSearching ? 
        <StyledForm full>
          <StyledSearchInput full placeholder="Search..." />
          <IconButton white>
            <span className="material-icons-outlined">
              search
            </span>
          </IconButton>
        </StyledForm>
        : <IconButton onClick={handleSearchClick}>
            <span className="material-icons-outlined">
              search
            </span>
          </IconButton>
        }
        {isSearching ? 
        <IconButton onClick={handleSearchClick}>
          <span className="material-icons-outlined">
            close
          </span>
        </IconButton> 
        : <IconButton>
          <span className="material-icons-outlined">
            dark_mode
          </span>
        </IconButton>}
      </div>
    </>
  )

  const desktopNav = (
    <>
      <Logo to="/">KJMM.PL</Logo>
      <div className="nav-right">
        <StyledForm >
          <StyledSearchInput placeholder="Search..." />
          <IconButton white>
            <span className="material-icons-outlined">
              search
            </span>
          </IconButton>
        </StyledForm>
        <IconButton>
          <span className="material-icons-outlined">
            dark_mode
          </span>
        </IconButton>
      </div>
    </>
  )

  return (
    <StyledNavbar>
      <Container className="container">
        {windowWidth < 768 ? mobileNav : desktopNav}
      </Container>
    </StyledNavbar>
  )
}

export default Navbar