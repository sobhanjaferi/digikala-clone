import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Istory } from "./types";

export default function useStorys() {
  return useQuery<Istory[]>({
    queryKey: ["headerStory"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:8000/headerStorys");

      return data as Istory[];
    },
  });
}
