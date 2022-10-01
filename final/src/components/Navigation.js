import React from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab(props) {
  let navigate = useNavigate()

  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        navigate(props.to)
      }}
      {...props}
    />
  );
}

export default function Navigation() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
          <Box 
    sx={{ flexGrow: 0}}>
      <Tabs 
      value={value} 
      textColor="primary"
      onChange={handleChange} 
      aria-label="nav tabs example">
       <LinkTab label="Home" to="/" />
       <LinkTab label="About" to="/about" />
       <LinkTab label="Project" to="/project" />
     </Tabs>
    </Box>
    
  )

}
