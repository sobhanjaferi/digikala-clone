// =============== Import Sections ===============
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { TloginAndSignin } from "./types";

export default function usePostLoginAndSigninFormData() {
  return useMutation({
    mutationKey: ["loginAndSignin"],
    mutationFn: async (res: TloginAndSignin) => {
      return await axios.post(
        "http://localhost:8000/loginAndSignin",
        res as TloginAndSignin,
      );
    },
  });
}
