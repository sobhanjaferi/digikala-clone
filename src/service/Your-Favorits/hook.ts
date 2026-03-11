import { useQuery } from "@tanstack/react-query";
import IyourFavoritItem from "./types";
import axios from "axios";

export default function useYourFavorits() {
  return useQuery<IyourFavoritItem[]>({
    queryKey: ["yourFavorits"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8000/yourFavoritsOne");
      

      return data as IyourFavoritItem[];
    },
  });
}
