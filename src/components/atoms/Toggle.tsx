import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { MessageHubControllers } from '../../utils/MessageHub';

enum State {
  on = 1,
  off = 0
}

const Switch: any = styled.div`
  padding: 5px;
  box-sizing: border-box;
  border-radius: 1000px;
  position: relative;
  display: inline-block;
  width: 42px;
  height: 26px;
  overflow: hidden;
  background-color: #77A1D5;
  cursor: pointer;

  .slider {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius:1000px;
    margin: auto;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    -webkit-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    transform: translateX(-10px);
  }
  .slider.on {
    -webkit-transform: translateX(10px);
    -ms-transform: translateX(10px);
    transform: translateX(10px);
  }
  `
  // background: ${(props: any) => props.state ? 'red' : 'blue'}

export class Toggle extends Component<any, any> {
  constructor( props: any ){
    super(props);
    this.state = {
      state: State.on
    }
  }

  handleToggle = () => {
    const nextState = this.state.state == 1 ? State.off : State.on
    MessageHubControllers.Toggle(nextState);
    this.setState(() => ({ state: nextState  }));
  }

  render (){
    const { state } = this.state;
    return (
      <Fragment>
        <Switch state={state} onClick={this.handleToggle}>
          <span className={state ? 'slider on' : 'slider off'}></span>
        </Switch>
      </Fragment>
    )
  }
}