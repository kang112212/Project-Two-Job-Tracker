import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#26282b",
    color: "#f3a850",
    fontFamily: "Garamond",
  },
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState('folder');
return (
  <BottomNavigation
    id="botNav"
    value={value}
    onChange={(event, newValue) => {
    setValue(newValue);
  }}
  showLabels
  className={classes.root} >

    <BottomNavigationAction className={classes.root} label="New Prospect" value="folder" icon={<FolderIcon />}  component={Link} to="/" />

    <BottomNavigationAction className={classes.root} label="Current Prospects" icon={<FavoriteIcon />}  component={Link} to="/ExistProspectPage"/>
  </BottomNavigation>
  )
}
