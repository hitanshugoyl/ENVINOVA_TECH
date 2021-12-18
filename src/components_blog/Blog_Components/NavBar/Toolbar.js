import React from "react";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Globe from './Logo';
import NavLeftElements from './NavbarLeft';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ForumIcon from '@material-ui/icons/Forum';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { emphasize, withStyles } from '@material-ui/core/styles';


// const styles= = {
//     .MuiToolbar-root{
//       backgroundColor: "white",
//       // border: 0,
//       // borderRadius: 3,
//       // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//       // color: "white",
//       // height: 48,
//       // padding: "0 30px"
//     }
//   };



const Toolbar=({classes})=>{
    return(
        <React.Fragment className={classes.root}>
< NavLeftElements onClick={handleClick}/>
<IconButton
  edge="start"
  className={classes.menuButton}
  color="inherit"
  aria-label="open drawer"
>
  {/* <MenuIcon /> */}
</IconButton>

<div className={classes.grow} />
<div className={classes.sectionDesktop}>
<IconButton aria-label="forum for support" color="inherit">
     <ForumIcon />
  </IconButton>
  
<IconButton
    // edge="end"
    aria-label="account of current user"
     aria-controls={menuId}
    aria-haspopup="true"
    onClick={handleProfileMenuOpen}
    color="inherit"
  >
    <AccountCircleIcon />
    
  </IconButton>
  <IconButton aria-label="show 4 items" color="inherit">
    <Badge badgeContent={17} color="secondary">
      <FavoriteBorderIcon />
    </Badge>
  </IconButton>
  
  <IconButton aria-label="show 11 items in bag" color="inherit">
    <Badge badgeContent={4} color="secondary">
      < LocalMallIcon/>
    </Badge>
  </IconButton>
</div>
<div className={classes.sectionMobile}>
  <IconButton
    aria-label="show more"
    aria-controls={mobileMenuId}
    aria-haspopup="true"
    onClick={handleMobileMenuOpen}
    color="inherit"
  >
    <MoreIcon />
  </IconButton>
</div>
</React.Fragment>
    );
}

export default withStyles(styles)(Toolbar);