export const fetchGlobalData = async () => {
  const res = await fetch("https://covid19.mathdro.id/api");
  const data = await res.json();
  return data;
};
