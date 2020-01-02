import React, { Component } from "react";
import styled from 'styled-components';
import ElementStack from '../atoms/ElementStack'


export interface TableProps {
  theme: number;
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

const Table = (props: TableProps) => {
  const { theme } = props;

  return (
    <StyledTable theme={theme}>
      <ElementStack></ElementStack>
    </StyledTable>
  );
}

export default Table;
