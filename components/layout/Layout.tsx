import { NextPage } from "next";
import React, { PropsWithChildren, ReactElement } from "react";
import { styled } from "styled-components";
import Image from "next/image";

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header>
        <Image src="/icon.svg" alt="logo Rick and Morty" width={40} height={40} />
        <Navigate>
          <p>Characters</p>
          <p>Location</p>
          <p>Episode</p>
        </Navigate>
      </Header>
      <div>{children}</div>
    </Container>
  );
};

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navigate = styled.div`
  display: flex;
  gap: 20px;
`;

const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
`;
