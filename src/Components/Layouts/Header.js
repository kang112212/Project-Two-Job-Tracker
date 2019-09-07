import React from 'react';
import { AppBar, Toolbar, CssBaseline, makeStyles } from '@material-ui/core/';
import Icons from './Icons'


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#151a20",
    display: 'flex',
    margin: '0px auto 10px',
    paddingTop: "10px",
  },
  head:{
  color: "#f3a850",
}
}))



export default function ElevateAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar className={classes.root}>
          <Toolbar className={classes.root}>
          <div className={classes.head}> <h1>Profesional Business Journal (PB&J)</h1> </div>
          </Toolbar>
        </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
