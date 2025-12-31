import axios from "axios";
import { IheaderOption } from "./types";

async function useHeaderOptions() {
  const {data} = await axios.get("http://localhost:8000/headerOptions");
  

  return data as IheaderOption[];
}

export default useHeaderOptions;
