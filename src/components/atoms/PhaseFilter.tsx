import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { MessageHubControllers } from '../../utils/MessageHub';

const PhaseFilter = ( props: any ) => {
  console.log(props)
  return (
    <div>
      {/* {props.phases.phase.map((phase: any, index: number) => {
        return (
          <div>phase</div>
        )
      })} */}
      <p onClick={() => {props.actions.FilterByPhase('gas') }}>Gas</p>
      <p onClick={() => {props.actions.FilterByPhase('solid') }}>Solid</p>
      <p onClick={() => {props.actions.FilterByPhase('liquid') }}>Liquid</p>
      <p onClick={() => {props.actions.FilterByPhase('unknown') }}>Unknown</p>
    </div>
  )
}

export default PhaseFilter;