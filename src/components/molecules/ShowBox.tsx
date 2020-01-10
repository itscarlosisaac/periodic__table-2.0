import React, { Component, Fragment } from 'react'
import styled from 'styled-components';
import PhaseFilter from '../atoms/PhaseFilter';

export const ElementShowBox = styled.div`
  background: yellow;
  display: block;
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 3;
  grid-column-end: 13;
`

const ShowBox = (props: any) => {
  return (
    <ElementShowBox>
      <PhaseFilter actions={props.actions} phases={props.phases} types={props.types} />
    </ElementShowBox>
  )
}

export default ShowBox;