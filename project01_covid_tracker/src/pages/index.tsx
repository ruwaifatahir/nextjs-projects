import { Box, HStack, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import { Header, Card, SelectBar, GlobalChart } from "../components";

import { fetchGlobalData } from "../helper";
const Home: NextPage = () => {
  const [globalData, setGlobalData] = useState<any>();
  useEffect(() => {
    const init = async () => {
      const res = await fetchGlobalData();
      setGlobalData(res);
    };
    init();
  }, []);

  const { confirmed, deaths, lastUpdate } = globalData || {};

  return (
    <HStack w="full" justify="center">
      <VStack mt={10} spacing={10}>
        <Header />
        <HStack spacing={7}>
          <Card title="Confirmed" data={confirmed} lastUpdate={lastUpdate} />
          <Card
            title="Recovered"
            data={{ value: 600000 }}
            lastUpdate={lastUpdate}
          />
          <Card title="Deaths" data={deaths} lastUpdate={lastUpdate} />
        </HStack>
        {/* <SelectBar /> */}

        <GlobalChart />
      </VStack>
    </HStack>
  );
};

export default Home;
