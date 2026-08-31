import { RecentGameInterface } from "./GameByMonth";
import { TrendingGameInterface } from "./Games";

export interface GameStateInterface {
  trendingGames: TrendingGameStateInterface;
  monthlyGames: MonthlyGamesStateInterface;
}

export interface TrendingGameStateInterface {
  list: TrendingGameInterface[];
  loading: boolean;
}
export interface MonthlyGamesStateInterface {
  list: TrendingGameInterface[];
  loading: boolean;
}
