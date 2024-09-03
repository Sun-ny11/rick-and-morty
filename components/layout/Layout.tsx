import { NextPage } from "next";
import React, { PropsWithChildren, ReactElement } from "react";
import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { LangSelect } from "../langSelect/LangSelect";
import { useTranslation } from "@/hook/useTranstaion";

export const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header>
        <Image src="/icon.svg" alt="logo Rick and Morty" width={40} height={40} priority />

        <Navigate>
          <Button href={"/characters"}>{t.navigate.characters}</Button>
          <Button href={"/locations"}>{t.navigate.locations}</Button>
          <Button href={"/episodes"}>{t.navigate.episodes}</Button>
          <LangSelect />
        </Navigate>
      </Header>
      <Main>{children}</Main>
    </Container>
  );
};

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export const Main = styled.main`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

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
  cursor: pointer;
  padding: 10px;
  font-family: "Courier New", Courier, monospace;

  border-radius: 10px;
  &:hover {
    background-color: #f7f5e6;
  }
`;
