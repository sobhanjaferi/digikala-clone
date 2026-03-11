import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import IyourFavoritItem from "../types";

export default function useYourFavoritsFour() {
  return useQuery<IyourFavoritItem[]>({
    queryKey: ["yourFavorits"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8000/yourFavoritsFour");

      return data as IyourFavoritItem[];
    },
  });
}
