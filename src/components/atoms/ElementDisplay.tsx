import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { MessageHub, EventType } from '../../utils/MessageHub';

const ElementDisplayContainer = styled.div`
  height: 170px;
  min-width: 170px;
  background-color: red;
  position: relative;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  display: flex;
  margin: 20px 15px 15px 15px;

  .e-symbol {
    font-size: 80px;
    font-weight: bolder;
  }

  .e-number {
    position: absolute;
    right: 5px;
    top: 5px;
    font-size: 13px;
  }
  .e-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`


const ElementDisplay = (props: any) => {
  const [ useHoverElement, setHoverElement] = useState({'name': '', 'number': '', 'symbol': '', 'atomic_mass': ''});

  const GetHoverElement = (data: any ) => {
    data !== undefined ? setHoverElement(data) : null;
  }

  useEffect( () => {
    MessageHub.addListener(EventType.ShowElementDisplay, GetHoverElement);
  }, [])

  return (
    <ElementDisplayContainer>
      <span className="e-number">{useHoverElement.number}</span>
      <span className="e-symbol">{useHoverElement.symbol}</span>
      <div className="e-details">
        <span className="e-name">{useHoverElement.name}</span>
        <span className="e-mass">{useHoverElement.atomic_mass}</span>
      </div>
    </ElementDisplayContainer>
  )
}


export default ElementDisplay;