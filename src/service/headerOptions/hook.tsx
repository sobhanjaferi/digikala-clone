"use client";

import axios from "axios";
import { IheaderOption } from "./types";
import { useQuery } from "@tanstack/react-query";

function useHeaderOptions() {
  return useQuery<IheaderOption[]>({
    queryKey: ["headerOption"],
    queryFn: async () => {
      const { data } = await axios("http://localhost:8000/headerOptions");

      return data as IheaderOption[];
    },
  });
}

export default useHeaderOptions;
