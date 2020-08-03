import { ExternalLink } from "App/Atomics/ExternalLink";
import { InternalLink } from "App/Atomics/InternalLink";
import React, { ReactNode } from "react";
import styled from "styled-components";

const Layout = styled.ul`
  display: grid;
  gap: 0.5rem;

  font-size: 0.875rem;
`;

const CategoryContainer = styled.li``;

const CategoryItem = styled.ul`
  display: grid;
  gap: 1px;

  border-radius: 2px;
  border: 1px solid hsl(0 0% 84%);
  box-shadow: 4px 4px 1px 0 hsl(0 0% 84%);
`;

const Item = styled.li`
  background-color: white;

  a {
    width: 100%;

    padding: 0.25rem 1rem;
  }
`;

const Icon = styled.span``;

const Title = styled.span``;

type CategoryProps = {
  children: ReactNode;
};

const Category = ({ children }: CategoryProps) => (
  <CategoryContainer>
    <CategoryItem>{children}</CategoryItem>
  </CategoryContainer>
);

type InternalLinkItemProps = {
  to: string;
  icon: ReactNode;
  children: string;
};

const InternalLinkItem = ({ to, icon, children }: InternalLinkItemProps) => (
  <Item>
    <InternalLink to={to}>
      <Icon>{icon}</Icon>
      <Title>{children}</Title>
    </InternalLink>
  </Item>
);

type ExternalLinkItemProps = {
  to: string;
  children: string;
};

const ExternalLinkItem = ({ to, children }: ExternalLinkItemProps) => (
  <Item>
    <ExternalLink to={to}>
      <Icon>{null}</Icon>
      <Title>{children}</Title>
    </ExternalLink>
  </Item>
);

export const MenuList = () => (
  <Layout>
    <Category>
      <InternalLinkItem to="/" icon={null}>
        전체 글 보기
      </InternalLinkItem>
    </Category>

    <Category>
      <InternalLinkItem to="/" icon={null}>
        스트리머 게시판
      </InternalLinkItem>
      <InternalLinkItem to="/" icon={null}>
        커뮤니티
      </InternalLinkItem>
      <InternalLinkItem to="/" icon={null}>
        핫클립
      </InternalLinkItem>
      <ExternalLinkItem to="/">트게더 랭킹</ExternalLinkItem>
      <ExternalLinkItem to="/">게임대회</ExternalLinkItem>
    </Category>

    <Category>
      <InternalLinkItem to="/" icon={null}>
        방송홍보
      </InternalLinkItem>
      <InternalLinkItem to="/" icon={null}>
        구인구직
      </InternalLinkItem>
      <InternalLinkItem to="/" icon={null}>
        Q&A
      </InternalLinkItem>
      <InternalLinkItem to="/" icon={null}>
        방송 TIP
      </InternalLinkItem>
    </Category>

    <Category>
      <InternalLinkItem to="/" icon={null}>
        공지사항
      </InternalLinkItem>
      <InternalLinkItem to="/" icon={null}>
        이벤트
      </InternalLinkItem>
      <InternalLinkItem to="/" icon={null}>
        건의/신고
      </InternalLinkItem>
    </Category>
  </Layout>
);
