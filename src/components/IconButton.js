import styled from 'styled-components'

const IconButton = styled.button`
  display: ${(props) => props.desktopOnly ? 'none' : 'block'};
  margin-right: 0.5rem;
  background-color: ${(props) => props.circle ? 'var(--dark-blue-color)' : 'transparent'};
  border: none;
  cursor: pointer;
  height: 100%;
  clip-path: ${(props) => props.circle ? 'circle()' : 'none'};
  padding: ${(props) => props.circle ? '0.25rem' : '0'};
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .material-icons-outlined {
    transition: transform 0.5s;
    color: ${(props) => props.white ? 'white' : 'var(--dark-blue-color)'};
    font-size: ${(props) => props.circle ? '1.5rem' : '2.1rem'};
  }
  &.rotated .material-icons-outlined {
    transform: rotate(90deg);
  }
  :last-child {
    margin-right: 0;
  }
  @media screen and (min-width: 586px) {
    display: block;
  }
`

export default IconButton