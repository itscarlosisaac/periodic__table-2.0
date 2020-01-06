import { useEffect, useState } from 'react';
import useHttp from './http';

const useParseElements = (API: string, dependencies: any[] ) : Array<any> => {
  const [ data, isLoadingElements ] = useHttp(API, dependencies);
  const [ elements, setElements ] = useState();
  const [ phases, setPhases ] = useState();
  const [ metals, setMetals ] = useState();
  const [ nonmetals, setNonMetals ] = useState();
  const [ isLoading, setIsLoading ] = useState(true);

  const parsing = async () => {
    try {
      setIsLoading(false);
      const fetchedData = await data.elements

      const elements: object[] = [],
            phases = new Set(),
            metals = new Set(),
            nonmetals = new Set();

      fetchedData.map((element: any) => {
        elements.push(element);
        phases.add(element.phase.toLowerCase());
        !element.category.toLowerCase().includes("unknown") ?
          element.category.toLowerCase().includes("nonmetal") || element.category.toLowerCase() == "noble gas" ?
          nonmetals.add(element.category.toLowerCase()) :
          metals.add(element.category.toLowerCase()) : null
      });
      phases.add("unknown");
      setElements(elements);
      setPhases(phases);
      setMetals(metals);
      setNonMetals(nonmetals);
      setIsLoading(false);
    } catch (error) {
      console.error(`error procesing the data: ${error}`);
    }
  }

  useEffect(() => {
    !isLoadingElements && parsing();
  }, [isLoadingElements] )
  return [elements, phases, metals, nonmetals, isLoading];
}

export default useParseElements;