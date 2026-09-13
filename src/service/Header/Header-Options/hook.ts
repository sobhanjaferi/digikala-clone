// =============== Import Sections ===============
import axios from "axios";
import { IheaderOption } from "./types";
import { useQuery } from "@tanstack/react-query";

function useHeaderOptions() {
  return useQuery<IheaderOption[]>({
    queryKey: ["headerOption"],
    queryFn: async () => {
      const { data } = await axios("/api/header/options");

      return data as IheaderOption[];
    },
  });
}

export default useHeaderOptions;
