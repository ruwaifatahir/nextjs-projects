import { Divider, Heading, Image, Text, VStack } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { fetchApi } from "../api";
const BlogPage = ({ blog }: any) => {
  const {
    title,
    description,
    content,
    image: {
      data: {
        attributes: { url },
      },
    },
  } = blog[0].attributes || {};

  return (
    <VStack w="full" justify="center">
      <Divider />
      <VStack maxW="80%" w="full" pt={10} fontSize="3xl" spacing={8}>
        <Heading size="3xl">{title}</Heading>
        <Text>{description}</Text>
        <Text as={ReactMarkdown}>{content}</Text>
        <Image src={`http://localhost:1337${url}`} />
      </VStack>
    </VStack>
  );
};

export async function getServerSideProps({ params }: any) {
  const blogs = await fetchApi("articles");
  let blog = blogs.filter(
    ({ attributes: { slug } }: any) => slug == params.slug
  );
  return {
    props: {
      blog,
    },
  };
}
export default BlogPage;
