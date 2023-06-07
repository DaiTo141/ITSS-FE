import {
  Box,
  Button,
  CardMedia,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  makeStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { PreviewCommentItem } from 'components/PreviewCommentItem';
import { PreviewItem } from 'components/PreviewItem';
import { fake, fake2, fake3 } from 'utils/helper';
import { useHistory } from 'react-router-dom';
import { Rating } from '@mui/material';

export const Search = () => {
  const [search, setSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const history = useHistory();
  const [data, setData] = useState<any>([]);
  const [type, setType] = React.useState('食べ物');
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };
  console.log('data', data);
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
        <Box
          display="flex"
          style={{
            position: 'absolute',
            bottom: -30,
          }}
        >
          <Input
            className={classes.input}
            value={search}
            startAdornment={<SearchIcon />}
            disableUnderline
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setIsSearch(true);
                if (type == '食べ物') {
                  setData(fake.filter((f) => f.name.includes(search)));
                } else setData(fake3.filter((f) => f.name.includes(search)));
              }
              if (search == '') {
                setIsSearch(false);
              }
            }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></Input>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={type}
              onChange={handleChange}
              label="タイプ"
            >
              <MenuItem
                value={'食べ物'}
                style={{
                  color: 'black',
                }}
              >
                食べ物
              </MenuItem>
              <MenuItem
                value={'レストラン'}
                style={{
                  color: 'black',
                }}
              >
                レストラン
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </CardMedia>
      {!isSearch && (
        <Box mt={10}>
          <Box className={classes.menu}>
            <Typography>ニューポスト</Typography>
            <Box
              style={{
                display: 'flex',
                marginTop: 20,
                overflowY: 'auto',
              }}
            >
              {fake.map((a, i) => {
                return (
                  <Box
                    key={i}
                    mr={3}
                    ml={3}
                    style={{
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      history.push(`detail-food/${i + 1}`);
                    }}
                  >
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
                display: 'flex',
                marginTop: 40,
                overflowY: 'auto',
              }}
            >
              {fake3.map((a, i) => {
                return (
                  <Box
                    key={a.name}
                    mr={3}
                    ml={3}
                    style={{
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      history.push(`detail-restaurant/${i + 1}`);
                    }}
                  >
                    <PreviewItem image={a.image} name={a.name} />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      )}
      {isSearch && data && (
        <Box
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: 40,
          }}
        >
          {data.map((x: any, i: any) => {
            return (
              <Box
                style={{
                  width: 300,
                  height: 300,
                  borderRadius: 30,
                  margin: 12,
                  background: 'white',
                  padding: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={i}
              >
                <CardMedia
                  image={x.image}
                  style={{
                    width: 180,
                    height: 120,
                    borderRadius: 20,
                  }}
                />
                <Typography style={{
                  fontWeight:600,
                  margin: '10px 0px',
                }}>{x.name}</Typography>
                {
                  type == '食べ物' && <Typography style={{
                    fontWeight:600,
                    margin: '10px 0px',
                  }}>
                    {x.price}
                  </Typography>
                }
                <Box display='flex'>
                  <Rating
                    name="read-only"
                    value={x.ratingStar}
                    precision={0.5}
                    readOnly
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  input: {
    width: 500,
    height: 56,
    background: 'white',
    border: 'none',
    borderRadius: 16,
    color: 'black',
    fontSize: 24,
    marginRight: 20,
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
  formControl: {
    minWidth: 120,
    '& .MuiListItem-gutters': {
      color: 'black !important',
    },
    '& .MuiSelect-outlined.MuiSelect-outlined': {
      color: 'black',
      background: 'white',
    },
  },
}));
