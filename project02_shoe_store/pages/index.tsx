import { HStack, VStack, Link as ChakraLink, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { Navigation, Header, Card } from "../components";

import { shoes } from "../constants/ShoeData";
const Home: NextPage = () => {
  return (
    <VStack w="full">
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={10}
        pt={10}
        px={5}
      >
        {Object.entries(shoes).map(([slug, { name, img }]: any) => (
          <Link href={slug} key={slug}>
            <a>
              <Card url={img} title={name} as={Link} href={name} />
            </a>
          </Link>
        ))}
        );
      </Stack>
    </VStack>
  );
};

export default Home;
