import {
  Box,
  Button,
  CardMedia,
  Modal,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AXIOS from 'services/axios';

export const CreateReview = ({
  open,
  handleClose,
  handleOpen,
  foodId,
  review,
  setReview
}: {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  foodId?: string;
  review?: any;
  setReview: (newReview:any) => void;
}) => {
  const classes = useStyles();
  const [rate, setRate] = useState(5);
  const [textField, setTextField] = useState('');
  const me = JSON.parse(localStorage.getItem('me') || '{}');
  useEffect(() => {
    setRate(review ? review.rating : 5)
    setTextField(review ? review.review_text : '');
  }, [review])
  return (
    <Modal
      open={open}
      onClose={() => {
        setReview(null)
        handleClose()
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={classes.modal}>
        {me && (
          <Box className={classes.header}>
            <Box className="center-root">
              <CardMedia
                image={me.image}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 50,
                }}
              />
              <Typography
                style={{
                  marginLeft: 12,
                  fontWeight: 600,
                }}
              >
                {me.name}
              </Typography>
            </Box>
            <Box
              style={{
                border: '1px solid black',
                borderRadius: 20,
                height: 33,
                padding: '0px 10px',
                cursor: 'pointer',
              }}
              onClick={() => {
                setReview(null)
                handleClose()
              }}
            >
              <Typography
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                X
              </Typography>
            </Box>
          </Box>
        )}
        <Box mt={2}>
          <Typography
            style={{
              fontSize: 18,
            }}
          >
            レーティング
          </Typography>
          <Rating
            value={rate}
            onChange={(e, v) => {
              setRate(v || 0)
            }}
            precision={1}
          />
        </Box>
        <Box mt={2}>
          <Typography
            style={{
              fontSize: 18,
              marginBottom: 12,
            }}
          >
            レビュー
          </Typography>
          <TextField
            value={textField}
            onChange={(e) => {
              setTextField(e.target.value);
            }}
            multiline
            minRows={4}
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box mt={2} className="center-root">
          {review == null && <Button
            style={{
              padding: '0px 12px',
              border: '1px solid red',
              borderRadius: 20,
            }}
            onClick={async () => {
              if (foodId) {
                const data = await AXIOS.post('reviews', {
                  user_id: +me.id,
                  food_id: +foodId,
                  rating: rate,
                  image: 'string',
                  review_text: textField,
                  review_date: new Date().toISOString(),
                });
                setReview(null)
                handleClose();
              }
            }}
          >
            <Typography>追加</Typography>
          </Button>}
          {review != null && <Button
            style={{
              padding: '0px 12px',
              border: '1px solid red',
              borderRadius: 20,
            }}
            onClick={async () => {
              if (foodId) {
                const data = await AXIOS.patch(`reviews/${review.id}`, {
                  user_id: +me.id,
                  food_id: +foodId,
                  rating: rate,
                  image: 'string',
                  review_text: textField,
                  review_date: new Date().toISOString(),
                }); 
                setReview(null)
                handleClose();
              }
            }}
          >
            <Typography>編集</Typography>
          </Button>}
        </Box>
      </Box>
    </Modal>
  );
};

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    background: 'white',
    '& p': {
      color: 'black',
    },
    borderRadius: 20,
    padding: 20,
    '& textarea': {
      color: 'black',
    },
    '& .MuiFormControl-fullWidth': {
      border: '4px solid black',
      borderRadius: 10,
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
