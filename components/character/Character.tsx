import React from "react";
import { styled } from "styled-components";
import { CharacterType } from "../../assets/types/charactersTypes";
import Image from "next/image";

type Props = {
  character: CharacterType;
};

export const Character = ({ character }: Props) => {
  return (
    <Card key={character.id}>
      <ImageWrapper>
        <Image src={character.image} alt="character image" width={250} height={250} />
      </ImageWrapper>
      <Info>
        <Field>
          <Label>Name:</Label> <Value>{character.name}</Value>
        </Field>
        <Field>
          <Label>Gender:</Label> <Value>{character.gender}</Value>
        </Field>
        <Field>
          <Label>Status:</Label> <Value>{character.status}</Value>
        </Field>
        <Field>
          <Label>Origin:</Label> <Value>{character.origin.name}</Value>
        </Field>
      </Info>
    </Card>
  );
};

const Card = styled.main`
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

const Field = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: #4a4a4a;
`;

const Value = styled.span`
  font-size: 14px;
  color: #333;
`;
