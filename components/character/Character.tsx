import React from "react";
import { styled } from "styled-components";
import { CharacterType, Episode } from "../../assets/types/types";
import Image from "next/image";
import { useTranslation } from "@/hook/useTranstaion";

type Props = {
  character: CharacterType;
  episodes?: Episode[];
};

export const Character = ({ character, episodes }: Props) => {
  const { t } = useTranslation();
  return (
    <Card key={character.id}>
      <ImageWrapper>
        <Image src={character.image} alt="character image" width={250} height={250} />
      </ImageWrapper>
      <Info>
        <Field>
          <Label>{t.character.name}:</Label> <Value>{character.name}</Value>
        </Field>
        <Field>
          <Label>{t.character.gender}:</Label> <Value>{character.gender}</Value>
        </Field>
        <Field>
          <Label>{t.character.status}:</Label> <Value>{character.status}</Value>
        </Field>
        <Field>
          <Label>{t.character.origin}:</Label> <Value>{character.origin.name}</Value>
        </Field>
        {episodes && (
          <Field>
            <Label>{t.character.episodes}:</Label>
            <ul>
              {episodes.map((el) => (
                <li key={el.id}>
                  <Value>{el.name}</Value>
                </li>
              ))}
            </ul>
          </Field>
        )}
      </Info>
    </Card>
  );
};

export const Card = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #f7f5e6;
  border: 2px solid #b2a89e;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 280px;
  margin: 15px;
  padding: 20px;
  position: relative;
  font-family: "Courier New", Courier, monospace;
`;
const ImageWrapper = styled.div`
  border: 2px solid #b2a89e;
  padding: 5px;
  background-color: #fff;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`;

const Info = styled.div`
  width: 100%;
`;

export const Field = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: #4a4a4a;
`;

const Value = styled.span`
  font-size: 14px;
  color: #333;
`;
