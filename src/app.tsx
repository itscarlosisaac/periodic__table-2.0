import * as React from "react";
import * as ReactDOM from "react-dom";

import { PeriodicTable } from "./components/PeriodicTable";

ReactDOM.render(
    <PeriodicTable compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);