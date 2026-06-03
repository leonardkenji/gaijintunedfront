  import type { User } from "../interface/userData";
  import { useQuery } from "@tanstack/react-query";
  import axios from "axios";
  import type { AxiosPromise } from "axios";

  const API_URL = "http://localhost:8080";

  //funcao que vai fazer o get a API e pegar todos os dados dos carros
  const fetchData = async (id: string): AxiosPromise<User> => {
    return axios.get(`${API_URL}/users/${id}`)
  }

  export function useUserShow(id: string) {
    const query = useQuery({
      queryFn: () => fetchData(id),
      queryKey: ["user", id],
      retry: 2
    })

    return {
      ... query,
      data: query.data?.data
    }
  }
