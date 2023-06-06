import {
  Box,
  Button,
  CardMedia,
  Input,
  Typography,
  makeStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { PreviewCommentItem } from 'components/PreviewCommentItem';
import { PreviewItem } from 'components/PreviewItem';
import { fake, fake2, fake3 } from 'utils/helper';

export const Search = () => {
  const [search, setSearch] = useState('');
  const classes = useStyles();
  return (
    <Box>
      <CardMedia
        image="/images/banner.png"
        style={{
          width: '100%',
          height: 350,
          borderRadius: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Typography
          style={{
            fontSize: 32,
            color: 'white',
          }}
        >
          どこか行けばいいのか
        </Typography>
        <Input
          className={classes.input}
          value={search}
          startAdornment={<SearchIcon />}
          disableUnderline
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></Input>
      </CardMedia>
      <Box mt={10}>
        <Box className={classes.menu}>
          <Typography>ニューポスト</Typography>
          <Box
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: 20,
            }}
          >
            {fake.map((a) => {
              return (
                <Box key={a.name}>
                  <PreviewItem image={a.image} name={a.name} />
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box className={classes.menu}>
          <Typography>レコメンドレストラン</Typography>
          <Box
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: 40,
            }}
          >
           {fake3.map((a) => {
              return (
                <Box key={a.name}>
                  <PreviewItem image={a.image} name={a.name} />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  input: {
    width: 500,
    height: 70,
    position: 'absolute',
    bottom: -30,
    background: 'white',
    border: 'none',
    borderRadius: 16,
    color: 'black',
    fontSize: 24,
    padding: '0px 20px',
    '& svg': {
      fontSize: 32,
      marginRight: 12,
    },
  },
  menu: {
    marginTop: 20,
    marginBottom: 20,
    '&>p': {
      fontSize: 24,
      fontWeight: 700,
    },
  },
}));
