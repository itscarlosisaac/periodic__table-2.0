import React, { Component } from "react";
import styled from 'styled-components';

import { Stack } from '../atoms/Stack'

export interface TableProps {
  theme: string;
}

const StyledTable: any = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  padding: 20px;
  background-color: ${(p: any) => p.theme == 1 ? '#EEECEC' : '#1A2731'}
  svg {
    flex-grow: 1;
  }
`

export class Table extends Component<TableProps, any> {
  render() {
      const { theme } = this.props
      return (
        <StyledTable theme={theme}>
          <Stack></Stack>
        </StyledTable>
      )
  }
}