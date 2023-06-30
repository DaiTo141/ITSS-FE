import {
  Box,
  CardMedia,
  Popover,
  Typography,
  makeStyles,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import AXIOS from 'services/axios';
import { SecureStorageEnum } from 'enums/auth';
export const NavBar = () => {
  const classes = useStyles();
  const [active, setActive] = useState('home');
  const me = localStorage.getItem('me');
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    if (history.location.pathname.split('/')[1]) {
      setActive(history.location.pathname.split('/')[1]);
    } else setActive('home');
  }, [history]);

  return (
    <Box className={classes.container}>
      <Box
        display="flex"
        alignItems="center"
        style={{
          cursor: 'pointer',
        }}
        onClick={() => {
          setActive('home');
          history.push('/');
        }}
      >
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
        <Box
          className={clsx(classes.item, {
            [classes.active]: active == 'home',
          })}
          onClick={() => {
            setActive('home');
            history.push('/');
          }}
        >
          <HomeIcon fontSize="large" />
        </Box>
        <Box
          className={clsx(classes.item, {
            [classes.active]: active == 'search',
          })}
          onClick={() => {
            setActive('search');
            history.push('/search');
          }}
        >
          <SearchIcon fontSize="large" />
        </Box>
        <Box
          className={clsx(classes.item, {
            [classes.active]: active == 'noti',
          })}
          onClick={() => setActive('noti')}
        >
          <NotificationsIcon fontSize="large" />
        </Box>
      </Box>
      <Box
        style={{
          padding: '5px 5px 0px 5px',
          border: '1px solid black',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        <MenuIcon fontSize="large" />
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box
          style={{
            background: '#C6FFC8',
            padding: 20,
          }}
        >
          <Box
            style={{
              borderBottom: '1px solid gray',
              marginBottom: 8,
              paddingBottom: 8,
              display: 'flex',
              cursor: 'pointer',
            }}
            onClick={() => {
              if (me) {
                history.push('/profile')
              } else {
                history.push('/login');
              }
            }}
          >
            <PersonIcon color="info" />
            <Typography
              style={{
                fontWeight: 600,
                marginLeft: 8,
                color: 'black',
              }}
            >
              {me ? 'プロフィール' : 'ログイン'}
            </Typography>
          </Box>
          <Box
            display="flex"
            style={{
              cursor: 'pointer',
            }}
            onClick={()=>{
              if (me) {
                localStorage.removeItem('me')
                localStorage.removeItem(SecureStorageEnum.ACCESS_TOKEN)
                history.push('/')
              } else {
                history.push('/register')
              }
            }}
          >
            <VpnKeyIcon color="info" />
            <Typography
              style={{
                fontWeight: 600,
                marginLeft: 8,
                color: 'black',
              }}
            >
              {me ? 'ログアウト' : '登録'}
            </Typography>
          </Box>
        </Box>
      </Popover>
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    height: '80px',
    width: '100%',
    position: 'fixed',
    top: '0',
    background: 'darkkhaki',
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
  item: {
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 14,
    cursor: 'pointer',
  },
  active: {
    background: 'white',
    border: '1px solid black',
  },
}));
