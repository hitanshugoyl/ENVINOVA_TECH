import * as React from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@material-ui/core/Divider';
import './Tabs.css';





const CenteredTabs=()=> {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <div className='Tabs'>
      <Box sx={{ width: '110%', bgcolor: 'background.paper',alignItems:"flex-end" , border:"2px solid #F5A9A9"}}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="About" style={{paddingRight:"230px",paddingLeft:"230px"}}/>
          <Divider orientation="vertical" flexItem />
          <Tab label="HelpCentre" style={{paddingRight:"230px",paddingLeft:"230px"}} />
          <Divider orientation="vertical" flexItem />
          <Tab label="FAQ" style={{paddingRight:"230px",paddingLeft:"230px"}}/>
        </Tabs>
      </Box>
      </div>
    );
  }
  export default CenteredTabs;