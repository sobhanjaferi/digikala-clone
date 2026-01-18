import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IofferSlide } from "./types";

export default function useOfferSlider() {
  return useQuery<IofferSlide[]>({
    queryKey: ["OfferSlider"],

    queryFn: async () => {
      const { data } = await axios("http://localhost:8000/OfferSlider");

      return data as IofferSlide[];
    },
  });
}
