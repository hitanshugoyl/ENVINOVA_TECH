import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ForumIcon from '@material-ui/icons/Forum';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Header from '../../Logo';

import NavLinks from './NavLinks';

// import SearchBar from 'material-ui-search-bar';
// import SearchBar from 'material-ui-search-bar';

const useStyles = makeStyles((theme) => ({
container:{
  width: '800px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:"5px"
},
  grow: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));



export default function Navbar() {

  const history = useHistory();

  const goToSupport=()=>{
    history.push("/support");
  }
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClick=(event)=> {
    event.preventDefault();
    console.info('You clicked a link.');
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
   
      <MenuItem onClick={handleProfileMenuOpen}>
      <IconButton
             aria-label="forum for support"
          // aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          
          
        >
          <ForumIcon />
        </IconButton>
        <p>Support</p>
        </MenuItem>
        <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
           aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
     
     <IconButton aria-label="show 4 items" color="inherit">
        {/* <Badge badgeContent={7} color="secondary">  */}
        < FavoriteBorderIcon />
      {/*  </Badge>  */}
     </IconButton>
     <p>Wishlist</p>
   </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 items in bag" color="inherit">
         {/*  <Badge badgeContent={11} color="secondary"> */}
          <LocalMallIcon />
         {/*  </Badge> */}
        </IconButton>
        <p>My Bag</p>
      </MenuItem>
    </Menu>
  );

  return (
    <React.Fragment>
    <div className={classes.grow} >
      <AppBar  style={{borderTop:"10px solid green" ,borderBottom:"4px solid #9FC8A8",width:"1366px"}} position="static" color="#fff" >
        <Toolbar >
          < NavLinks onClick={handleClick}/>
          <div className={classes.container}>
          <Header/>
          </div>
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
          <IconButton aria-label="forum for support" color="inherit" href="/support">
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
            {/*   <Badge badgeContent={17} color="secondary"> */}
                <FavoriteBorderIcon />
            {/*   </Badge> */}
            </IconButton>
            
            <IconButton aria-label="show 11 items in bag" color="inherit">
              {/* <Badge badgeContent={4} color="secondary"> */}
                < LocalMallIcon/>
            {/*   </Badge> */}
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
        </Toolbar>
      </AppBar>
     {renderMobileMenu} 
      
    </div>

    {/* <SearchBar
=======
    <SearchBar

      onChange={() => console.log('onChange')}
      placeholder="Search ..."
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 565,
        marginTop:100,
        
      }}
    />
 */}


</React.Fragment>
    
  );
}