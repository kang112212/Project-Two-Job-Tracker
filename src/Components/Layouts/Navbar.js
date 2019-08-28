import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';



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
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.root} label="New Prospect" value="folder" icon={<FolderIcon />} />
      <BottomNavigationAction className={classes.root} label="Current Prospects" icon={<FavoriteIcon />} />
    </BottomNavigation>
  );
}
