import { Box, CardMedia, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box
        style={{
          background: 'lightpink',
          padding: '20px 40px',
          borderRadius: 30,
        }}
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          // autoPlay
          transitionTime={1000}
          infiniteLoop
        >
          <Box className={classes.wrapper}>
            <Box className={classes.wrapper2}>
              <Typography>Bún chả</Typography>
              <Typography>Giá: 40000 VND</Typography>
              <Typography>Số sao: 5 sao</Typography>
              <Typography>Đánh giá: 35 người</Typography>
            </Box>
            <CardMedia image="images/image1.jpg" className={classes.img} />
          </Box>
          <Box className={classes.wrapper}>
          <Box className={classes.wrapper2}>
              <Typography>Bún chả</Typography>
              <Typography>Giá: 40000 VND</Typography>
              <Typography>Số sao: 5 sao</Typography>
              <Typography>Đánh giá: 35 người</Typography>
            </Box>
            <CardMedia image="images/image2.jpeg" className={classes.img} />
          </Box>
          <Box className={classes.wrapper}>
          <Box className={classes.wrapper2}>
              <Typography>Bún chả</Typography>
              <Typography>Giá: 40000 VND</Typography>
              <Typography>Số sao: 5 sao</Typography>
              <Typography>Đánh giá: 35 người</Typography>
            </Box>
            <CardMedia image="images/image2.jpeg" className={classes.img} />
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
};

export default Home;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  wrapper2: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    '& p':{
      fontSize: 20
    }
  },
  img: {
    height: 400,
    width: 500,
    borderRadius: 30,
  },
}));
