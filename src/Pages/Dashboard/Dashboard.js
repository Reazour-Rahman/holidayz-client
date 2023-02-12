import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Packages from "./Packages/Packages";
import useAuth from "../../Hooks/useAuth";
import Users from "./Users/Users";
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const {logOut} = useAuth();

  return (
    <Box sx={{ display: "flex" }}>

      <CssBaseline  />
      <AppBar  position="fixed" open={open}>
        <Toolbar style={{backgroundColor:"#070617"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Welcome to the Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{backgroundColor:"#070617"}}>
          <IconButton className="text-white" onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List style={{height:"100vh", backgroundColor:"#070617"}}>
          <Link className="text-decoration-none text-white" to="/dashboard">
            <ListItem button>
              <ListItemIcon className="ms-2 fs-5 text-white"><i class="fas fa-blog"></i></ListItemIcon>
              <ListItemText primary={"Blogs"} />
            </ListItem>
          </Link>

          <Link className="text-decoration-none text-white" to="/dashboard/addBlog">
            <ListItem button>
              <ListItemIcon className="ms-2 fs-5 text-white"><i class="fas fa-folder-plus"></i></ListItemIcon>
              <ListItemText primary={"Add Blog"} />
            </ListItem>
          </Link>

          <Link className="text-decoration-none text-white" to="/dashboard/users">
            <ListItem button>
              <ListItemIcon className="ms-2 fs-5 text-white"><i class="fas fa-users"></i></ListItemIcon>
              <ListItemText primary={"Users"} />
            </ListItem>
          </Link>

          <Link className="text-decoration-none text-white" to="/dashboard/postRequest">
            <ListItem button>
              <ListItemIcon className="ms-2 fs-5 text-white"><i class="fas fa-spinner"></i></ListItemIcon>
              <ListItemText primary={"Post Request"} />
            </ListItem>
          </Link>

          <span className="text-decoration-none text-white">
            <ListItem button>
              <ListItemIcon className="ms-2 fs-5 text-white"><i class="far fa-comment"></i></ListItemIcon>
              <ListItemText primary={"Messages"} />
            </ListItem>
          </span>

          <ListItem button>
            <ListItemIcon className="ms-2 fs-5 text-white"><i class="far fa-comment-alt"></i></ListItemIcon>
            <ListItemText className="text-white" primary={"Reviews"} />
          </ListItem>

          <Divider />
          <ListItem button onClick={logOut}>
            <ListItemIcon className="ms-2 fs-5 text-danger fw-bold text-white"><LogoutIcon/></ListItemIcon>
            <ListItemText className="text-danger fw-bold text-white" primary={"SignOut"} />
          </ListItem>

        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Outlet>
        <Routes>
        <Route path="/dashboard/packages" element={<Packages></Packages>} />
        <Route path="/dashboard/users" element={<Users/>} />
        </Routes>
        </Outlet>

      </Box>
    </Box>
  );
}

