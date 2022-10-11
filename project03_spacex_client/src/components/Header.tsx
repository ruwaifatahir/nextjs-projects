import { Container, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import spacexlogo from "../assets/spacexlogo.jpg";

const Header = () => {
  return (
    <Container>
      <Image src={spacexlogo} />
    </Container>
  );
};

export default Header;
