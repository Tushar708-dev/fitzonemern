import { useEffect, useState } from "react";
import { api } from "./api";

// Loads data from the API when the component appears.
// const { data, loading, error } = useApi("/exercises");
// Pass `reloadKey` and change it to load again.
export function useApi(path, reloadKey = 0) {
  const [state, setState] = useState({ data: null, loading: true, error: "" });

  useEffect(() => {
    let cancelled = false;
    setState((s) => ({ ...s, loading: true, error: "" }));
    api
      .get(path)
      .then((data) => !cancelled && setState({ data, loading: false, error: "" }))
      .catch((err) => !cancelled && setState({ data: null, loading: false, error: err.message }));
    return () => { cancelled = true; };
  }, [path, reloadKey]);

  return state;
}
