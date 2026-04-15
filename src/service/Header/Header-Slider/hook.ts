// =============== Import Sections ===============
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IheaderSlider } from "./types";

function useHeaderSlider() {
  return useQuery<IheaderSlider[]>({
    queryKey: ["headerSlider"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8000/headerSlider");

      return data as IheaderSlider[];
    },
  });
}

export default useHeaderSlider;
