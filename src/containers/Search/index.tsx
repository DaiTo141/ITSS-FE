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
import React, { useState, useEffect, useCallback } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { PreviewCommentItem } from 'components/PreviewCommentItem';
import { PreviewItem } from 'components/PreviewItem';
import { useHistory } from 'react-router-dom';
import { Rating, Slider, Pagination } from '@mui/material';
import AXIOS from 'services/axios';

export const Search = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const history = useHistory();
  const [foods, setFoods] = useState<any>([]);
  const [restaurants, setRestaurants] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const [type, setType] = React.useState('食べ物');
  const [prices, setPrices] = useState([0, 100]);
  const [percent, setPercent] = useState(50);
  const getFoods = async (params:any, type:any) => {
    const data = await AXIOS.get('foods', {
      params: params
    })
    setFoods(data)
    if (type == '日本人好む料理'||type == '食べ物') setData(data)
  }

  const getRestaurants = async (params:any, type:any) => {
    const data = await AXIOS.get('restaurants', {
      params: params
    })
    setRestaurants(data)
    if (type == 'レストラン') setData(data)
  }

  useEffect(() => {
    let params = {
      name: search,
      low_price: type == 'レストラン' ? prices[0] * 10000 : prices[0] * 1000,
      high_price: type == 'レストラン' ? prices[1] * 10000 : prices[1] * 1000,
      jp_like: type == '日本人好む料理' ? true : false,
      percent
    }
    getFoods(params, type)
    getRestaurants(params, type)
    if (search !== '') {
      setIsSearch(true)
    } else {
      if (params.jp_like == true) setIsSearch(true)
      else setIsSearch(false)
    }
  }, [prices, search, type, percent]);

  const getDataPage = () => {
    const startIndex = (page - 1) * 8;
    const endIndex = startIndex + 8;
    if (!data) return [];
    return data.slice(startIndex, endIndex);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
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
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
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
              <MenuItem
                value={'日本人好む料理'}
                style={{
                  color: 'black',
                }}
              >
                日本人好む料理
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
                      history.push(`detail-restaurant/${a.id}`);
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
            marginTop: 20,
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            flexDirection: 'column'
          }}
        >
          <Box 
            style={{
              width: 500,
              marginTop: 25,
              display: 'flex',
              alignItems: 'center',
              justifyItems: 'center',
              flexDirection: 'column'
            }}
          >
            <div style={{
              display: 'flex',
              columnGap: 50
            }}>
              <div>
                {type != 'レストラン' &&
                <InputLabel style={{color: 'black', fontSize: 20}}> 
                  価格: {prices[0] * 1000} VND - {prices[1] * 1000} VND 
                </InputLabel>
                }
                {type == 'レストラン' &&
                <InputLabel style={{color: 'black', fontSize: 20}}> 
                  価格: {prices[0] * 10000} VND - {prices[1] * 10000} VND 
                </InputLabel>
                }
                <Slider
                  value={prices}
                  onChange={(e, value:any) => {
                    if (value[0] <= value[1]) setPrices(value)
                    else setPrices([value[1], value[0]])
                  }}
                />
              </div>
            {type == '日本人好む料理' &&
              <div>
                <InputLabel style={{color: 'black', fontSize: 20}}> 
                  日本人好みのパーセント: {percent}%
                </InputLabel>
                <Slider
                  value={percent}
                  onChange={(e, value:any) => {
                    setPercent(value)
                  }}
                />
              </div>
            } 
            </div>
          </Box>
          <Box
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginTop: 40,
            }}
          >
            {getDataPage().map((x: any, i: any) => {
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
                    switch (type) {
                      case '食べ物':
                        history.push(`detail-food/${x.id}`)
                        break
                      case 'レストラン':
                        history.push(`detail-restaurant/${x.id}`)
                        break
                      case '日本人好む料理':
                        history.push(`detail-food/${x.id}`)
                        break 
                    }
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
                    (type == '食べ物' || type == '日本人好む料理') && <Typography style={{
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
                      precision={1}
                      readOnly
                    />
                  </Box>
                </Box>
              );
            })}
          </Box>
          { data.length > 0 &&
            <Pagination
              count={Math.ceil(data ? data.length / 8 : 2)}
              onChange={(e, page) => {
                setPage(page);
              }}
            />
          }
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