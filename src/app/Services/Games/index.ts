import { Dispatch } from "@reduxjs/toolkit";
import {
  setlastRecentAnticipetdGames,
  setlastRecentAnticipetdGamesLoading,
  setMonthlyGames,
  setMonthlyGamesLoading,
  setSearchResult,
  setSearchResultLoadding,
  setTrendingGames,
  setTrendingGamesLoading,
} from "@/src/redux/GameSlice";
import {
  getGamesLastRecentAnicipeted,
  getMonthlyGames,
  getSearchResults,
  getTrendingGames,
} from "@Api/Games";
import {
  Game,
  GameSectionsState,
  LastNextAnticipatedInterface,
  TrendingGameInterface,
} from "@app-types/Games";
import { getCurrentMonthDateRange } from "@Helper/Functions";

const fetchTrendingGames = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setTrendingGamesLoading(true));

      const gamesRes = await getTrendingGames();

      const gamesData: TrendingGameInterface[] = gamesRes?.data?.map(
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

      const gamesData: TrendingGameInterface[] = gamesRes?.data?.map(
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

const fetchLastRecentAnicipetedGames = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setlastRecentAnticipetdGamesLoading(true));

      const gamesRes = await getGamesLastRecentAnicipeted();

      const gameData: GameSectionsState = {
        last60Days: [],
        next60Days: [],
        mostAnticipated: [],
      };

      const last60Days: LastNextAnticipatedInterface[] =
        gamesRes?.last60Days?.data?.map(
          (game: Game): LastNextAnticipatedInterface => ({
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            date: game.released,
          }),
        );

      const next60Days: LastNextAnticipatedInterface[] =
        gamesRes?.next60Days?.data?.map(
          (game: Game): LastNextAnticipatedInterface => ({
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            date: game.released,
          }),
        );

      const mostAnticipated: LastNextAnticipatedInterface[] =
        gamesRes?.mostAnticipated?.data?.map(
          (game: Game): LastNextAnticipatedInterface => ({
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            date: game.released,
          }),
        );

      gameData.last60Days = last60Days;
      gameData.next60Days = next60Days;
      gameData.mostAnticipated = mostAnticipated;

      dispatch(setlastRecentAnticipetdGames(gameData));

      dispatch(setlastRecentAnticipetdGamesLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(setlastRecentAnticipetdGamesLoading(false));
      throw error;
    }
  };
};

const fetchSearcheddGames = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setSearchResultLoadding(true));

      const gamesRes = await getSearchResults();

      const gamesData: TrendingGameInterface[] = gamesRes?.data?.map(
        (game: Game) => ({
          id: game.id,
          name: game.name,
          background_image: game.background_image,
        }),
      );

      dispatch(setSearchResult(gamesData));

      dispatch(setSearchResultLoadding(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(setSearchResultLoadding(false));
      throw error;
    }
  };
};

export {
  fetchTrendingGames,
  fetchMonthlyGames,
  fetchLastRecentAnicipetedGames,
  fetchSearcheddGames
};
