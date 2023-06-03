import { Box, makeStyles } from "@material-ui/core"
import React from "react"

export const NavBar = () => {
  const classes = useStyles();
  return <Box className={classes.container}>

  </Box>
}
const useStyles = makeStyles((theme) => ({
  container:{
    height: '150px',
    width:'100%',
    position:'fixed',
    top:'0',
    border:'1px solid black',
  }
}));