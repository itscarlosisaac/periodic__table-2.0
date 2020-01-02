import React, { Component, Fragment } from 'react'
import styled from 'styled-components';


export const ElementShowBox = styled.div`
  background: yellow;
  display: block;
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 3;
  grid-column-end: 13;
`

export default class ShowBox extends Component {
  render() {
    return (
      <ElementShowBox>
        SHOW BOX
      </ElementShowBox>
    )
  }
}
