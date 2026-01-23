import { useQuery } from "@tanstack/react-query";
import { IofferItem } from "./types";
import axios from "axios";

export default function useOfferItems() {
  return useQuery<IofferItem[]>({
    queryKey: ["OfferItems"],

    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8000/OfferItems");

      return data as IofferItem[];
    },
  });
}
