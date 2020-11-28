import styled from "styled-components";

export const TextBox = styled.span`
  font-family: ${props => props.theme.text.fontFamily};
  font-size: ${({theme, size}) => theme.text[size]};
  font-weight: ${({bold}) => bold ? "bold" : "normal"};
`;