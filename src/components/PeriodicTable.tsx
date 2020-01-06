import React, { useState, useEffect} from "react";
import Header from './molecules/Header';
import Table from './molecules/Table';
import Details from './molecules/Details';
import { MessageHub, EventType } from '../utils/MessageHub';
import styled from 'styled-components';

const PeriodicTableComponent: any = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
`

const PeriodicTable = (props: any) => {
    const [ theme, setTheme ] = useState(1);

    const handleThemeToggle = (theme: number) => {
        setTheme(theme);
    }

    useEffect( () => {
        MessageHub.addListener(EventType.Toggle, handleThemeToggle);
    }, [])

    return (
        <PeriodicTableComponent>
            <Details />
            <Header theme={theme} />
            <Table theme={theme} />
        </PeriodicTableComponent>
    )
}

export default PeriodicTable;