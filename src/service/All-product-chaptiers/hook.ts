// =============== Import Sections ===============
import { useQuery } from "@tanstack/react-query";
import IproductChaptier from "./types";
import axios from "axios";

export default function useAllProductChaptiers() {
  return useQuery<IproductChaptier[]>({
    queryKey: ["AllProductChaptiers"],
    queryFn: async () => {
      const { data } = await axios("/api/product/chaptiers");

      return data as IproductChaptier[];
    },
  });
}
