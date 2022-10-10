import type { NextPage } from "next";
import { HStack, VStack } from "@chakra-ui/react";
import { Navigation, TopBlog, BlogList } from "../components/home";
import { fetchApi } from "../api";
const Home: NextPage = ({ blogs }: any) => {
  console.log(blogs);
  return (
    <VStack w="full" color="gray.700">
      <Navigation />
      <TopBlog />
      <BlogList blogList={blogs} />
    </VStack>
  );
};
export async function getServerSideProps(context: any) {
  return {
    props: {
      blogs: await fetchApi("articles"),
    },
  };
}

export default Home;
