import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#151a20",
    color: "#f3a850",
    '&$selected': {
      color: "white",
    }
  },
  selected: {}
}))

export default function SimpleBottomNavigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState('folder');
return (
  <BottomNavigation
id="work"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  showLabels
  className={classes.root} >

  <BottomNavigationAction className={classes.root} label="New Prospect" value="folder" icon={<FolderIcon />}  component={Link}
  to="/" />

 <BottomNavigationAction className={classes.root} label="Current Prospects" icon={<FavoriteIcon />}  component={Link} to="/ExistProspectPage"/>

</BottomNavigation>
) }
