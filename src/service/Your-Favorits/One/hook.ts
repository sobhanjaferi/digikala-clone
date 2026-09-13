// =============== Import Sections ===============
import { useQuery } from "@tanstack/react-query";
import IyourFavoritItem from "../types";
import axios from "axios";

export default function useYourFavoritsOne() {
  return useQuery<IyourFavoritItem[]>({
    queryKey: ["yourFavoritsOne"],
    queryFn: async () => {
      const { data } = await axios.get("/api/product/favorits/one");

      return data as IyourFavoritItem[];
    },
  });
}
