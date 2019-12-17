import React, {Component, Fragment} from "react";
import {Header} from './Header';
import { MessageHub, EventType } from '../utils/MessageHub';


enum Theme {
    dark = 0,
    light = 1
}

export class PeriodicTable extends Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            theme: 1,
        }
    }

    componentWillMount() {
      console.log(this.state)
    }

    componentDidMount() {
      MessageHub.addListener(EventType.Toggle, this.handleThemeToggle);
    }

    handleThemeToggle = (data: any) => {
        this.setState(() => ({ theme: data }));
    }

    render() {
        const { theme } = this.state
        return (
            <Fragment>
                <Header theme={theme} />
            </Fragment>
        )
    }
}