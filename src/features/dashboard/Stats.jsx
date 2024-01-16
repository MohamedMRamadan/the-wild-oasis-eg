import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numOfDays, numOfCabins }) {
  // 1.
  const numOfBookings = bookings.length;
  // 2.
  const numOfSales = bookings.reduce(
    (acc, curr) => (acc += curr.totalPrice),
    0
  );

  // 3.
  const numOfCheckins = confirmedStays.length;
  // 4.
  // => Num of Checked in nights / all available nights (Num of days * num of cabins)
  const occupation =
    confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numOfCabins * numOfDays);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numOfBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(numOfSales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={numOfCheckins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={`${Math.round(occupation * 100)}%`}
      />
    </>
  );
}

export default Stats;
