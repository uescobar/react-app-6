import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Chuck = {
  value: string;
};

export default function useChuck() {
  return useQuery({
    queryKey: ["chuck"],
    staleTime: 0,
    queryFn: () =>
      axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((res) => res.data),
  });
}
