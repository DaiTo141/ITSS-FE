import { Box, CardMedia, Typography, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import clsx from 'clsx';
export const NavBar = () => {
  const classes = useStyles();
  const [active, setActive] = useState('home')
  return (
    <Box className={classes.container}>
      <Box display="flex" alignItems="center">
        <CardMedia
          image="/images/logo.png"
          style={{
            height: 50,
            width: 50,
          }}
        />
        <Typography
          style={{
            fontWeight: 700,
            marginLeft: 6,
          }}
        >
          チーちゃんフード
        </Typography>
      </Box>
      <Box className={classes.wrapper}>
        <Box className={clsx(classes.item, {
          [classes.active]: active == 'home'
        })} onClick={()=> setActive('home')}>
          <HomeIcon fontSize="large" />
        </Box>
        <Box className={clsx(classes.item, {
          [classes.active]: active == 'search'
        })} onClick={()=> setActive('search')}>
          <SearchIcon fontSize="large" />
        </Box>
        <Box className={clsx(classes.item, {
          [classes.active]: active == 'noti'
        })} onClick={()=> setActive('noti')}>
          <NotificationsIcon fontSize="large" />
        </Box>
      </Box>
      <Box style={{
        padding:'5px 5px 0px 5px',
        border:'1px solid black',
      }}>
        <MenuIcon fontSize="large"/>
      </Box>
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    height: '80px',
    width: '100%',
    position: 'fixed',
    top: '0',
    background:'darkkhaki',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 60px',
    zIndex: 1000,
    justifyContent: 'space-between',
    '& svg': {
      color: 'black !important',
    },
  },
  wrapper: {
    width: 400,
    border: '1px solid black',
    height: 50,
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  item:{
    width: 50,
    display:'flex',
    justifyContent:'center',
    borderRadius:14,
    cursor:'pointer',
  },
  active:{
    background:'white',
    border:'1px solid black',
  }
}));
