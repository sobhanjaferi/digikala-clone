// =============== Import Sections ===============
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import IyourFavoritItem from "../types";

export default function useYourFavoritsThree() {
  return useQuery<IyourFavoritItem[]>({
    queryKey: ["yourFavoritsThree"],
    queryFn: async () => {
      const { data } = await axios.get(
        "/api/product/favorits/three",
      );

      return data as IyourFavoritItem[];
    },
  });
}
