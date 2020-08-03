import React, { ReactNode } from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { Sidebar } from "./Sidebar";

const HeaderContainer = styled.header``;

const SidebarContainer = styled.aside``;

const MainContainer = styled.main``;

const FooterContainer = styled.footer``;

type Props = {
  children: ReactNode;
};

export const LayoutTemplate = ({ children }: Props) => (
  <>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <SidebarContainer>
      <Sidebar />
    </SidebarContainer>
    <MainContainer>
      <Main>{children}</Main>
    </MainContainer>
    <FooterContainer>
      <Footer />
    </FooterContainer>
  </>
);
