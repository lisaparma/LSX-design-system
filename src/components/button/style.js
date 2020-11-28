import styled, { css } from "styled-components";

export const ButtonBox = styled.div`
  padding: ${({theme, size}) => theme.padding[size] / 2}px ${({theme, size}) => theme.padding[size]}px;
  font-size: ${({theme, size}) => theme.text[size]};
	width: fit-content;
	height: fit-content;
	border-radius: 20px;
	cursor: ${({disabled}) => disabled ? "auto" : "pointer"};
	font-variant-caps: all-petite-caps;
	
	> div, span, i {
	display: inline-block;
	  padding: 0 5px;
	}
  
  // CONTAINED BUTTON
  ${({type, disabled}) => type === "contained" &&
    (!disabled ? contained : containedDisabled)
  }
  
  // OUTLINED BUTTON
	${({type, disabled}) => (type === "outlined") &&
    (!disabled ? outlined : outlinedDisabled)
  }
	  // TEXT BUTTON
  ${({type, disabled}) => (type === "text") &&
    (!disabled ? text : textDisabled)
  }
`;

const contained = css`
  background-color: ${({theme}) => theme.button.primary};
  color: ${({theme}) => theme.button.text};
  &:hover {
    background-color: ${({theme}) => theme.button.hover};
    color: ${({theme}) => theme.button.text};
  }
`;
const containedDisabled = css`
  background-color: ${({theme}) => theme.button.disabled};
  color: ${({theme}) => theme.button.text};
`;

const outlined = css`
  border: 1px solid ${({theme}) => theme.button.primary};
  color: ${({theme}) => theme.button.primary};
  &:hover {
    border-color: ${({theme}) => theme.button.hover};
    color: ${({theme}) => theme.button.hover};
  }
`;
const outlinedDisabled = css`
  border: 1px solid ${({theme}) => theme.button.disabled};
  color: ${({theme}) => theme.button.disabled};
`;

const text = css`
  color: ${({theme}) => theme.button.primary};
  &:hover {
    background-color: ${({theme}) => theme.button.backgroundHover};
    color: ${({theme}) => theme.button.hover};
  }
`;
const textDisabled = css`
  color: ${({theme}) => theme.button.disabled};
`;