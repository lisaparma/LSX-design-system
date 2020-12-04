import styled, {css} from "styled-components";

export const Menu = styled.div`
  font-family: ${props => props.theme.text.fontFamily};
  background-color: ${props => props.theme.sideMenu.background};
  width: 25vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
`;

export const MenuScroll = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const FirstGrade = styled.div`
  border-left: 2px solid transparent;
  border-bottom: 1px solid ${props => props.theme.sideMenu.hover};
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.sideMenu.hover};
  }
  // SELECTED ITEM
  ${({selected}) => selected && selectedStyle}
`;

const selectedStyle = css`
  color: ${({theme}) => theme.sideMenu.selectedText};
  border-left: 2px solid ${({theme}) => theme.sideMenu.selectedText};
  background-color: ${props => props.theme.sideMenu.selectedItem};
`;
