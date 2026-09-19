import { RecentGameInterface } from './GameByMonth';
import { GameSectionsState, LastNextAnticipatedInterface, SearchedGames, TrendingGameInterface } from './Games';
export interface GameStateInterface {
  trendingGames: TrendingGameStateInterface;
  monthlyGames: MonthlyGamesStateInterface;
  lastRecentAnticipetdGames: LastNextAnticipatedStateInterface;
  serachResults: SerachResultStateInterface;
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
export interface SerachResultStateInterface {
  data: SearchedGames;
  loading: boolean;
}
