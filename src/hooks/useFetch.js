import {useEffect, useState} from "react";

export const useFetch = (url, header) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      fetch(url, {headers : header})
          .then(response => response.json())
          .then(data => setData(data))
    };
    fetchData()
  }, [ url, header ]);
  return { data }
}
