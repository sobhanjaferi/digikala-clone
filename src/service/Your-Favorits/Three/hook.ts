import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import IyourFavoritItem from "../types";

export default function useYourFavoritsThree() {
  return useQuery<IyourFavoritItem[]>({
    queryKey: ["yourFavoritsThree"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:8000/yourFavoritsThree",
      );

      return data as IyourFavoritItem[];
    },
  });
}
