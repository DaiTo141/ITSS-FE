import {
  Box,
  Card,
  CardMedia,
  Modal,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Pagination, Rating, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import AXIOS from 'services/axios';
import { CreateReview } from './CreateReview';

export const DetailFood = () => {
  const { foodId } = useParams<{ foodId: string }>();
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [data, setData] = useState<any>({});
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [review, setReview] = React.useState<any>(null);
  const handleOpen = () => {
    if (!localStorage.getItem('me')) {
      history.push('/login');
      return;
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const getDataReviewPage = () => {
    const startIndex = (page - 1) * 4;
    const endIndex = startIndex + 4;
    if (!data.reviews) return [];
    return data.reviews.slice(startIndex, endIndex);
  };

  const getFood = (foodId:any) => {
    AXIOS.get(`foods/${foodId}`).then((food:any) => {
      const reviews = food.reviews.reverse();
      food.reviews = reviews;
      setData(food);
    })
  }

  useEffect(() => {
    getFood(foodId)
  }, [foodId, open]);

  if (JSON.stringify(data) == '{}') return <Box></Box>;
  
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
          <Typography>レストラン: </Typography>
          <Typography><Button onClick={() => history.push(`/detail-restaurant/${data.restaurant_id}`)}>{data.restaurant_name}</Button></Typography>
        </Box>
        <Box className={classes.item}>
          <Typography>価格: </Typography>
          <Typography>{data.price} VND</Typography>
        </Box>
        <Box className={classes.item}>
          <Typography>評価: </Typography>
          <Rating
            name="read-only"
            value={data.rating_average}
            precision={1}
            readOnly
          />
        </Box>
        <Box className={classes.item}>
          <Typography>レーティング: </Typography>
          <Typography>{data.description}</Typography>
        </Box>
      </Box>
      {localStorage.getItem('me') &&
      <Box
        display="flex"
        justifyContent="flex-end"
        width="100%"
        mt={5}
        onClick={handleOpen}
      >
        <CardMedia
          image="/images/chat_plus.png"
          style={{
            width: 52,
            height: 52,
            padding: 10,
            border: '1px solid black',
            borderRadius: 10,
            cursor: 'pointer',
          }}
        />
      </Box>}
      <Box mt={5} width={'100%'}>
        {data.reviews.length > 0 && getDataReviewPage().map((r: any, i: any) => {
          return (
            <Box
              display="flex"
              justifyContent="space-between"
              width={'100%'}
              key={i}
              style={{
                border: '1px solid black',
                padding: 20,
                margin: '20px 0px',
                borderRadius: 50,
                background: 'white',
              }}
            >
              <Box
                width="calc(100% - 140px)"
                style={{
                  display: 'flex',
                }}
              >
                <CardMedia
                  image={r.user.image || ''}
                  style={{
                    width: 120,
                    height: 100,
                    marginRight: 20,
                    borderRadius: '50%',
                  }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-evenly"
                  width="100%"
                >
                  <Box display="flex" alignItems="center">
                    <Box
                      style={{
                        border: '1px solid red',
                        background: 'white',
                        padding: '5px 20px',
                        marginRight: 20,
                        borderRadius: 20,
                      }}
                    >
                      <Typography>{r.user.name}</Typography>
                    </Box>
                    <Rating
                      name="read-only"
                      value={r.rating}
                      precision={1}
                      readOnly
                      style={{
                        marginRight: 20
                      }}
                    />
                    {r.user.nation == 'jp' &&
                    <svg xmlns="http://www.w3.org/2000/svg" style={{background:"#eee", width: 40, height:28}}>
                      <circle cx="50%" cy="50%" r="24%" fill="#bc002d"/>
                    </svg>
                    }
                    {r.user.nation == 'vi' &&
                    <svg width="40" height="28" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" version="1.1">
                      <rect width="30" height="20" fill="#da251d"/>
                      <polygon points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85" fill="#ff0"/>
                    </svg>                    
                    }
                  </Box>
                  <Box
                    style={{
                      border: '1px solid red',
                      background: 'white',
                      padding: '5px 20px',
                      borderRadius: 20,
                      marginTop: 12,
                    }}
                  >
                    <Typography>{r.review_text}</Typography>
                  </Box>
                </Box>
              </Box>
              <Box width={120} display="flex" justifyContent="space-between">
                {localStorage.getItem('me') && r.user.id == JSON.parse(localStorage.getItem('me') || '').id && (
                    <Box onClick={()=>{
                      setOpen(true);
                      setReview(r)
                    }}>
                      <CardMedia
                        image="/images/chat.png"
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 25,
                          cursor:'pointer',
                        }}
                      />
                    </Box>
                  )}
                {localStorage.getItem('me') && r.user.id == JSON.parse(localStorage.getItem('me') || '{}').id && (
                    <Box
                      style={{
                        borderRadius: 25,
                        cursor: 'pointer',
                      }}
                      onClick={async () => {
                        let result = data.reviews.filter(
                          (x: any) => x.id != r.id,
                        );
                        let permisstion = confirm('本人のユーザーがコメントを除きたいか');
                        if (permisstion) {
                          setData({ ...data, reviews: result.reverse() });
                          await AXIOS.delete(`reviews/${r.id}`);
                          getFood(foodId)
                        }
                      }}
                    >
                      <CardMedia
                        image="/images/close.png"
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 25,
                        }}
                      />
                    </Box>
                  )}
              </Box>
            </Box>
          );
        })}
      </Box>
      <Pagination
        count={Math.ceil(data.reviews ? data.reviews.length / 4 : 2)}
        onChange={(e, page) => {
          setPage(page);
        }}
      />
      <CreateReview
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        foodId={foodId}
        review={review}
        setReview={setReview}
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
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: 'white',
    '& p': {
      color: 'black',
    },
  },
}));
