import {
  Box,
  Button,
  CardMedia,
  InputAdornment,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import AXIOS from 'services/axios';
import { useHistory } from 'react-router-dom';
import { SecureStorageEnum } from 'enums/auth';

export const ForgotPassword = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const history = useHistory();
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        {err && (
          <Box mt={2} className="center-root">
            <Typography style={{ color: 'red' }}>
              ログインに失敗しました。
            </Typography>
          </Box>
        )}
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
            onClick={() => {
              AXIOS.post('auths/login', {
                email,
                password
              }).then((res:any) => {
                localStorage.setItem(SecureStorageEnum.ACCESS_TOKEN, res.data.access_token)
                AXIOS.get('auths/profile').then((res:any) => {
                  return res.id
                }).then((id) => {
                  AXIOS.get(`users/${id}`).then((res:any) => {
                    localStorage.setItem('me', JSON.stringify({id, ...res}));
                    setTimeout(() => {
                      history.push('/');
                    }, 500);
                  })
                })
              })
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
            onClick={() => {
              history.push('/register');
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