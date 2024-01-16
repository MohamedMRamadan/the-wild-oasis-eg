import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { RANGE } from "../../utils/constants";

const useBookings = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // Filteration
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // Sorting
  const sortValue = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortValue?.split?.("-");
  const sortBy = { field, direction };

  //Pagination

  const page = +searchParams.get("page") || 1;

  // Query
  const {
    data: { bookings, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // Pre-Fetching
  const pageCount = Math.ceil(count / RANGE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });

  return [bookings, isLoading, error, count];
};
export default useBookings;
