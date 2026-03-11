import { useQuery } from "@tanstack/react-query"
import { getPositions } from "../../apis/positions/positions.api"
import { queryKeys } from "./queryKeys"

export function usePositions() {
  return useQuery({
    queryKey: queryKeys.positions.all,
    queryFn: getPositions,
  })
}
