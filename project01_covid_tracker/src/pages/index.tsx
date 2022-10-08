import { Box, HStack, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Header, Card, SelectBar } from "../components";

import { fetchGlobalData } from "../helper";
const Home: NextPage = () => {
  const [globalData, setGlobalData] = useState<any>();
  useEffect(() => {
    const init = async () => {
      const res = await fetchGlobalData();
      setGlobalData(res);
      console.log(res);
    };
    init();
  }, []);
  console.log(globalData, "globalData");

  return (
    <HStack w="full" justify="center">
      <VStack mt={10} spacing={10}>
        <Header />
        <HStack spacing={7}>
          <Card
            title="Confirmed"
            data={globalData?.confirmed}
            lastUpdate={globalData?.lastUpdate}
          />
          <Card
            title="Recovered"
            data={{ value: 600000 }}
            lastUpdate={globalData?.lastUpdate}
          />
          <Card
            title="Deaths"
            data={globalData?.deaths}
            lastUpdate={globalData?.lastUpdate}
          />
        </HStack>
        <SelectBar />
      </VStack>
    </HStack>
  );
};

export default Home;
