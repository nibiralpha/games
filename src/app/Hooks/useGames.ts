import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const useGames = () => {
  const games = useSelector((state: RootState) => state.game.treanding);

  return {
    games,
  };
};

export default useGames;
