"use client";

import APICall from "@/services/apiCall";

export async function signIn(values) {
  const res = await APICall("/auth/login", "POST", values);
  console.log(res, "THE RESPONSE");
  localStorage.setItem("accessToken", res?.data.accessToken);
  return res?.data;
}
