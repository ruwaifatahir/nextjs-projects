import { Text, VStack } from "@chakra-ui/react";
import CountUp from "react-countup";

const Card: any = ({ title, data, lastUpdate }: any) => {
  console.log(data);
  return (
    <VStack
      align="start"
      p={7}
      spacing={1}
      shadow="base"
      borderBottom="8px"
      borderColor="green.300"
    >
      <Text fontSize="sm" color="gray.500">
        {title}
      </Text>
      <Text
        fontSize="lg"
        fontWeight="bold"
        as={CountUp}
        start={0}
        duration={2.75}
        end={data?.value}
        separator=","
      />
      <Text fontSize="sm" color="gray.500">
        {new Date(lastUpdate).toDateString()}
      </Text>
      <Text fontSize="12px" fontWeight={500}>
        Number of {title} cases <br /> of COVID-19
      </Text>
    </VStack>
  );
};

export default Card;
