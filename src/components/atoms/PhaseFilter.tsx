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
      <section>
        <p onClick={() => {props.actions.FilterByPhase('gas') }}>Gas</p>
        <p onClick={() => {props.actions.FilterByPhase('solid') }}>Solid</p>
        <p onClick={() => {props.actions.FilterByPhase('liquid') }}>Liquid</p>
        <p onClick={() => {props.actions.FilterByPhase('unknown') }}>Unknown</p>
      </section>
      <section>
        <p onClick={() => {props.actions.filterByCategory('alkali metal') }}>alkali metal</p>
        <p onClick={() => {props.actions.filterByCategory('alkaline earth metal') }}>alkali earth metal</p>
        <p onClick={() => {props.actions.filterByCategory('metalloid') }}>metalloid</p>
        <p onClick={() => {props.actions.filterByCategory('post-transition metal') }}>post-transition metal</p>
        <p onClick={() => {props.actions.filterByCategory('transition metal') }}>transition metal</p>
        <p onClick={() => {props.actions.filterByCategory('lanthanide') }}>lanthanide</p>
        <p onClick={() => {props.actions.filterByCategory('actinide') }}>actinide</p>
      </section>
    </div>
  )
}

export default PhaseFilter;