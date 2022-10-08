export const fetchGlobalData = async () => {
  const res = await fetch("https://covid19.mathdro.id/api");
  const data = await res.json();
  return data;
};

export const fetchDailyData = async () => {
  try {
    const res = await fetch("https://api.covidtracking.com/v1/us/daily.json");
    const data = await res.json();

    return data.map(
      ({ positive, recovered, death, dateChecked: date }: any) => ({
        confirmed: positive,
        recovered,
        deaths: death,
        date,
      })
    );
  } catch (error) {
    return error;
  }
};
