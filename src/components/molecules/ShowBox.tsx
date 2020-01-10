import React, { Component, Fragment } from 'react'
import styled from 'styled-components';
import PhaseFilter from '../atoms/PhaseFilter';
import ElementDisplay from '../atoms/ElementDisplay';

export const ElementShowBox = styled.div`
  display: flex;
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 3;
  grid-column-end: 13;
  justify-content: space-between;
  align-items: flex-start;
  font-family: Roboto, Arial, Helvetica, sans-serif;
`

const ShowBox = (props: any) => {
  return (
    <ElementShowBox>
      <ElementDisplay />
      <PhaseFilter actions={props.actions} phases={props.phases} categories={props.categories} />
    </ElementShowBox>
  )
}

export default ShowBox;