import { useQuery } from "@tanstack/react-query"
import { getPosition } from "../../apis/positions/positions.api"
import { queryKeys } from "./queryKeys"

export function usePosition(id: number) {
  return useQuery({
    queryKey: queryKeys.positions.detail(id),
    queryFn: () => getPosition(id),
    enabled: id > 0,
  })
}
