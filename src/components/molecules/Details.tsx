import React, {Component, Fragment, useState, useEffect} from "react";
import { MessageHub, EventType, MessageHubControllers } from '../../utils/MessageHub';
import styled from 'styled-components';

const DetailsComponent: any = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  min-height: 450px;
  max-width: 450px;
  width: 100vw;
  background: #10181F;
  color: white;
  z-index: 100;
  transition: right 0.5s ease-in-out;

  &.empty {
    right: -100vw;
  }
`

const Details = (props: any) => {
  const [ currentElement, setCurrentElement ] = useState();
  const getCurrentElement = (data: any) => {
    setCurrentElement(data);
  }

  useEffect( () => {
    MessageHub.addListener(EventType.Details, getCurrentElement);
  }, [])

  const close = () => { setCurrentElement(undefined) }

  if ( currentElement == undefined ) return <DetailsComponent className="empty"></DetailsComponent>;

  return  (
    <DetailsComponent>
      <div onClick={close}>CLOSE</div>
      These are the details2 {currentElement.name}
    </DetailsComponent>
  )
}

export default Details;