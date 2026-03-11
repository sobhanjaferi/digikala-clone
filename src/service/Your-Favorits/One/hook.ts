import { useQuery } from "@tanstack/react-query";
import IyourFavoritItem from "../types";
import axios from "axios";

export default function useYourFavoritsOne() {
  return useQuery<IyourFavoritItem[]>({
    queryKey: ["yourFavoritsOne"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8000/yourFavoritsOne");

      return data as IyourFavoritItem[];
    },
  });
}
