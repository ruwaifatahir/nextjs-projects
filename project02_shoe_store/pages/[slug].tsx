import { Image } from "@chakra-ui/react";
import React from "react";
import { shoes } from "../constants/ShoeData";
const CardPage = ({ slug }: any) => {
  const { img } = shoes[slug];
  console.log(slug);
  return <Image boxSize={900} w="full" src={img} />;
};
export async function getServerSideProps({ params }: any) {
  const { slug } = params;
  return {
    props: {
      slug,
    },
  };
}

export default CardPage;
