import React from 'react';
import { NavigationBar } from "./components/NavigationBar";
import { StepperMenu } from "./components/StepperMenu";
import {ContactItems} from "./components/ContactItems";
import {PersonalInfo} from "./components/PersonalInfo";

function App() {
    return (
        <div>
            <NavigationBar />
            <PersonalInfo/>
            <StepperMenu/>
            <ContactItems/>
        </div>
    )
}

export default App;
