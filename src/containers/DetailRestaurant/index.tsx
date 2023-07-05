import { Box, CardMedia, Typography, makeStyles } from '@material-ui/core';
import { Rating, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AXIOS from 'services/axios';

export const DetailRestaurant = () => {
  const [page, setPage] = useState(1)
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const history = useHistory()
  const classes = useStyles();
  const [data, setData] = useState<any>();
  const getDetail = async (restaurantId: any) => {
    const detail = (await AXIOS.get(`restaurants/${restaurantId}`)) as any;
    setData(detail);
  };

  const getDataFoodPage = () => {
    const startIndex = (page - 1) * 4;
    const endIndex = startIndex + 4;
    if (!data.foods) return [];
    return data.foods.slice(startIndex, endIndex);
  };

  useEffect(() => {
    getDetail(restaurantId);
  }, [restaurantId]);

  if (!data) return <></>;
  
  return (
    <Box className={classes.container}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <CardMedia
          image={data.image}
          style={{
            width: 400,
            height: 280,
            borderRadius: 30,
          }}
        />
      </Box>
      <Box className={classes.content}>
        <Box className={classes.item}>
          <Typography>名前: </Typography>
          <Typography>{data.name}</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography>位置: </Typography>
          <Typography>{data.address}</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography>レーティング: </Typography>
          <Rating
            name="read-only"
            value={data.rating_average}
            precision={1}
            readOnly
          />
        </Box>
        <Box className={classes.item}>
          <Typography>価格: </Typography>
          <Typography>{data.low_price} VND - {data.high_price} VND</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography>開店時間: </Typography>
          <Typography>{data.open_time}</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography>閉店時間: </Typography>
          <Typography>{data.close_time}</Typography>
        </Box>
      </Box>
      {data.foods.length > 0 && 
        <Box
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: 40,
          }}
        > 
        {getDataFoodPage().map((x: any, i: any) => 
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
                history.push(`detail-food/${x.id}`);
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
              <Typography style={{
                  fontWeight:600,
                  margin: '10px 0px',
                }}>
                  価格: {x.price} VND
              </Typography>
              <Box display='flex'>
                <Rating
                  name="read-only"
                  value={x.rating_average}
                  precision={1}
                  readOnly
                />
              </Box>
            </Box>
        )}
      </Box>
    }
    <Pagination
      count={Math.ceil(data.foods ? data.foods.length / 4 : 2)}
      onChange={(e, page) => {
        setPage(page);
      }}
    />
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    flexDirection: 'column',
  },
  content: {
    marginTop: '40px',
    width: 700,
    background: 'white',
    borderRadius: 40,
    border: '1px solid black',
    padding: 20,
  },
  item: {
    display: 'flex',
    margin: '10px 0px',
    '&>p': {
      fontSize: 20,
    },
    '&>p:first-child': {
      marginRight: 20,
      fontWeight: 600,
      minWidth: 140,
    },
  },
}));
