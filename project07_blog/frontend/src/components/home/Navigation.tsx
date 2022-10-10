import { Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NAVLINKS = [
  { name: "News", href: "/news" },
  { name: "Tech", href: "/tech" },
  { name: "Food", href: "/food" },
  { name: "Nature", href: "/nature" },
  { name: "Story", href: "/story" },
];
const Navigation: any = () => {
  return (
    <VStack w="full" spacing={5}>
      <Divider />
      <HStack
        w="full"
        justify="center"
        fontWeight={600}
        spacing={{ base: 2, lg: 5 }}
        px={2}
      >
        {NAVLINKS.map(({ name, href }: any, index: number) => (
          <Link href={`/category${href}`} key={index}>
            <Button variant="nav-link">{name}</Button>
          </Link>
        ))}
        {/* {categories.map(({ attributes: { name } }: any, index: number) => (
          <Button variant="nav-link" key={index}>
            {name.toUpperCase()}
          </Button>
        ))} */}
        {/* <Button variant="nav-link">Home</Button>
        <Button variant="nav-link">Archive</Button>
        <Button variant="nav-link">About</Button> */}
      </HStack>
      <Divider />
    </VStack>
  );
};

export default Navigation;
