import { RecentGameInterface } from './GameByMonth';
import { Game } from './Games';

export interface GameDetailStateInterface {
  //   detail: DetailStateInterface;
  data: Game;
  loading: boolean;
}

export interface DetailStateInterface {
  data: Game;
  loading: boolean;
}
