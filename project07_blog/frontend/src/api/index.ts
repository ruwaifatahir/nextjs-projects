export const fetchApi = async () => {
  const res: any = await fetch("http://localhost:1337/api/articles?populate=*");
  const { data } = await res.json();
  return data;
};
