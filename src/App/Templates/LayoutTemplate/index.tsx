import React, { ReactNode } from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { Sidebar } from "./Sidebar";

const Top = styled.div`
  display: grid;
  gap: 1rem;
  grid-template:
    "header header" min-content
    "sidebar main"
    / min-content auto;

  max-width: 1080px;
  width: 100%;
  min-height: 100vh;

  margin: 0 auto;
`;

const Bottom = styled.footer`
  max-width: 1080px;
  width: 100%;

  margin: 0 auto;
`;

const HeaderContainer = styled.header`
  grid-area: header;
`;

const SidebarContainer = styled.aside`
  grid-area: sidebar;
`;

const MainContainer = styled.main`
  grid-area: main;
`;

type Props = {
  children: ReactNode;
};

export const LayoutTemplate = ({ children }: Props) => (
  <>
    <Top>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <MainContainer>
        <Main>{children}</Main>
      </MainContainer>
    </Top>
    <Bottom>
      <Footer />
    </Bottom>
  </>
);
