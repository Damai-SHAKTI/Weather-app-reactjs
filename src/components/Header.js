import { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100% auto",
  },
  dropdownBtn: {
    color: "#ffffff",
  },
}));

export default function Header({ themeColor, setThemeColor, themes }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onSelectTheme = (themecolor) => {
    setAnchorEl(null);
    if (themecolor === "DARK") {
      setThemeColor(themes.grey)
    } else if (themecolor === "BLUE") {
      setThemeColor(themes.blue)
    } else if (themecolor === "GREEN") {
      setThemeColor(themes.green)
    } else if (themecolor === "ORANGE") {
      setThemeColor(themes.orange)
    } else if (themecolor === "PURPLE") {
      setThemeColor(themes.purple)
    } else {
      console.log("No theme found with the color", themecolor)
    }
    document.getElementById("dropdownBtnText").innerHTML = themecolor;
  };

  return (
    <div className={classes.root}>
        <AppBar style={{ backgroundColor: themeColor }} position="static">
            <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
                Weather App
              </Typography>
              <div className={classes.search}>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={(event) => openMenu(event)}
                  >
                      <Typography id="dropdownBtnText" className={classes.dropdownBtn}>BLUE</Typography>
                      <ArrowDropDownIcon />
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                  >
                      <MenuItem onClick={() => onSelectTheme("DARK")}>DARK</MenuItem>
                      <MenuItem onClick={() => onSelectTheme("BLUE")}>BLUE</MenuItem>
                      <MenuItem onClick={() => onSelectTheme("GREEN")}>GREEN</MenuItem>
                      <MenuItem onClick={() => onSelectTheme("PURPLE")}>PURPLE</MenuItem>
                      <MenuItem onClick={() => onSelectTheme("ORANGE")}>ORANGE</MenuItem>
                  </Menu>
              </div>
            </Toolbar>
        </AppBar>
    </div>
  );
}
