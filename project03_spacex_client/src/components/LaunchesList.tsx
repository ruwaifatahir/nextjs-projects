import { Heading, VStack, Text, HStack, Box } from "@chakra-ui/react";
import Link from "next/link";
import { LaunchBanner } from "./";
const LaunchesList: any = ({ launchesData }: any) => {
  return (
    <VStack align="start" color="white" w="80%" fontSize="sm" spacing={6}>
      <VStack align="start">
        <Heading size="2xl">Launches</Heading>
        <HStack>
          <Box h={4} w={8} bg="green.400"></Box>
          <Text>= Success</Text>
        </HStack>
        <HStack>
          <Box h={4} w={8} bg="red.400"></Box>
          <Text>= Fail</Text>
        </HStack>
      </VStack>

      {launchesData.map(
        ({ id, launch_success, launch_date_local, mission_name }: any) => (
          <LaunchBanner
            key={id}
            data={{
              id,
              success: launch_success,
              date: launch_date_local,
              name: mission_name,
            }}
          />
        )
      )}
    </VStack>
  );
};

export default LaunchesList;
