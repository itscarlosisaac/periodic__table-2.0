import React, { Component } from "react";
import { LogoLight } from '../atoms/LogoLight';
import { LogoDark } from '../atoms/LogoDark';
import { Toggle } from '../atoms/Toggle';
import styled from 'styled-components';

export interface HeaderProps {
  theme: string;
}

const StyledHeader: any = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  padding: 20px;
  background-color: ${(p: any) => p.theme == 1 ? 'white' : '#12181C'}
  svg {
    flex-grow: 1;
  }
`

export class Header extends Component<HeaderProps, any> {
  render() {
      const { theme } = this.props
      return (
        <StyledHeader theme={theme}>
          { theme ? <LogoDark/> : <LogoLight/>  }
          <Toggle/>
        </StyledHeader>
      )
  }
}