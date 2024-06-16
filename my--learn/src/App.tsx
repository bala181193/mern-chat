import React from 'react';
import './App.css';
import { Typography } from '@mui/material';
import MuiButton from './componets/button';
import TextField from './componets/text';
import SelectBox from './componets/select';
import RadioButtonFeild from './componets/radioButton';
import SwitchButton from './componets/switch';
import AutoComplete from './componets/autoComplete';
import CardExample from './componets/card';
import AccordionPage from './componets/accordian';
import NavBar from './componets/navBar'
function App() {
  return (
    <div className="App">
      {/* <Typography variant='h1' component={'p'}>
        hello react
      </Typography> */}
      {/* <MuiButton /> */}
      {/* <TextField /> */}
      {/* <SelectBox /> */}
      {/* <RadioButtonFeild /> */}
      {/* <SwitchButton /> */}
      {/* <AutoComplete /> */}
      {/* <CardExample /> */}
      {/* <AccordionPage /> */}
      <NavBar />
    </div>
  );
}

export default App;
