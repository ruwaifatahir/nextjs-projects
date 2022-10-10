import { Heading, VStack } from "@chakra-ui/react";
import { fetchApi } from "../../api";
import { BlogList } from "../../components/home";
const CategoryPage = ({ blog, title }: any) => {
  console.log(blog);

  return (
    <VStack w="full" mt={16} spacing={5}>
      <Heading size="2xl">{title.toUpperCase()}</Heading>
      <BlogList blogList={blog}></BlogList>
    </VStack>
  );
};

export async function getServerSideProps({ params }: any) {
  const title = params.category;
  const blogs = await fetchApi("articles");
  console.log(blogs);
  let blog = blogs.filter(
    ({ attributes: { category } }: any) =>
      category.data.attributes.name == title
  );
  return {
    props: {
      blog,
      title,
    },
  };
}

// export async function getServerSideProps(context: any) {
//   return {
//     props: {
//       blogs: await fetchApi("articles"),
//     },
//   };
// }

export default CategoryPage;
