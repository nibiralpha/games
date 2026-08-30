// import { startLoading } from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import { setTrendingGames, setTrendingGamesLoading } from "@/src/redux/GameSlice";

const fetchTrendingGames = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setTrendingGamesLoading(true));

      const gamesRes = await setTrendingGames(id);
      const albumData = gamesRes?.data;
      dispatch(setTrendingGamesLoading(albumData));

      dispatch(setTrendingGamesLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(setTrendingGamesLoading(false));
      throw error;
    }
  };
};

export { fetchTrendingGames };
