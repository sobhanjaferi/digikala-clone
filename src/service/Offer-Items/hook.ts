// =============== Import Sections ===============
import { useQuery } from "@tanstack/react-query";
import { IofferItem } from "./types";
import axios from "axios";

export default function useOfferItems() {
  return useQuery<IofferItem[]>({
    queryKey: ["OfferItems"],

    queryFn: async () => {
      const { data } = await axios.get("/api/offer/items");

      return data as IofferItem[];
    },
  });
}
