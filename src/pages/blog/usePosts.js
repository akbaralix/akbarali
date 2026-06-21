// hooks/usePosts.js
import { useQuery } from "@tanstack/react-query";
import { getPosts, getPostBySlug } from "../blog/blogPost.js";

export function usePosts() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"], // Kesh kaliti (xuddi ID kabi)
    queryFn: getPosts,
    staleTime: 5 * 60 * 1000, // 5 daqiqa davomida ma'lumotni keshda saqlaydi, qayta so'rov urmaydi
    retry: 3, // Agar internet o'chib qolsa, avtomatik 3 marta qayta urinadi
  });

  return { posts, isLoading, error };
}

export function usePostDetail(slug) {
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => getPostBySlug(slug),
    enabled: !!slug,
  });

  return { post, isLoading, error };
}
