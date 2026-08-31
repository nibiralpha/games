import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { TrendingGameResponse } from "@app-types/Games";
import { DateString } from "@app-types/Date";

const getTrendingGames = async (): Promise<
  AxiosResponse<TrendingGameResponse>
> => {
  const response = await axios.get<TrendingGameResponse>(
    `${BASEURL}/api/trending`,
  );
  return response;
};

const getMonthlyGames = async (
  fromDate: string,
  toDate: string,
): Promise<AxiosResponse<TrendingGameResponse>> => {
  const response = await axios.get<TrendingGameResponse>(
    `${BASEURL}/api/recent-games?start=${fromDate}&end=${toDate}`,
  );
  return response;
};

export { getTrendingGames, getMonthlyGames };
