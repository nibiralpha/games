import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const useGames = () => {
  const trendingGames = useSelector(
    (state: RootState) => state.games.trendingGames,
  );

  return {
    trendingGames,
  };
};

export default useGames;
