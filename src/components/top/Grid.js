import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Home1Img from '../../home1img';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '20px',
   
    height: '300px'
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignItems: "stretch",
    height: '100%'
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1} style={{height: "502px"}}>
        <Grid item xs={9}>
          <Paper className={classes.paper} style={{backgroundColor: " #C4C4C4",width: "1162px",height:"502px", marginLeft:"102px", marginTop: "70px",position:"absolute"}}>HOME</Paper>
        </Grid>
      </Grid>     
<Home1Img />  
   
    </div>
  );
}