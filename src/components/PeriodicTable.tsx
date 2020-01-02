import React, {Component, Fragment, useState, useEffect} from "react";
import Header from './molecules/Header';
import Table from './molecules/Table';
import { MessageHub, EventType } from '../utils/MessageHub';

enum Theme {
    dark = 0,
    light = 1,
}

const PeriodicTable = (props: any) => {
    const [ theme, setTheme ] = useState(1);

    const handleThemeToggle = (theme: number) => {
        setTheme(theme);
    }

    useEffect( () => {
        console.log("RE- Render from P-Table")
        MessageHub.addListener(EventType.Toggle, handleThemeToggle);
    }, [])

    return (
        <Fragment>
            <Header theme={theme} />
            <Table theme={theme} />
        </Fragment>
    )
}

export default PeriodicTable;

// export class PeriodicTable extends Component<any, any> {
//     constructor(props: any){
//         super(props);
//         this.state = {
//             theme: Theme.light,
//         }
//     }

//     componentWillMount() {
//       console.log(this.state)
      
//     }

//     componentDidMount() {
//       MessageHub.addListener(EventType.Toggle, this.handleThemeToggle);
//       const [ data, isLoading ] = useHttp("https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json");

//       console.log(data, isLoading)
//     }

//     handleThemeToggle = (data: number) => {
//         this.setState(() => ({ theme: data }));
//     }

//     render() {
//         const { theme } = this.state
//         return (
//             <Fragment>
//                 <Header theme={theme} />
//                 <Table theme={theme} />
//             </Fragment>
//         )
//     }
// }