import { ApiResponse, Episode } from "@/assets/types/types";
import { Card, Label } from "@/components/character/Character";
import { getLayout } from "@/components/layout/Layout";
import axios from "axios";
import { CardWrapper } from "../locations";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useTranslation } from "@/hook/useTranstaion";

const getEpisodes = async () =>
  axios.get<ApiResponse<Episode>>(`https://rickandmortyapi.com/api/episode`).then((res) => res.data);

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["episodes"],
    queryFn: getEpisodes,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Episodes() {
  const { t } = useTranslation();

  const { data } = useQuery({
    queryKey: ["episodes"],
    queryFn: getEpisodes,
  });

  if (!data) {
    return null;
  }

  return (
    <CardWrapper>
      {data?.results.map((episode) => {
        return (
          <Card key={episode.id}>
            <div>
              <Label>{t.episode.name}:</Label> {episode.name}
            </div>
            <div>
              <Label>{t.episode.date}:</Label> {episode.air_date}
            </div>
          </Card>
        );
      })}
    </CardWrapper>
  );
}
Episodes.getLayout = getLayout;
