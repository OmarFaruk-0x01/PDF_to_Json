const {
  colors,
  CssBaseline,
  ThemeProvider,
  Container,
  createTheme,
  Box,
  SvgIcon,
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Input,
  ListItemButton,
  ListItemText,
  ExpandMore,
  Icon,
  ListItemIcon,
  CircularProgress,
  Collapse,
  List,
} = MaterialUI;
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: colors.red.A400,
    },
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function App() {
  const [FileLists, setFileLists] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Container component="main" minWidth="x" style={{ width: "100%" }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: "100%" }}
        >
          <Button
            type="button"
            fullWidth
            variant="outlined"
            sx={{
              mt: 3,
              mb: 2,
              ml: "auto",
              width: "30%",
              alignSelf: "flex-end",
            }}
          >
            <Input
              type="file"
              style={{ opacity: 0, position: "absolute", width: "100%" }}
            />
            Upload PDF
          </Button>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Icon>picture_as_pdf</Icon>
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            <ListItemText
              lableColor={"red"}
              primary="uploading...."
              style={{ color: "red", size: 10 }}
            />
            {/* {open ? <ExpandLess /> : <ExpandMore />} */}
            <ListItemIcon>
              <Icon>expand_less</Icon>
            </ListItemIcon>
            <CircularProgress variant="determinate" value={40} />
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon></ListItemIcon>
              </ListItemButton>
              <ListItemText primary="Starred" />
            </List>
          </Collapse>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, width: "30%" }}
          >
            Convert to JSON
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
