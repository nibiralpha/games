import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const useGames = () => {
  const trendingGames = useSelector(
    (state: RootState) => state.games.trendingGames,
  );

   const monthlyGames = useSelector(
    (state: RootState) => state.games.monthlyGames,
  );

  return {
    trendingGames,
    monthlyGames
  };
};

export default useGames;
