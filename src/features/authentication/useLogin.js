import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.error(err);
      toast.error("Provided email or password are incorrect");
    },
  });
  return [mutate, isPending];
}

export default useLogin;
