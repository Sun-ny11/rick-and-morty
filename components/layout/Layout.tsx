import { NextPage } from "next";
import React, { PropsWithChildren, ReactElement } from "react";
import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header>
        <Image src="/icon.svg" alt="logo Rick and Morty" width={40} height={40} priority />
        <Navigate>
          <Button href={"/characters"}>Characters</Button>
          <Button href={"/locations"}>Location</Button>
          <Button href={"/episodes"}>Episode</Button>
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
const Button = styled(Link)`
  all: unset;
`;
