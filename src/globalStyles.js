import { createGlobalStyle  } from "styled-components";
import styled from 'styled-components';
import GilroyExtraBold from './fonts/Gilroy-ExtraBold.otf'
import GilroyLight from './fonts/Gilroy-Light.otf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GilroyExtraBold';
    src: url(${GilroyExtraBold});
  }
  @font-face {
    font-family: 'GilroyLight';
    src: url(${GilroyLight});
  }
  :root {
    --default-border-radius: 12px;
    --primary-color: #06BCC1;
    --dark-blue-color: #12263A;
    --grey-color: #6D7888;
    --font-bold: 'GilroyExtraBold', sans-serif;
    --font-light: 'GilroyLight', sans-serif;
  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 1.1rem;
    font-family: var(--font-light);
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .page-body {
    display: flex;
    flex-grow: 1;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.directionColumn ? 'column' : 'row'};
  max-width: 1170px;
  margin: 0 auto;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-grow: 1;
  }
`
export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 100vw;
  padding: ${(props) => props.showDesktopView ? '0 0.5rem' : '0'};
  .bottom-main {
    margin-top: ${(props) => props.showDesktopView ? '0.5rem' : '0'};
    border-radius: ${(props) => props.showDesktopView ? 'var(--default-border-radius)' : '0'};
    padding: ${(props) => props.showDesktopView ? '0.5rem' : '0'};
    background-color: ${(props) => props.showDesktopView ? 'var(--grey-color)' : 'transparent'};
    position: relative;
    display: flex;
    flex-direction: ${(props) => props.directionColumn ? 'column' : 'row'};
    overflow-x: ${(props) => props.scrollable ? 'scroll' : 'auto' };
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;
  }
  .bottom-main::-webkit-scrollbar {
    display: none;
  }
  .top-main {
    display: ${(props) => props.showDesktopView ? 'flex' : 'none'};
  }
  @media screen and (min-width: 768px) {
    flex: 1;
    .bottom-main {
      margin-top: 0;
      gap: ${(props) => props.showDesktopView ? '0.5rem' : '0'};
      background-color: var(--dark-blue-color);
      flex-direction: column;
      overflow-x: auto;
      padding: ${(props) => props.showDesktopView ? '0.5rem' : '0.5rem 0 0.5rem 0.5rem'};
      border-radius: var(--default-border-radius);
      height: 100%;
      margin-bottom: 1rem;
    }
    .top-main {
      margin: 1rem 0 0.5rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &.closed {
      flex: unset;
      .top-main h4 {
        display: none;
      }
      .bottom-main a {
        width: min-content;
        p {
          display: none;
        }
      }
    }
  }
`
export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  .top-main {
    margin: 1rem 0 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bottom-main {
    display: ${(props) => props.flexColumnMain ? 'flex' : 'unset'};
    flex-direction: column;
    border-radius: var(--default-border-radius);
    padding: 0.5rem;
    background-color: var(--dark-blue-color);
    height: 100%;
    margin-bottom: 1rem;
    img {
      max-width: 100%;
      border-radius: var(--default-border-radius);
    }
  }
  .right-side {
    display: flex;
    align-items: center;
    button {
      margin-right: 0;
    }
  }
  @media screen and (min-width: 768px) {
    flex: 3;
    .bottom-main {
      background-color: var(--grey-color);
    }
  }
  @media screen and (min-width: 586px) {
    .bottom-main {
      display: ${(props) => props.flexColumnMain ? 'flex' : 'grid'};
      grid-gap: 0.5rem;
      grid-template-columns: ${(props) => props.rowView ? 'repeat(auto-fit, minmax(250px, 0.5fr))' : '1fr'};
    }
  }
`