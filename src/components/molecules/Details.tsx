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
    console.log(data)
    setCurrentElement(handleData(data));
  }

  const handleData = (data: any) :any => {
    const { name, symbol, summary, spectral_img, number, source } = data;
    const iterable = {...data};
    delete iterable.xpos
    delete iterable.ypos
    delete iterable.name
    delete iterable.symbol
    delete iterable.summary
    delete iterable.number
    delete iterable.spectral_img
    delete iterable.source
    return {
      details: {name, symbol, summary, spectral_img, number },
      iterables: {...iterable},
      xref: source,
    }
  }

  useEffect( () => {
    MessageHub.addListener(EventType.Details, getCurrentElement);
  }, [])

  const close = () => { setCurrentElement(undefined) }

  const removeUnderScore = (e:string) : string => {
    return e.replace(/_/g, ' ');
  }

  const checkData = (e: any ): string => {
    if ( e instanceof Array) {
      return `[${e.join(', ')}]`;
    }
    return e;
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
          Object.keys(currentElement.iterables).map((el: any, index: number) => {
            return (
              <div
                key={el}
                className={index % 2 == 0 ? 'odd' : 'even'}
                hidden={currentElement.iterables[el] == null}>
                <span>{removeUnderScore(el)}: </span>
                <span>
                  { checkData(currentElement.iterables[el]) }
                </span>
              </div>
            )
          })
        }
      </article>
      <a
        hidden={currentElement.xref == null}
        target="_blank"
        href={currentElement.xref}> Learn More
      </a>
    </DetailsComponent>
  )
}

export default Details;