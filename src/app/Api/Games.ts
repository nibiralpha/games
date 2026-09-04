import axios from "axios";
import { BASEURL } from "@Constant/Api";
import {
  ReleaseCalendarResponse,
  TrendingGameResponse,
} from "@app-types/Games";

const getTrendingGames = async (): Promise<TrendingGameResponse> => {
  const response = await axios.get<TrendingGameResponse>(
    `${BASEURL}/api/trending`,
  );

  return response.data;
};

const getMonthlyGames = async (
  fromDate: string,
  toDate: string,
): Promise<TrendingGameResponse> => {
  const response = await axios.get<TrendingGameResponse>(
    `${BASEURL}/api/recent-games?start=${fromDate}&end=${toDate}`,
  );

  return response.data;
};

const getGamesLastRecentAnicipeted =
  async (): Promise<ReleaseCalendarResponse> => {
    const response = await axios.get<ReleaseCalendarResponse>(
      `${BASEURL}/api/release-calendar`,
    );

    return response.data;
  };

  const getSearchResults =
  async (): Promise<TrendingGameResponse> => {
    const response = await axios.get<TrendingGameResponse>(
      `${BASEURL}/api/search`,
    );

    return response.data;
  };

export { getTrendingGames, getMonthlyGames, getGamesLastRecentAnicipeted, getSearchResults };
