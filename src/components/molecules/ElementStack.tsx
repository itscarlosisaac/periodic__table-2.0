import React, { Component, Fragment, useEffect, useState } from 'react'
import styled from 'styled-components';
import ShowBox from './ShowBox';
import Element from '../atoms/Element';
import useParseElements from '../../hooks/parseElements';
import { APIURL } from '../../utils/Constants';
import { MessageHubControllers } from '../../utils/MessageHub';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(18,70px);
  grid-template-rows: repeat(10,70px);
  width: 100vw;
  min-height: calc(10 * 70px);
  max-width: calc(18 * 70px)
`;

const ElementStack = ( props: any) => {
  const [ elements, phases, metals, nonmetals, isLoading ] = useParseElements(APIURL, []);
  const [ useElements, setElements ] = useState();
  const [ useFilters, setFilters ] = useState([]);

  useEffect( () => {
    setElements(elements);
  }, [elements == undefined, !isLoading ])

  const handleClick = (index: number) => {
    MessageHubControllers.ShowDetails(useElements[index])
  }

  const FilterElements = (type: string, filter: string ) => {
    const filters: any = useFilters;
    !filters.includes(filter) ? filters.push(filter) : filters.splice(filters.indexOf(filter), 1);

    setFilters(filters);

    if ( useFilters.length == 0  ) return setElements(elements);

    let newElements = elements.filter( (element: any) => useFilters.includes(element.category.toLowerCase()) || useFilters.includes(element.phase.toLowerCase()));
    setElements(newElements);
  }

  const FilterByPhase  = (phase: string ) => {
    FilterElements('phase', phase);
  }

  const filterByCategory = ( cat: string ) => {
    FilterElements('category', cat);
  }

  if ( useElements == undefined) {
    return (  <div> Loading... </div> )
  }else {
    return (
      <Grid>
        { useElements.map((e: any, index: number) => {
          return (
            <Element
              onClick={ () => {handleClick(index)}}
              data={e}
              key={`${index}-element`}
              className={' ̑ ̑grid--element'}>
            </Element>
          );
        } ) }
        <ShowBox
          actions={{FilterByPhase, filterByCategory}}
          phases={phases}
          types={[metals, nonmetals]}/>
      </Grid>
    )
  }
}

export default ElementStack;
