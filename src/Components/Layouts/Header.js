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
}))



export default function ElevateAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar className={classes.root}>
          <Toolbar className={classes.root}>
            <Icons />
          </Toolbar>
        </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
