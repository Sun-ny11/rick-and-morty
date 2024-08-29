import { ApiResponse, Location } from "@/assets/types/types";
import { Card, Label } from "@/components/character/Character";
import { getLayout } from "@/components/layout/Layout";
import axios from "axios";
import styled from "styled-components";
import { Main } from "../characters";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=100");
  // это хэдэр который позволяет не запрашивать данные повторно а кешировать их на 100сек

  const locations = await axios.get<ApiResponse<Location>>(`https://rickandmortyapi.com/api/location`);

  if (!locations) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      locations: locations.data.results,
    },
  };
};

type Props = {
  locations: Location[];
};
export default function Locations({ locations }: Props) {
  if (!locations) {
    return;
  }

  return (
    <CardWrapper>
      {locations.map((location) => (
        <Card key={location.id}>
          <LocationTitle>{location.name}</LocationTitle>
          <div>
            <Label>Type:</Label> {location.type}
          </div>
          <div>
            <Label>Dimension:</Label> {location.dimension}
          </div>
        </Card>
      ))}
    </CardWrapper>
  );
}
Locations.getLayout = getLayout;

export const CardWrapper = styled(Main)`
  display: flex;
  flex-wrap: wrap;
`;
const LocationTitle = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
