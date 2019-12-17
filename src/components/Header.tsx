import React, { Component } from "react";
import { LogoLight } from './atoms/LogoLight';
import { LogoDark } from './atoms/LogoDark';
import { Toggle } from './atoms/Toggle';

export interface HeaderProps {
  theme: string;
}

export class Header extends Component<HeaderProps, any> {
  render() {
      return (
        <div>
          <LogoLight/>
          <LogoDark/>
          <Toggle/>
          <h1>Hello from {this.props.theme}!</h1>
        </div>
      )
  }
}