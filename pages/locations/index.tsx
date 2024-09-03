import { ApiResponse, Location } from "@/assets/types/types";
import { Card, Label } from "@/components/character/Character";
import { getLayout, Main } from "@/components/layout/Layout";
import axios from "axios";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { useTranslation } from "@/hook/useTranstaion";

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
  const { t } = useTranslation();

  if (!locations) {
    return;
  }

  return (
    <CardWrapper>
      {locations.map((location) => (
        <Card key={location.id}>
          <LocationTitle>{location.name}</LocationTitle>
          <div>
            <Label>{t.location.type}:</Label> {location.type}
          </div>
          <div>
            <Label>{t.location.dimension}:</Label> {location.dimension}
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
