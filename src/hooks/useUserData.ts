  import type { User } from "../interface/userData";
  import { useQuery } from "@tanstack/react-query";
  import axios from "axios";
  import type { AxiosPromise } from "axios";

  const API_URL = "http://localhost:8080";

  //funcao que vai fazer o get a API e pegar todos os dados dos carros
  const fetchData = async (): AxiosPromise<User[]> => {
    return axios.get(API_URL + "/users")
  }

  export function useCarData() {
    const query = useQuery({
      queryFn: fetchData,
      queryKey: ["user-data"],
      retry: 2
    })

    return {
      ... query,
      data: query.data?.data
    }
  }
