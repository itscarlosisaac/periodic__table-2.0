import { useEffect, useState } from 'react';

const useHttp = (API: string, dependencies: any[]) => {
  const [ fetchedData, setFetchedData ] = useState();
  const [ isLoading, setIsLoading ] = useState(true);

  const fetchData = () => {
    console.log( 'Is Fetching from the API')
    setIsLoading(true);
    fetch(API)
      .then(response => response.json())
      .then(response => {
        setFetchedData(response);
        setIsLoading(false)
      })
      .catch(err => {
        console.error(`Error fetching the data from API: ${API} - Error: ${err}`)
        setIsLoading(false);
      })
  };

  useEffect(() => {
    fetchData();
  }, dependencies)

  return [fetchedData, isLoading];
};

export default useHttp;