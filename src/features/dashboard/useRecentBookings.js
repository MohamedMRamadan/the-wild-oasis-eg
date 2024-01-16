import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";

function useRecentBookings() {
  const [searchParmas] = useSearchParams();
  const duration = +searchParmas.get("last") || 7;

  const sinceDate = subDays(new Date(), duration).toISOString();

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", `last-${duration}`],
    queryFn: () => getBookingsAfterDate(sinceDate),
  });
  return { bookings, isLoading };
}

export default useRecentBookings;
