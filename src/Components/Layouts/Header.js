import React from 'react';
import { AppBar, Toolbar, CssBaseline, makeStyles } from '@material-ui/core/';
import Icons from './Icons'


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#151a20",
  },
  head:{
  color: "#f3a850",
  textAlign: "center",
}
}))



export default function ElevateAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar >
          <Toolbar className={classes.root}>
          <div className={classes.head}> <h1>Profesional Business Journal (PB&J)</h1> </div>
          </Toolbar>
        </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
