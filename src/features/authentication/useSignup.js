import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { mutate: signUp, isPending: isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success(
        `Accoung has successfully created, Please verify the new account from the user's email address.`
      );
    },
    onError: (err) => {
      console.error(err);
      toast.error("Failed to register a new user");
    },
  });
  return { signUp, isLoading };
}

export default useSignup;
