export const fetchApi = async (param: string) => {
  const res: any = await fetch(`http://localhost:1337/api/${param}?populate=*`);
  const { data } = await res.json();
  return data;
};
