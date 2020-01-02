import React, { Component, Fragment } from 'react'
import styled from 'styled-components';
import ShowBox from './ShowBox';
import useHttp from '../../hooks/http';
import { APIURL } from '../../utils/Constants';

declare module "react" {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: any;
  }
}

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(18,70px);
  grid-template-rows: repeat(10,70px);
  width: 100vw;
  min-height: calc(10 * 70px);
  max-width: calc(18 * 70px)
`;

export const GridElement = styled.div`
  background:red;
  display:block;
  grid-column-start: ${props => props.css.xpos};
  grid-row-start: ${props => props.css.ypos};
`;


const ElementStack = ( props: any) => {
  const [ fetchedData, isLoading ] = useHttp(APIURL, []);

  let elements = [];
  if( fetchedData && !isLoading ) {
    elements = fetchedData.elements;
  }

  console.log(elements);


  return (
    <Grid>
      { elements.map((e: any, index: number) => {
        return <GridElement
            css={e}
            key={`${index}-element`}
            className={e.xpos + ' grid--element'}>
              {e.xpos} - {e.ypos}
          </GridElement>
      } ) }
      <ShowBox/>
    </Grid>
  )
}

export default ElementStack;
