import { Box, CardMedia, Typography, makeStyles } from '@material-ui/core';
import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AXIOS from 'services/axios';
import { fake3 } from 'utils/helper';
export const DetailRestaurant = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const classes = useStyles();
  // const data = fake3[+restaurantId - 1];
  const [data, setData] = useState<any>();
  useEffect(() => {
    const getDetail = async () => {
      const detail = (await AXIOS.get(`restaurants/${restaurantId}`)) as any;
      console.log('detail', detail);
      setData(detail);
    };
    getDetail();
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
            precision={0.5}
            readOnly
          />
        </Box>
        <Box className={classes.item}>
          <Typography>価格: </Typography>
          <Typography>{data.low_price} - {data.high_price}</Typography>
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
