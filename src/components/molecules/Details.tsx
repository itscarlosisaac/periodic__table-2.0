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
    setCurrentElement(handleData(data));
  }

  const handleData = (data: any) :any => {
    const { name, symbol, summary, spectral_img, number } = data;
    delete data.xpos
    delete data.ypos
    delete data.name
    delete data.symbol
    delete data.summary
    delete data.number
    delete data.spectral_img
    return {
      details: {name, symbol, summary, spectral_img, number },
      iterables: {...data}
    }
  }

  useEffect( () => {
    MessageHub.addListener(EventType.Details, getCurrentElement);
  }, [])

  const close = () => { setCurrentElement(undefined) }

  const removeUnderScore = (e:string) : string => {
    return e.replace(/_/g, ' ');
  }

  if ( currentElement == undefined )
    return <DetailsComponent className="empty"></DetailsComponent>;

  return  (
    <DetailsComponent>
      <header>
        <div onClick={close}>CLOSE</div>
        <div>{currentElement.details.symbol} <small>{currentElement.details.number}</small></div>
        <div>{currentElement.details.name}</div>
      </header>
      <article>
        <p>{currentElement.details.summary}</p>
      </article>
      <article>
        {
          Object.keys(currentElement.iterables).map((el: any) => {
            return (
              <div key={el}>
                <span>{removeUnderScore(el)}: </span>
                <span>{currentElement.iterables[el]}</span>
              </div>
            )
          })
        }
      </article>
    </DetailsComponent>
  )
}

export default Details;