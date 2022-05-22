import fetchWithRetry from "helpers/fetchWithRetry";
import { Statistic } from "types";

export async function getStatistic(): Promise<Statistic> {
  const res = await fetchWithRetry(
    "https://covid.ourworldindata.org/data/owid-covid-data.json"
  );

  return res.json();
}
