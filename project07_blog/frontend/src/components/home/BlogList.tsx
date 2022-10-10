import { Divider, HStack, VStack } from "@chakra-ui/react";
import { Blog } from "./";
const BlogList = ({ blogList }: any) => {
  console.log(blogList);
  return (
    <HStack w="full" justify="center" pt={10}>
      <VStack spacing={10} w="full">
        <Divider />

        {blogList.map(
          (
            {
              id,
              attributes: {
                title,
                description,
                image: { data },
                slug,
              },
            }: any,
            index: any
          ) => (
            <Blog
              data={{
                title,
                description,
                image: data.attributes.url,
                id,
                slug,
              }}
              key={index}
            />
          )
        )}
      </VStack>
    </HStack>
  );
};

export default BlogList;
