import { Box, CardMedia, Typography, makeStyles } from '@material-ui/core';
import { Rating } from '@mui/material';
import React from 'react';

export const PreviewCommentItem = ({
  name,
  content,
  avatarUrl,
}: {
  name: string;
  content: string;
  avatarUrl: string;
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box position="relative" width="100%">
        <CardMedia
          image={avatarUrl}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            position: 'absolute',
            top: -20,
            left: 30,
          }}
        />
        <Rating
          name="read-only"
          value={4}
          readOnly
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
          }}
        />
      </Box>
      <Box className={classes.content}>
        <Typography>{name}</Typography>
        <Typography>{content}</Typography>
      </Box>
    </Box>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    width: 280,
    height: 300,
    background: 'bisque',
    borderRadius: 30,
  },
  content : {
    paddingTop : 70,
    paddingLeft: 20,
    paddingRight: 20,
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    '&>p:first-child':{
      fontSize: 20,
      fontWeight: 600,
      marginBottom: 8
    }
  }
}));
