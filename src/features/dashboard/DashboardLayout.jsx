import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";
import useRecentBookings from "./useRecentBookings";
import Stats from "./Stats";
import useCabins from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoadingBookings } = useRecentBookings();
  const {
    isLoading: isLoadingStays,
    confirmedStays,
    numOfDays,
  } = useRecentStays();
  const [cabins, isGettingCabins] = useCabins();

  if (isLoadingBookings || isLoadingStays || isGettingCabins)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        ats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numOfDays={numOfDays}
        numOfCabins={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numOfDays={numOfDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
