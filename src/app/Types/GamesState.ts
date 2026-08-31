import { TrendingGameInterface } from "./Games";

export interface GameStateInterface {
  trendingGames: TrendingGameStateInterface;
}

export interface TrendingGameStateInterface {
  list: TrendingGameInterface[];
  loading: boolean;
}
