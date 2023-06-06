import { Box, CardMedia, Typography, makeStyles } from "@material-ui/core"
import React from "react"

export const PreviewItem = ({image, name}:{image: string, name: string}) =>{
  const classes = useStyles();
  return <Box className={classes.container}>
    <CardMedia image={image} style={{
      width: 300,
      height: 200,
      borderRadius: 20,
    }}/>
    <Typography>
      {name}
    </Typography>
  </Box>
}   
const useStyles = makeStyles((theme) => ({
  container:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    '& p':{
      fontSize: 16,
      marginTop: 12,
    }
  }
}))