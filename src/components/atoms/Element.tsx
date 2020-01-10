import React, { Component, Fragment, useEffect, useState } from 'react'
import styled from 'styled-components';

declare module "react" {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    data?: any;
  }
}

const GridElement = styled.div`
  background: red;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: block;
  position: relative;
  grid-column-start: ${props => props.data.xpos};
  grid-row-start: ${props => props.data.ypos};
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

const Element = (props: any) => {
  return (
    <GridElement {...props}>
      <span className="element--number">{props.data.number}</span>
      <span className="element--symbol">{props.data.symbol}</span>
      <div className="element--details">
        <span>{props.data.name}</span>
        <span className="element--mass">{props.data.atomic_mass.toFixed(4)}</span>
      </div>
    </GridElement>
  )
}

export default Element;