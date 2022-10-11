import type { NextPage } from "next";

import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { Heading, VStack } from "@chakra-ui/react";

import { LaunchesList } from "../components";
const Home: NextPage = ({ data }: any) => {
  return (
    <VStack>
      <VStack w="full">
        {data ? (
          <LaunchesList launchesData={data} />
        ) : (
          <Heading color="white">loading...</Heading>
        )}
        {/* <LaunchesList launchesData={data} /> */}
      </VStack>
    </VStack>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query {
        launchesPast(limit: 10) {
          mission_name
          launch_date_local
          launch_success
          id
        }
      }
    `,
  });

  return {
    props: {
      data: data.launchesPast,
    },
  };
}
export default Home;
