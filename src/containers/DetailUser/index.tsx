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
  import { NavLink, useHistory, useParams } from 'react-router-dom';
  import AXIOS from 'services/axios';
  
  export const DetailUser = () => {
    const classes = useStyles();
    const [me, setMe] = useState<any>({})
    const [page, setPage] = useState(1);
    const [reviews, setReviews] = useState<any>([]);
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const getReviewPage = () => {
      const startIndex = (page - 1) * 4;
      const endIndex = startIndex + 4;
      if (!reviews) return [];
      return reviews.slice(startIndex, endIndex);
    };
  
    useEffect(() => {
        let user = localStorage.getItem('me')
        if (user) {
            setMe(JSON.parse(user))
            AXIOS.get(`reviews/user/${JSON.parse(user).id}`)
              .then((res) => {
                setReviews(res)
              })
        } else {
            history.push('/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
      
    return (
      <Box className={classes.container}>
        <CardMedia
          image={me.image}
          style={{
            width: 400,
            height: 280,
            borderRadius: 30,
          }}
        />
        <Box className={classes.content}>
          <Box className={classes.item}>
            <Typography>名前: </Typography>
            <Typography>{me.name}</Typography>
          </Box>
          <Box className={classes.item}>
            <Typography>メール: </Typography>
            <Typography>{me.email}</Typography>
          </Box>
          <Box className={classes.item}>
            <Typography>国籍: </Typography>
            <Typography>
                {me.nation == 'jp' &&
                    <svg xmlns="http://www.w3.org/2000/svg" style={{background:"#eee", width: 40, height:28}}>
                    <circle cx="50%" cy="50%" r="24%" fill="#bc002d"/>
                    </svg>
                }
                {me.nation == 'vi' &&
                    <svg width="40" height="28" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <rect width="30" height="20" fill="#da251d"/>
                    <polygon points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85" fill="#ff0"/>
                    </svg>                    
                }
            </Typography>
          </Box>
          <Box className={classes.item}>
            <Typography>状態: </Typography>
            <Typography>
              {me.status == 0 &&
               <div style={{color:'red'}}>ブロック</div>
              }
              {me.status == 1 &&
               <div style={{color:'green'}}>オンライン</div>
              }
            </Typography>
          </Box>
        </Box>
        <Box mt={5} width={'100%'}>
          {getReviewPage().map((r: any, i: any) => {
            console.log(r)
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
                onClick={() => history.push(`/detail-food/${r.food_id}`)}
              >            
                <Box
                  width="calc(100% - 140px)"
                  style={{
                    display: 'flex',
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-evenly"
                    width="100%"
                  >
                    <Box display="flex" alignItems="center">
                      <Rating
                        name="read-only"
                        value={r.rating}
                        precision={1}
                        readOnly
                        style={{
                          marginRight: 20
                        }}
                      />
                      <Typography>{new Date(r.review_date).toDateString()}</Typography>
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
              </Box>
            );
          })}
        </Box>
        {
        <Pagination
          count={Math.ceil(reviews ? reviews.length / 4 : 2)}
          onChange={(e, page) => {
            setPage(page);
          }}
        />
        }
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
      width: 600,
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
      width: 300,
      background: 'white',
      '& p': {
        color: 'black',
      },
    },
  }));
  