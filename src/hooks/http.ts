import { useEffect, useState } from 'react';

const useHttp = (API: string, dependencies: any[]) : Array<any> => {
  const [ fetchedData, setFetchedData ] = useState();
  const [ isLoadingElements, setIsLoadingElements ] = useState(true);

  const fetchData = () => {
    console.log( 'Is Fetching from the API')
    setIsLoadingElements(true);
    fetch(API)
      .then(response => response.json())
      .then(response => {
        setFetchedData(response);
        setIsLoadingElements(false)
      })
      .catch(err => {
        console.error(`Error fetching the data from API: ${API} - Error: ${err}`)
        setIsLoadingElements(false);
      })
  };

  useEffect(() => {
    fetchData();
  }, dependencies)

  return [fetchedData, isLoadingElements];
};

export default useHttp;