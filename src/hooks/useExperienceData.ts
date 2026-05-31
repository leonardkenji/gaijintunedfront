import type { AxiosPromise } from "axios";
import type { Experience } from "../interface/experienceData"
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<Experience[]> => {
  return axios.get(API_URL + "/experiences")
}

export function useExperienceData () {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["experience-data"],
    retry: 2
  })

  return{
  ... query,
  data: query.data?.data
  }
}
