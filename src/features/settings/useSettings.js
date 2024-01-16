import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

const useSettings = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return [data, isLoading, error];
};
export default useSettings;
