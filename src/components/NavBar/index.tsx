import { Box, CardMedia, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
export const NavBar = () => {
  const classes = useStyles();
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
        <Typography style={{
          fontWeight: 700,
          marginLeft: 6,
        }}>チーちゃんフード</Typography>
      </Box>
      <Box style={{
        width: 400,
        border:'1px solid black',
        height: 50,
        borderRadius:'15px',
      }}>
        <Box>
        </Box>
        <Box></Box>
        <Box></Box>
      </Box>
      <Box>
      <Typography>
      Menu
      </Typography>
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
    border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 60px',
    justifyContent:'space-between',
  },
}));
