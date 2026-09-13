// =============== Import Sections ===============
import { useQuery } from "@tanstack/react-query";
import IpopularBrand from "./types";
import axios from "axios";

export default function usePopularBrans() {
  return useQuery<IpopularBrand[]>({
    queryKey: ["PopularBrands"],
    queryFn: async () => {
      const { data } = await axios.get("/api/product/brands");

      return data as IpopularBrand[];
    },
  });
}
