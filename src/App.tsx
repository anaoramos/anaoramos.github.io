import React from 'react';
import { NavigationBar } from "./components/NavigationBar";
import { StepperMenu } from "./components/StepperMenu";
import {ContactItems} from "./components/ContactItems";

function App() {
    return (
        <div>
            <NavigationBar />
            <StepperMenu/>
            <ContactItems/>
        </div>
    )
}

export default App;
