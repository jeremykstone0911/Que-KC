import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Link,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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
      color: "white",
      textDecoration: "underline",
      textDecorationColor: "#E0BDA1",
    },
    label: {
      width: "100%",
      marginLeft: 0,
      marginRight: 0,
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className="appBar">
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon onClick={handleClick} />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link href="/">Home</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/profile" color="inherit">
                  Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/profile" color="inherit">
                  Login
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/profile" color="inherit">
                  Sign Up
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Hidden>

          <Link variant="h6" className={classes.title}>
            QUE KC CHALLENGE
          </Link>
          <Hidden smDown>
            <Button color="inherit" className="btn" href="/">
              Home
            </Button>
            <span>/</span>
            <Button color="inherit" className="btn" href="/profile">
              Profile
            </Button>
            <span>/</span>
            <Button color="inherit" className="btn" href="/login">
              Login
            </Button>
            <span>/</span>
            <Button color="inherit" className="btn" href="/signup">
              Sign Up
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
