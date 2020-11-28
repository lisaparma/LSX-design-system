import styled from "styled-components";

export const ModalContainer = styled.div`
  margin: auto;
  border-radius: 15px;
  background-color: ${props => props.theme.modal.background};
  min-width: 200px;
  max-width: 70%;
  max-height: 60%;
  display: flex;
  flex-direction: column;
`;

export const HeaderModal = styled.div`
  padding: 15px 15px 5px 15px;
  font-weight: bold;
`;
export const ContentModal = styled.div`
  padding: ${props => props.title ? "5px 15px 15px 15px" : "15px"};
  height: fit-content;
  flex-direction: column;
`;
export const FooterModal = styled.div`
  padding-top: 10px;
`;