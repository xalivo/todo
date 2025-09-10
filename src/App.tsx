import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";

const App = () => {
    return (<Box sx={{ width: '100%', height: '100vh', margin: 0 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    </Box>);
}

export default App;
