"use client";

import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import APICall from "@/utils/ApiCall";

export async function signIn(values) {
  const res = await APICall("/auth/login", "POST", values);
  console.log(res, "THE RESPONSE");
  localStorage.setItem("accessToken", res?.data.accessToken);
  return res?.data;
}

export function useSignIn() {
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const mutate = useMutation({
    mutationFn: (values) => signIn(values),
    onSuccess: (data) => {
      localStorage.setItem("authToken", data.accessToken);
      enqueueSnackbar("Log In Successful!", { variant: "success" });
      router.push("/");
    },
    onError: (error) =>
      enqueueSnackbar(`Sign in failed: ${error.message}`, { variant: "error" }),
  });
  return mutate;
}
