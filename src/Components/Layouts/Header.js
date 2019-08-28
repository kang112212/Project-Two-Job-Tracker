import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Icons from './Icons'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#151a20",
    display: 'flex',
    margin: '0px auto 10px',

}
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
