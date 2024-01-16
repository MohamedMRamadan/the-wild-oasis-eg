import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

const useUpdateSettings = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("Settings update successfully");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (error) => [toast.error(error)],
  });
  return [mutate, isPending];
};
export default useUpdateSettings;
