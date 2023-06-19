import {
  Box,
  Button,
  CardMedia,
  InputAdornment,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
export const Register = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        style={{
          width: 500,
          border: '1px solid black',
          padding: '20px 60px',
          borderRadius: 30,
        }}
      >
        <Box className="center-root">
          <CardMedia
            image="images/logo.png"
            style={{
              height: 80,
              width: 100,
            }}
          />
        </Box>
        <Box className="center-root">
          <Typography
            style={{
              fontWeight: 700,
              marginLeft: 6,
              fontSize: 24,
            }}
          >
            チーちゃんフード
          </Typography>
        </Box>
        <Box className={classes.wrapper}>
          <TextField
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box className="center-root" mt={2}>
          <Button
            style={{
              background: '#EEECC6',
              padding: 12,
              color: 'black',
              borderRadius: 40,
              marginRight: 10,
              width: 130,
            }}
          >
            ログイン
          </Button>
          <Button
            style={{
              background: '#C6D6DD',
              padding: 12,
              color: 'black',
              borderRadius: 40,
              marginLeft: 10,
              width: 130,
            }}
          >
            サインアップ
          </Button>
        </Box>
        <Box mt={2} className="center-root">
          <Typography
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            パースワード忘れ？
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    '&>div': {
      margin: '12px 0px',
      background: 'white',
    },
    '& input': {
      color: 'black',
    },
    '& svg': {
      width: 32,
      height: 32,
      fill: 'black',
    },
  },
}));
