import { Image, VStack, Heading } from "@chakra-ui/react";

const Card: any = ({ url, title }: any) => {
  return (
    <VStack>
      <Image boxSize={400} src={url}></Image>
      <Heading size="md">{title}</Heading>
    </VStack>
  );
};

export default Card;
