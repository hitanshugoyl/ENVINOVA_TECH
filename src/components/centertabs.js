import * as React from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@material-ui/core/Divider';





const CenteredTabs=()=> {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', bgcolor: 'background.paper',alignItems:"flex-end" , border:"2px solid #F5A9A9"}}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="About" href="/about " style={{paddingRight:"230px",paddingLeft:"230px"}}/>
          <Divider orientation="vertical" flexItem />
          <Tab label="HelpCentre" href="/support" style={{paddingRight:"230px",paddingLeft:"230px"}} />
          <Divider orientation="vertical" flexItem />
          <Tab label="FAQ" href="/faq" style={{paddingRight:"230px",paddingLeft:"230px"}}/>
        </Tabs>
      </Box>
    );
  }
  export default CenteredTabs;