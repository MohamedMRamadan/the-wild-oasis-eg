import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

function useRecentStays() {
  const [searchParmas] = useSearchParams();
  const numOfDays = +searchParmas.get("last") || 7;

  const sinceDate = subDays(new Date(), numOfDays).toISOString();

  const { data: stays, isLoading } = useQuery({
    queryKey: ["stays", `last-${numOfDays}`],
    queryFn: () => getStaysAfterDate(sinceDate),
  });
  const confirmedStays = stays?.filter(
    (stay) => stay.status === "checked-in" || stay.status === "checked-out"
  );

  return { stays, confirmedStays, isLoading, numOfDays };
}

export default useRecentStays;
