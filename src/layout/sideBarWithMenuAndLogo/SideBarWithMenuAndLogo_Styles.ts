import styled from "styled-components";

const SideBarWithMenuAndLogo = styled.div`
  min-width: 40%;
  min-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SideBarOnlyLogo = styled.div`
  margin: 40px 0;

  img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 200px;
  }
`;

export const Styles = {
  SideBarWithMenuAndLogo,
  SideBarOnlyLogo
};
