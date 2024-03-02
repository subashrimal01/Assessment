import { useQuery, type QueryKey } from "@tanstack/react-query";
import axios from "axios";
import { ProductDetailResponseType } from "../types";
import { BACKEND_BASE_URL } from "../utils/constants";

const baseAxios = axios.create({
  baseURL: BACKEND_BASE_URL,
});

const useQueryData = <T>(
  key: QueryKey,
  path: string,
  params?: { [key: string]: string | number },
  refetch?: boolean | "always",
  enabled?: boolean | true
) => {
  return useQuery<T>({
    queryKey: [...key],
    refetchOnMount: refetch,
    refetchOnWindowFocus: false,
    queryFn: () =>
      baseAxios
        .get(path, {
          params,
        })
        .then((res) => res.data),
    enabled: enabled,
  });
};

export const useProductDetail = (idx: string) =>
  useQueryData<ProductDetailResponseType>(
    ["product-detail", idx],
    `product/for-public/${idx}`
  );
