import { useQuery } from "@tanstack/react-query";
import { IofferSlide } from "./types";
import axios from "axios";

export default function UseOfferSlider() {
  return useQuery<IofferSlide[]>({
    queryKey: ["offerSlider"],

    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8000/OfferSlider");

      return data as IofferSlide[];
    },
  });
}
