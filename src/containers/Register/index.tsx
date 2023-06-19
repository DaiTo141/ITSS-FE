import {
  Box,
  Button,
  CardMedia,
  InputAdornment,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import { useHistory } from 'react-router-dom';
import AXIOS from 'services/axios';
export const Register = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirm, setConfirm] = useState('');
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
            label="名前"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="メールアドレス"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="パスワード"
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
          <TextField
            label="パスワード確認"
            variant="outlined"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EnhancedEncryptionIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        {err && (
          <Box mt={2} className="center-root">
            <Typography style={{ color: 'red' }}>登録失敗</Typography>
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
            onClick={async () => {
              if (confirm != password) {
                setErr(true);
                return;
              }
              const data = await AXIOS.post('/users', {
                name: username,
                email: email,
                password: password,
                image:
                  'https://s3.ap-southeast-2.amazonaws.com/cdn.greekherald.com.au/wp-content/uploads/2020/07/05194617/default-avatar.png',
                status: 0,
              });
              localStorage.setItem('me', JSON.stringify(data));
              setTimeout(() => {
                history.push('/');
              }, 500);
            }}
          >
            登録
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
              history.push('/login');
            }}
          >
            ログイン
          </Button>
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
      fill: 'black',
    },
    '& label': {
      color: 'black !important',
    },
  },
}));
