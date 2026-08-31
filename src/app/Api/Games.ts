import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { TrendingGameResponse } from "@app-types/Games";

const getTrendingGames = async (): Promise<
  AxiosResponse<TrendingGameResponse>
> => {
  const response = await axios.get<TrendingGameResponse>(
    `${BASEURL}/api/trending`,
  );
  return response;
};

export { getTrendingGames };
