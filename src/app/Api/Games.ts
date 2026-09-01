import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { ReleaseCalendarResponse, TrendingGameResponse } from "@app-types/Games";

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

const getGamesLastRecentAnicipeted = async (): Promise<
  AxiosResponse<ReleaseCalendarResponse>
> => {
  const response = await axios.get<ReleaseCalendarResponse>(
    `${BASEURL}/api/release-calendar`,
  );
  return response;
};

export { getTrendingGames, getMonthlyGames, getGamesLastRecentAnicipeted };
