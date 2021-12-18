import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const StyledLink = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.warning.light,
    height: theme.spacing(3),
    color: theme.palette.background.default,
    fontWeight: theme.typography.fontWeightBold,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.warning.light,
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 1.5),
    },
  },
}));

export default function NavLinks(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems="center" className={classes.root}>
        <Link color="textPrimary" 
        style={{fontWeight: "bold"}}
        href="/"
         onClick={props.onClick}>
          Blogs
          </Link>
        <Divider orientation="vertical" flexItem />
        <Link color="textPrimary"
         style={{fontWeight: "bold"}} 
         href="/" 
         onClick={props.onClick}>
          Rewards
        </Link>
        <Divider orientation="vertical" flexItem />
        <StyledLink
        style={{fontWeight: "bold"}}
        label="SOLAR"
        onClick={props.onClick}
        href="/"
        />
        
      </Grid>
    </div>
  );
}