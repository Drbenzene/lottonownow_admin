import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "./queryKeys";
import APICall from "@/services/apiCall";

async function getCategories() {
  const res = await APICall("/category", "GET");
  return res.data;
}

export async function addCategory(payload: any) {
  let formData: any = new FormData();
  for (const key in payload) {
    formData.append(key, payload[key]);
  }
  const res = await APICall("/category", "POST", formData, true);
  return res?.data;
}

export async function updateCategory(payload: any, categoryId: string) {
  let formData: any = new FormData();
  for (const key in payload) {
    formData.append(key, payload[key]);
  }
  const res = await APICall(`/category/${categoryId}`, "PATCH", formData, true);
  return res?.data;
}

export function useCategory() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: [QUERY_KEY.category],
    queryFn: () => getCategories(),
    initialData: () => {
      return queryClient.getQueryData([QUERY_KEY.category]);
    },
  });
  return query;
}
