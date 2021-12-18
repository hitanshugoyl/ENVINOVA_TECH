import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    container:{
        paddingTop: "30px"
    },
  root: {
    flexGrow: 1,
    
  },
});

 function CategoryBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div className={classes.container}>
    {/* <Paper className={classes.root}> */}
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="secondary"
        variant="fullWidth"
        centered
      >
        <Tab label="Shop All Categories" />
        <Tab label="Bags" />
        <Tab label="Decor" />
        <Tab label="Essentials" />
        <Tab label="Kitchen" />
        <Tab label="Stationary" />
      </Tabs>
    {/* </Paper> */}
    </div>
  );
}
export default CategoryBar;