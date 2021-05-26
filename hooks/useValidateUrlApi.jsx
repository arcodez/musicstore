import { useEffect } from "react";

function useValidateUrlApi() {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
  }
  console.log(hostname);
  return { hostname };
}

export default useValidateUrlApi;
