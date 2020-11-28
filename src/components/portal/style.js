import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, ${({opacity}) => opacity});
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;