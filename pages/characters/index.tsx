import Head from "next/head";
import { getLayout } from "@/components/layout/Layout";
import axios from "axios";
import styled from "styled-components";
import React from "react";
import { Character } from "@/components/character/Character";
import { ApiResponse, CharacterType } from "@/assets/types/charactersTypes";

export const getStaticProps = async () => {
  const charactersRes = await axios.get<ApiResponse>("https://rickandmortyapi.com/api/character");
  return {
    props: {
      characters: charactersRes.data.results,
    },
  };
};

type Props = {
  characters: CharacterType[];
};
export default function Characters({ characters }: Props) {
  if (!characters) {
    return <h1>No characters</h1>;
  }

  return (
    <>
      <Head>
        <title>Characters</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        {characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </Main>
    </>
  );
}
Characters.getLayout = getLayout;

const Main = styled.main`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
