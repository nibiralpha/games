// import { startLoading } from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setTrendingGames,
  setTrendingGamesLoading,
} from "@/src/redux/GameSlice";
import { getTrendingGames } from "@Api/Games";
import { Game, TrendingGameInterface } from "@app-types/Games";

const fetchTrendingGames = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setTrendingGamesLoading(true));

      const gamesRes = await getTrendingGames();
      // const gamesList = gamesRes?.data?.data || [];

      const gamesData: TrendingGameInterface[] = gamesRes?.data?.data?.map(
        (game: Game) => ({
          id: game.id,
          name: game.name,
          background_image: game.background_image,
        }),
      );

      dispatch(setTrendingGames(gamesData));

      dispatch(setTrendingGamesLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(setTrendingGamesLoading(false));
      throw error;
    }
  };
};

export { fetchTrendingGames };
