import { Button, Heading, VStack } from "@chakra-ui/react";
import { LaunchDetails, RocketDetails } from "../components";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import Link from "next/link";
const MissionDetails = ({ data }: any) => {
  const { launch_year, launch_success, rocket, mission_name, id } = data;

  return (
    <VStack maxW="full">
      <VStack
        maxW="80%"
        align="start"
        w="full"
        spacing={10}
        color="whiteAlpha.700"
      >
        <Heading size="2xl">{mission_name}</Heading>
        <LaunchDetails
          data={{ year: launch_year, success: launch_success, id }}
        />
        <RocketDetails rocket={rocket} />

        <Link href="/">
          <Button size="xs" variant="outline">
            Back
          </Button>
        </Link>
      </VStack>
    </VStack>
  );
};

export async function getServerSideProps({ params }: any) {
  const { mission } = params;
  const { data } = await client.query({
    query: gql`
      query {
        launch(id: ${mission}) {
          mission_name
          rocket {
            rocket_name
            rocket_type
            rocket {
              id
            }
          }
          launch_year
          launch_success
          id
        }
      }
    `,
  });

  return {
    props: {
      data: data.launch,
    },
  };
}

export default MissionDetails;
