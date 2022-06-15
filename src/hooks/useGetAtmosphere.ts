import { useQuery } from "react-query";
import { getTMByCity } from "../utils/api/atmosphere";
import { AxiosError } from "axios";

const useGetAtmosphere = (document_id: string) => {
  return useQuery(["document", document_id], () => getTMByCity("보람동"));
};

export default useGetAtmosphere;
