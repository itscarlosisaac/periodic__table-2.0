import React, {Component, Fragment, useState, useEffect} from "react";
import Header from './molecules/Header';
import Table from './molecules/Table';
import Details from './molecules/Details';
import { MessageHub, EventType } from '../utils/MessageHub';

const PeriodicTable = (props: any) => {
    const [ theme, setTheme ] = useState(1);

    const handleThemeToggle = (theme: number) => {
        setTheme(theme);
    }

    useEffect( () => {
        MessageHub.addListener(EventType.Toggle, handleThemeToggle);
    }, [])

    return (
        <Fragment>
            <Details />
            <Header theme={theme} />
            <Table theme={theme} />
        </Fragment>
    )
}

export default PeriodicTable;