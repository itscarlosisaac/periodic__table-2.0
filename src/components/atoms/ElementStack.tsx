import React, { Component, Fragment, useEffect, useState } from 'react'
import styled from 'styled-components';
import ShowBox from './ShowBox';
import useHttp from '../../hooks/http';
import useParseElements from '../../hooks/parseElements';
import { APIURL } from '../../utils/Constants';
import { MessageHub, EventType, MessageHubControllers } from '../../utils/MessageHub';


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
  background: red;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: block;
  position: relative;
  grid-column-start: ${props => props.css.xpos};
  grid-row-start: ${props => props.css.ypos};
  font-family: Roboto, Arial, Helvetica, sans-serif;
  transform-origin: center center;
  transform: scale(0.95);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  .element--number {
    position: absolute;
    right: 5;
    top: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8px;
  }

  .element--symbol {
    font-wight: bold;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    bottom: 6px;
    position: relative;
  }

  .element--details {
    font-wight: bold;
    position: absolute;
    bottom: 0;
    padding: 0 0 5px 0;
    font-size: 8px;
    text-transform: uppercase;
    text-align: center;
    width: 100%;
  }
  .element--mass {
    display: block;
  }
`;


const ElementStack = ( props: any) => {
  const [ elements, phases, metals, nonmetals, isLoading ] = useParseElements(APIURL, []);

  const handleClick = (index: number) => {
    MessageHubControllers.ShowDetails(elements[index])
  }

  if ( isLoading || elements == undefined) {
    return (  <div> Loading... </div> )
  }else {
    return (
      <Grid>
        { elements.map((e: any, index: number) => {
          return <GridElement
              onClick={ () => {handleClick(index)}}
              css={e}
              key={`${index}-element`}
              className={e.xpos + ' grid--element'}>
                <span className="element--number">{e.number}</span>
                <span className="element--symbol">{e.symbol}</span>
                <div className="element--details">
                  <span>{e.name}</span>
                  <span className="element--mass">{e.atomic_mass.toFixed(4)}</span>
                </div>
            </GridElement>
        } ) }
        <ShowBox/>
      </Grid>
    )
  }
}

export default ElementStack;
