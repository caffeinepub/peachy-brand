import { useQuery } from "@tanstack/react-query";
import type { Brand } from "../backend.d.ts";
import { useActor } from "./useActor";

export function useGetBrand() {
  const { actor, isFetching } = useActor();

  return useQuery<Brand>({
    queryKey: ["brand"],
    queryFn: async () => {
      if (!actor) {
        return {
          name: "Peachy Brand",
          tagline: "Fresh fits. Peachy vibes.",
          about:
            "We're a new clothing brand just getting started. Big things are coming!",
        };
      }
      const result = await actor.getBrand();
      return {
        name: result.name || "Peachy Brand",
        tagline: result.tagline || "Fresh fits. Peachy vibes.",
        about:
          result.about ||
          "We're a new clothing brand just getting started. Big things are coming!",
      };
    },
    enabled: !isFetching,
  });
}
