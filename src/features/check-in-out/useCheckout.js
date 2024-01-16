import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (booking) => {
      toast.success(`Booking #${booking.id} successfully Checked-out`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error(`There was an error while checking-out`);
    },
  });

  return [mutate, isPending];
}
export default useCheckout;
