import React, {Component, Fragment} from "react";
import { Header } from './molecules/Header';
import { Table } from './molecules/Table';
import { MessageHub, EventType } from '../utils/MessageHub';


enum Theme {
    dark = 0,
    light = 1
}

export class PeriodicTable extends Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            theme: Theme.light,
        }
    }

    componentWillMount() {
      console.log(this.state)
    }

    componentDidMount() {
      MessageHub.addListener(EventType.Toggle, this.handleThemeToggle);
    }

    handleThemeToggle = (data: number) => {
        this.setState(() => ({ theme: data }));
    }

    render() {
        const { theme } = this.state
        return (
            <Fragment>
                <Header theme={theme} />
                <Table theme={theme} />
            </Fragment>
        )
    }
}