import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    container:{
      width: '1700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    divsearch:{
      width: '900px',
      paddingTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
      grow: {
        flexGrow: 2,
      },
      menuButton: {
        marginRight: theme.spacing(2),
        
      },
      search: {
         position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(10),
         width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        marginRight: theme.spacing(0),
        marginLeft: theme.spacing(100),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'secondary',
      },
       inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
       // verticalpadding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
       [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
    }));

const SearchBar=()=>{
    const classes = useStyles();
    return(
    <div className={classes.search}>
  <div className={classes.divsearch}>
  
<InputBase 
  placeholder="Search…"
  classes={{
    root: classes.inputRoot,
    input: classes.inputInput,
  }}
  inputProps={{ 'aria-label': 'search' }}
/>
<div className={classes.searchIcon}>
<SearchIcon />
</div>
</div>
</div>
    )
}
export default SearchBar;