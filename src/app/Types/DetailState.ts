import { RecentGameInterface } from './GameByMonth';
import { Game } from './Games';

export interface GameDetailStateInterface {
  data: Game;
  loading: boolean;
}