import styled from "styled-components";

export const InputBox = styled.input`
  // Reset
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  &:focus {
    outline: none;
  }
  
  font-family: ${props => props.theme.text.fontFamily};
  border: 1px solid ${props => props.theme.input.border};
  border-radius: 3px;
  padding: 5px 10px;
  color: ${props => props.theme.input.text};
  &:hover {
    border: 1px solid ${props => props.theme.input.hover};
  }
  &:focus {
    border: 2px solid ${props => props.theme.input.focus};
  }
`;