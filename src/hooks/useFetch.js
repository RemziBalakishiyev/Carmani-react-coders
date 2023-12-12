import React, { useEffect, useState } from "react";

function useFetch(url, loadFn) {
  const [responseData, setresponseData] = useState([]);
  const [error, seterror] = useState("");
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((responseValue) => {
        setresponseData(Object.values(responseValue));

        loadFn(Object.values(responseValue));
      })
      .catch((err) => seterror(err.toString()));
  }, [url]);

  return {
    responseData,
    error,
  };
}

export default useFetch;
