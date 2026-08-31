// import { startLoading } from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setMonthlyGames,
  setMonthlyGamesLoading,
  setTrendingGames,
  setTrendingGamesLoading,
} from "@/src/redux/GameSlice";
import { getMonthlyGames, getTrendingGames } from "@Api/Games";
import { Game, TrendingGameInterface } from "@app-types/Games";
import { getCurrentMonthDateRange } from "@Helper/Functions";

const fetchTrendingGames = () => {
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
const fetchMonthlyGames = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setMonthlyGamesLoading(true));

      const { fromDate, endDate } = getCurrentMonthDateRange();

      const gamesRes = await getMonthlyGames(fromDate, endDate);

      const gamesData: TrendingGameInterface[] = gamesRes?.data?.data?.map(
        (game: Game) => ({
          id: game.id,
          name: game.name,
          background_image: game.background_image,
        }),
      );

      dispatch(setMonthlyGames(gamesData));

      dispatch(setMonthlyGamesLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(setMonthlyGamesLoading(false));
      throw error;
    }
  };
};

export { fetchTrendingGames, fetchMonthlyGames };
