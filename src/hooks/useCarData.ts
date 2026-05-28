  import type { CarData } from "../interface/carData";
  import { useQuery } from "@tanstack/react-query";
  import axios from "axios";
  import type { AxiosPromise } from "axios";

  const API_URL = "http://localhost:8080";

  //funcao que vai fazer o get a API e pegar todos os dados dos carros
  const fetchData = async (): AxiosPromise<CarData[]> => {
    return axios.get(API_URL + "/cars")
  }

  export function useCarData() {
    const query = useQuery({
      queryFn: fetchData,
      queryKey: ["car-data"],
      retry: 2
    })

    return {
      ... query,
      data: query.data?.data
    }
  }
