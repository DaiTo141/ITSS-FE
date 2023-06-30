import { Box, CardMedia, Typography, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { PreviewItem } from 'components/PreviewItem';
import { PreviewCommentItem } from 'components/PreviewCommentItem';
import { Rating } from '@mui/material';
import { useHistory } from 'react-router-dom';
import AXIOS from 'services/axios';

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const [foods, setFoods] = useState<any>([]);
  const [reviews, setReviews] = useState<any>([]);
  
  const getFoods = async () => {
    const data = await AXIOS.get('foods')
    setFoods(data)
  }

  const getReviews = async () => {
    const data = await AXIOS.get('reviews')
    setReviews(data)
  }

  useEffect(() => {
    getFoods()
    getReviews()
  }, []);

  return (
    <Box>
      <Box
        style={{
          background:
            'linear-gradient(180deg, rgba(86, 80, 84, 0.1) -3.21%, #F2BFA8 71.13%)',
          borderRadius: 30,
        }}
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay
          transitionTime={1000}
          infiniteLoop
        >
          {foods.length > 0 &&
              foods
              .slice(-3)
              .map((f: any, i: number) => {
                return (
                  <Box
                    className={classes.wrapper}
                    key={i}
                    onClick={() => {
                      history.push(`/detail-food/${f.id}`);
                    }}
                  >
                    <Box className={classes.wrapper2}>
                      <Typography>{f.name}</Typography>
                      <Typography>価格: {f.price} VND</Typography>
                      <Rating
                        name="read-only"
                        value={f.rating_average}
                        precision={0.5}
                        readOnly
                        style={{
                          margin: '8px 0px',
                        }}
                      />
                      <Typography>
                        レビュー:{' '}
                        {f.total_review}
                      </Typography>
                    </Box>
                    <CardMedia image={f.image} className={classes.img} />
                  </Box>
                );
              })}
        </Carousel>
      </Box>
      <Box className={classes.menu}>
        <Typography>ニューポスト</Typography>
        <Box
          style={{
            width: '100%',
            display: 'flex',
            // justifyContent: 'space-evenly',
            marginTop: 20,
            overflowY: 'auto',
          }}
        >
          {foods.length > 0 &&
            foods.map((a: any, i: any) => {
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
        <Typography>良いレビュー</Typography>
        <Box
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            marginTop: 40,
          }}
        >
          {reviews.length > 0 && reviews.slice(-3).map((a:any, i:any) => {
            return (
              <Box key={i}>
                <PreviewCommentItem
                  content={a.review_text}
                  avatarUrl={a.user.image}
                  name={a.user.name}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

const useStyles = makeStyles((_theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '40px 40px',
    cursor: 'pointer',
  },
  wrapper2: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    '& p': {
      fontSize: 20,
      margin: '8px 0px',
    },
    '&>p:first-child': {
      fontSize: 24,
      color: '#099462',
      fontWeight: 700,
    },
  },
  img: {
    height: 400,
    width: 500,
    borderRadius: 30,
  },
  menu: {
    marginTop: 20,
    marginBottom: 20,
    '&>p': {
      fontSize: 24,
      fontWeight: 700,
    },
    '&>div': {
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  },
}));
