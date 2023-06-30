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
import React, { useState } from 'react';
import AXIOS from 'services/axios';
export const CreateReview = ({
  open,
  handleClose,
  handleOpen,
  foodId,
  isAdd,
  data,
}: {
  open: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  foodId?: string;
  isAdd?: boolean;
  data?:any;
}) => {
  const classes = useStyles();
  const [rate, setRate] = useState(5);
  const [textField, setTextField] = useState('');
  const me = JSON.parse(localStorage.getItem('me') || '{}');
  const getFoods = async () => {
    const data = await AXIOS.get('foods');
    localStorage.setItem('foods', JSON.stringify(data));
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
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
              onClick={handleClose}
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
            onChange={(e, v) => setRate(v || 0)}
            precision={0.5}
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
          <Button
            style={{
              padding: '0px 12px',
              border: '1px solid red',
              borderRadius: 20,
            }}
            onClick={async () => {
              if (isAdd && foodId) {
                const data = await AXIOS.post('reviews', {
                  user_id: +me.id,
                  food_id: +foodId,
                  rating: rate,
                  image: 'string',
                  review_text: textField,
                  review_date: new Date().toISOString(),
                });
                await getFoods();
                setTimeout(() => {
                  handleClose();
                }, 500);
              }
            }}
          >
            <Typography>追加</Typography>
          </Button>
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
      // background: 'aquamarine',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
