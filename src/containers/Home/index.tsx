import { Box, CardMedia, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { PreviewItem } from 'components/PreviewItem';
import { PreviewCommentItem } from 'components/PreviewCommentItem';
import { fake, fake2 } from 'utils/helper';

const Home = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box
        style={{
          background: 'lightpink',
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
        <Typography>良いレビュー</Typography>
        <Box
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            marginTop: 40,
          }}
        >
          {fake2.map((a) => {
            return (
              <Box key={a.name}>
                <PreviewCommentItem
                  content={a.content}
                  avatarUrl={a.avatarUrl}
                  name={a.name}
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

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '40px 40px',
  },
  wrapper2: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    '& p': {
      fontSize: 20,
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
  },
}));
