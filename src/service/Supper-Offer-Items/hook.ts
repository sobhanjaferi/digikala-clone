import { useQuery } from "@tanstack/react-query";
import IsupperOfferItem from "./types";
import axios from "axios";

export default function useSupperOfferItems() {
  return useQuery<IsupperOfferItem[]>({
    queryKey: ["SupperOfferItems"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:8000/supperOfferItems",
      );

      return data as IsupperOfferItem[];
    },
  });
}
