// website\app\features\articles\hook\useArticle.ts

"use client";

import { useQuery } from "@tanstack/react-query";
import {
  fetchPublicServices,
  fetchServiceById,
  ServiceQuery,
  ServiceResponse,
} from "../services/service.api";
import { Service } from "@/types/service";

export const usePublicArticles = (query: ServiceQuery = {}) => {
  return useQuery<ServiceResponse>({
    queryKey: ["public-services", query],
    queryFn: () => fetchPublicServices(query),
    staleTime: 1000 * 60 * 5, // 5 min
  });
};

export const useServiceById = (id: string) => {
  return useQuery<Service>({
    queryKey: ["public-service", id],
    queryFn: () => fetchServiceById(id),
    staleTime: 1000 * 60 * 5,
  });
};
