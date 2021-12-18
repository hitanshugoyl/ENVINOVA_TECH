/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
    <div className={classes.root}>
      <Grid container spacing={3} style={{height: "300px"}}>
        <Grid item xs>
          <Paper className={classes.paper} style={{backgroundColor: "#e0ddad"}}>link</Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper} style={{backgroundColor: "#c5cbd6"}}>HOME</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} style={{backgroundColor: "#e0ddad"}}>link</Paper>
        </Grid>
      </Grid>
    </div>
  );
}*/