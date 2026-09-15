import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  // return data interface jaise hi hoga jo ham nai define kiya hai
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: boolean,
    error: null,
  });
  // UseEffect to make fetch request

  //   return state;
}

// jab ham fetch kar rahe honge to ya to data a rhaa hoga ya ja raha hoga etc

// now ab useEffect hook lo aur osko define kardo and ye data lelo
