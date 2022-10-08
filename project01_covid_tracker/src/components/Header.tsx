import { Heading } from "@chakra-ui/react";
import Image from "next/image";
import header from "../assets/header.png";
const Header = () => {
  return (
    // <Heading size="3xl" fontWeight={700}>
    //   {" "}
    //   COVID-19{" "}
    // </Heading>
    // <Image src="../assets/header.png" boxSize="md"></Image>
    <Image src={header} height="60" width="300"></Image>
  );
};

export default Header;
