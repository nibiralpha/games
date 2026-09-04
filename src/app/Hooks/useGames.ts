import { useSelector } from "react-redux";
import { RootState } from "@/src/redux/Store";

const useGames = () => {
  const trendingGames = useSelector(
    (state: RootState) => state.games.trendingGames,
  );

   const monthlyGames = useSelector(
    (state: RootState) => state.games.monthlyGames,
  );
  
  const lastComingAnticipatedGames = useSelector(
    (state: RootState) => state.games.lastRecentAnticipetdGames,
  );
  
  const searchedGames = useSelector(
    (state: RootState) => state.games.serachResults,
  );

  return {
    trendingGames,
    monthlyGames,
    lastComingAnticipatedGames,
    searchedGames
  };
};

export default useGames;
