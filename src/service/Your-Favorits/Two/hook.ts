import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import IyourFavoritItem from "../types";

export default function useYourFavoritsTwo() {
  return useQuery<IyourFavoritItem[]>({
    queryKey: ["yourFavoritsTwo"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8000/yourFavoritsTwo");

      return data as IyourFavoritItem[];
    },
  });
}
