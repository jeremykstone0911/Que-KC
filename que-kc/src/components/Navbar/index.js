import React from 'react';
import { createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textDecoration: 'underline',
      textDecorationColor: '#E0BDA1'
    },
    label: {
        width: '100%',
        marginLeft: 0,
        marginRight: 0
    }
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className="appBar" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            QUE KC CHALLENGE
          </Typography>
          <Button color="inherit" className="btn">Login</Button>
            <span>/</span>
           <Button color="inherit" className="btn">Sign Up</Button> 
        </Toolbar>
      </AppBar>
    </div>
  );
}