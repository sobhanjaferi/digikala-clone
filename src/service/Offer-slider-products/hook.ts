import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IofferSlide } from "../Offer-Slider/types";

export default function useOfferSliderProducts(id: string | undefined) {
  return useQuery<IofferSlide>({
    queryKey: ["OfferSliderProducts"],

    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8000/OfferSlider/${id}`,
      );

      return data as IofferSlide;
    },
  });
}
