import axios, { AxiosResponse } from "axios";
import { BASEURL } from "@Constant/Api";
import { TrendingGameResponse } from "@app-types/Games";

const getAlbum = async (id: number): Promise<AxiosResponse<TrendingGameResponse>> => {
  const response = await axios.get<TrendingGameResponse>(`${BASEURL}/api/album/${id}`);
  return response;
};

export { getAlbum };
