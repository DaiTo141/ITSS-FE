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
import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { PreviewCommentItem } from 'components/PreviewCommentItem';
import { PreviewItem } from 'components/PreviewItem';
import { useHistory } from 'react-router-dom';
import { Rating, Slider } from '@mui/material';
import AXIOS from 'services/axios';

export const Search = () => {
  const [search, setSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const history = useHistory();
  const [foods, setFoods] = useState<any>([]);
  const [restaurants, setRestaurants] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const [type, setType] = React.useState('食べ物');
  const [lowPrice, setLowPrice] = useState(0);
  const [highPrice, setHighPrice] = useState(100000);
  const getFoods = async () => {
    const data = await AXIOS.get('foods')
    setFoods(data)
  }

  const getRestaurants = async () => {
    const data = await AXIOS.get('restaurants')
    setRestaurants(data)
  }

  useEffect(() => {
    getFoods()
    getRestaurants()
  }, []);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    // if (event.target.value == '日本人好む料理') {
    //   let newData:any = []
    //   foods.forEach((f:any) => {
    //     let count = 0
    //     if (f.reviews.length > 0) {
    //       f.reviews.forEach((rv:any) => {
    //         if (rv.rating >= 4) count += 1
    //       })
    //       if (count / f.reviews.length >= 0.8) newData.push(f)
    //     } 
    //     setData(newData)
    //     setIsSearch(true)
    //   })
    // } else {
    //   if (search == '') setIsSearch(false)
    // }
    setType(event.target.value as string);
  };
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
            onKeyDown={async (e) => {
              if (e.key === 'Enter') {
                setIsSearch(true);
                if (type == '食べ物') {
                  let results = foods.filter((f:any) => f.name.includes(search))
                  setData(results)
                } else {
                  let results = restaurants.filter((f:any) => f.name.includes(search))
                  setData(results)
                }
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
              {/* <MenuItem
                value={'日本人好む料理'}
                style={{
                  color: 'black',
                }}
              >
                日本人好む料理
              </MenuItem> */}
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
              {foods.length > 0 && foods.map((a:any, i:any) => {
                return (
                  <Box
                    key={i}
                    mr={3}
                    ml={3}
                    style={{
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      history.push(`detail-food/${a.id}`);
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
              {restaurants.length > 0 && restaurants.map((a:any, i:any) => {
                return (
                  <Box
                    key={a.id}
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
          <Slider
            size="small"
            defaultValue={[0, 100000]}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
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
                onClick={() => {
                  if (type == '食べ物') history.push(`detail-food/${x.id + 1}`);
                  else history.push(`detail-restaurant/${x.id + 1}`);
                }}
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
                    価格: {x.price} VND
                  </Typography>
                }
                {
                  type == 'レストラン' && <Typography style={{
                    fontWeight:600,
                    margin: '10px 0px',
                  }}>
                    価格: {x.low_price} VND - {x.high_price} VND
                  </Typography>
                }
                <Box display='flex'>
                  <Rating
                    name="read-only"
                    value={x.rating_average}
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
