import { RecentGameInterface } from "./GameByMonth";
import { GameSectionsState, LastNextAnticipatedInterface, TrendingGameInterface } from "./Games";
export interface GameStateInterface {
  trendingGames: TrendingGameStateInterface;
  monthlyGames: MonthlyGamesStateInterface;
  lastRecentAnticipetdGames: LastNextAnticipatedStateInterface;
}
export interface TrendingGameStateInterface {
  list: TrendingGameInterface[];
  loading: boolean;
}
export interface MonthlyGamesStateInterface {
  list: TrendingGameInterface[];
  loading: boolean;
}
export interface LastNextAnticipatedStateInterface {
  data: GameSectionsState;
  loading: boolean;
}
