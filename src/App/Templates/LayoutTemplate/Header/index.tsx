import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  margin-top: 1rem;
  padding: 0.5rem 1rem;

  border-radius: 2px;
  border: 1px solid hsl(0 0% 84%);
  border-top-width: 0.25rem;
  box-shadow: 4px 4px 1px 0 hsl(0 0% 84%);
  background-color: white;
`;

export const Header = () => <Layout>Header</Layout>;
