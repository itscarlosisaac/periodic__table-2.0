import React, { Component, Fragment } from 'react'
import styled from 'styled-components';



declare module "react" {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: any;
  }
}

const ar = [
  { x:1, y:1 },
  { x:1, y:2 },
  { x:2, y:2 },
  { x:18, y:1 },
  { x:17, y:2 },
  { x:18, y:2 },
];

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(18,70px);
  grid-template-rows: repeat(10,70px);
  width: 100vw;
  height: 100%;
`;

export const GridElement = styled.div`
  background:red;
  display:block;
  grid-column-start: ${props => props.css.x};
  grid-row-start: ${props => props.css.y};
`;


export class Stack extends Component<any, any> {
  constructor( props: any) {
    super(props);
  }

  render() {
    return (
      <Grid>
        { ar.map((e,index) => {
          return <GridElement
              css={e}
              key={`${index}-element`}
              className={e.x + ' grid--element'}>
                {e.x} - {e.y}
            </GridElement>
        } ) }
      </Grid>
    )
  }
}


