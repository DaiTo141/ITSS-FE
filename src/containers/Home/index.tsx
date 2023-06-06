import { Box, CardMedia, Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { PreviewItem } from 'components/PreviewItem';
import { PreviewCommentItem } from 'components/PreviewCommentItem';

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

const fake = [
  {
    name: 'ブンボーフエ',
    image:
      'https://bepcuatoi.com/wp-content/uploads/2020/08/mon-pho-bo-thom-ngon.png',
  },
  {
    name: 'バインクオン',
    image:
      'https://bepcuatoi.com/wp-content/uploads/2021/08/banh-cuon-thanh-tri-1200x900.jpg',
  },
  {
    name: 'バインクオン 1',
    image:
      'https://bepcuatoi.com/wp-content/uploads/2021/08/banh-cuon-thanh-tri-1200x900.jpg',
  },
];

const fake2 = [
  {
    name: '武石宮野',
    content:
      '店員さんがスープに使う牛骨の手入れをしました。スープはとても複雑な味で、たくさんの具材を使っているのだと思いますが、きっと細かいところまで気を配って初めてこういう味に仕上がるんだろうなあ、と思いました',
    avatarUrl: 'https://avatarfiles.alphacoders.com/182/182133.jpg',
  },
  {
    name: '静天音',
    content:
      '本当においしかったです。これから頻繁に通いたいと思いました。ベトナム料理って「フォー」と生春巻きしかないと思っていたら、美味しいものがたくさんあるんですね',
    avatarUrl:
      'https://symbols.vn/wp-content/uploads/2022/02/Avatar-Luffy-dep-an-tuong-nhat.jpg',
  },
  {
    name: '静天音',
    content:
      '本当においしかったです。これから頻繁に通いたいと思いました。ベトナム料理って「フォー」と生春巻きしかないと思っていたら、美味しいものがたくさんあるんですね',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSilzHR9RIEyQ21wKSb_Ynk3N_A--cgXLOBDQ&usqp=CAU',
  },
];

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
